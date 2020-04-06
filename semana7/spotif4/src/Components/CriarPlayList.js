import React from 'react'
import axios from 'axios'


const baseUrl = "https://us-central1-future-apis.cloudfunctions.net/spotifour"


class CriarPlayList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            nomesPlayList:"",

        }
    }

    onChangeNomesPlayList =(event)=> {
        this.setState({nomesPlayList: event.target.value})
    }

    CriarPlayList =()=> {
        const body = {
            name: this.state.CriarPlayList
        }

        axios.post(`${baseUrl}/playlists`, body, {
            headers:{"auth": "gabriela-hamilton"}
        }).then(resposta =>{
            alert("Não foi possível criar.")
        }).catch (error=>{
            alert("Deu errado")
        })

    }

    render (){
        return(
            <div>
                <label>Criar Playlist</label>
                <input type ="text"
                onChange={this.onChangeNomesPlayList}
                value ={this.state.nomesPlayList}>
                </input>

                <button onClick ={this.CriarPlayList}>Criar!</button>
            </div>
        )
    }

    
}

export default CriarPlayList