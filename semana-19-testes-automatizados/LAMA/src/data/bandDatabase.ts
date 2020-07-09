import { BaseDataBase } from './baseDatabase'
import { User } from '../model/User'
import { Band } from '../model/Band'


export class BandDatabase extends BaseDataBase {
    tableName:string = "BANDAS"

    private BandModel(databaseModelBand?: any): Band | undefined {
        
        return (
            databaseModelBand &&
             new Band (
                databaseModelBand.id,
                databaseModelBand.name,
                databaseModelBand.music_genre,
                databaseModelBand.responsible,
            ) 

        )
    }

    public async createBand(band: Band): Promise<void> {
        await super.getConnection().raw(
            `
            INSERT INTO ${this.tableName} (id, name, music_genre, responsible)
            VALUES (

                '${band.getId()}",
                '${band.getName()}",
                '${band.getGenre()}",
                '${band.getResponsible()}"
            )
            `
        )
    }


}