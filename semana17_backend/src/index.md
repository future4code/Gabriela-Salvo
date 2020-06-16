

### Exercício 1

```
a. Acredito ser melhor em números pois temos uma gama maior de combinações.
```
```
b.

import { v4 } from "uuid";


export class IdGenerator {
  public generateId():string {
    const id = v4()
      return id;
    
  }
}
```

### Exercicio 2

```
a. Setamos nossa connection com o knex e depois inserimos dentro de uma tabela id, email e senha usando o  query builder

```


```

b.

const createUser= async (): Promise<any>=> {

  const response = await connection.raw(
    `
    Create table userTableName (
      id varchar(255) primary key,
      email varchar (255) not null,
      password varchar (255) not null
    )
    
    `
  )
}
// createUser()

```

```

c.
const insertIntoTable = async(id:string, email:string, password:string):Promise<any> =>{
  const response = await connection.raw (
    `
    INSERT INTO userTableName 
    VALUES (
      "${id}",
      "${email}",
      "${password}"
    )
    
    
    `
  )
}

```


```
d. insertIntoTable("001", "kylo_ren@starkiller.com","123")

```

### Exercicio 3

```

```
