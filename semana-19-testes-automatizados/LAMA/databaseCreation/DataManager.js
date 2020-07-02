const bdb = require("../build/data/baseDatabase.js");
const showDb = require("../build/data/showDatabase.js");
const bandDb = require("../build/data/bandDatabase.js");
const userDb = require("../build/data/userDatabase.js");

class DataManager extends bdb.BaseDatabase {
  constructor() {
    super();
    this.showTableName = new showDb.ShowDatabase()["showTableName"];
    this.bandTableName = new bandDb.BandDatabase()["bandTableName"];
    this.userTableName = new userDb.UserDatabase()["userTableName"];
    this.validate();
  }
  validate() {
    const keys = Object.keys(this);
    for (const key of keys) {
      if (key === "connectionData") {
        for (let connectionDataKey in this[key]) {
          this.validateEmptyField(
            connectionDataKey,
            this[key][connectionDataKey]
          );
        }
      } else if (!this[key] || this[key] === "<EMPTY>") {
        this.validateEmptyField(key, this[key]);
      }
    }
  }

  validateEmptyField(key, field) {
    if (!field || field === "<EMPTY>") {
      throw new Error(`
FALTANDO INFORMAÇÃO DO BANCO: ${key}
						
Você esqueceu de alguma configuração dos bancos.
Veja se colocou todas as constantes nos arquivos: 
		1. baseDatabase.ts,
		2. bandDatabase.ts,
		3. showDatabase.ts
			`);
    }
  }

  async createBandTable() {
    await this.connection.raw(`
      CREATE TABLE IF NOT EXISTS ${this.bandTableName} (
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) UNIQUE NOT NULL,
        music_genre VARCHAR(255) NOT NULL,
        responsible VARCHAR(255) UNIQUE NOT NULL 
      )
    `);
    return;
  }

  async createShowTable() {
    await this.connection.raw(`
      CREATE TABLE IF NOT EXISTS ${this.showTableName} (
        id VARCHAR(255) PRIMARY KEY,
        week_day VARCHAR(255) NOT NULL,
        start_time INT NOT NULL,
        end_time INT NOT NULL,
        band_id VARCHAR(255) NOT NULL,
        FOREIGN KEY(band_id) REFERENCES ${this.bandTableName}(id)
      )
    `);
    return;
  }

  async createUserTable() {
    await this.connection.raw(`
      CREATE TABLE IF NOT EXISTS ${this.showTableName} (
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        role VARCHAR(255) NOT NULL DEFAULT "normal"
      )
    `);
    return;
  }

  async execute() {
    await this.createBandTable();
    await this.createShowTable();
    await this.createUserTable();
    return;
  }
}

(async () => {
  const manager = new DataManager();
  await manager.execute();
  console.log(
    "Tabelas criadas com os nomes: ",
    manager.bandTableName,
    ", ",
    manager.showTableName,
    " e ",
    manager.userTableName
  );
  return;
})();
