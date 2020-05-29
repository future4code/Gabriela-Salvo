import * as moment from 'moment'
moment.locale("pt-br")

// const today = moment()
// console.log(today.format("DD MM YYYY"))

type time = {
    name:string,
    description: string,
    date: moment.Moment,
    
}

const tasks : time[] = [
    {
         // name:process.argv[2],
        // description: process.argv[3],
        // date: moment(process.argv[4], "DD MM YYYY")
                //mock de dados
        name: "Jogar The Last of us 2",
        description: "Matar muitos infectados",
        date: moment()
       
    
    }
]


function createTask(name:string, description:string, data:moment.Moment) : any {
    const userData = data


    
}

console.log(tasks)
