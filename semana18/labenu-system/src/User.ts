import * as moment from 'moment'
moment.locale("pt-br")

export interface User{
    id: number
    name: string
    email: string
    birthDay: moment.Moment

}
