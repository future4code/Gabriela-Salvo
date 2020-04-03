criandoPlaylist = () => {
    const body = {
        name: this.state.inputName
    }
    axios.post('https://us-central1-future-apis.cloudfunctions.net/spotifour/playlists', body, {
        headers: {
            'Content-Type': 'application/json',
            'auth': 'igor-hamilton'
        }
    }).then(response => {
        alert(`A playlist ${this.state.inputName} foi criada com sucesso!`);
        this.setState({
            inputName: ''
        })
    }).catch(error => {
        alert("Alguma coisa está errado.")
    })
}