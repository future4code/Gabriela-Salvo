import React from 'react';
import './App.css';
import Post from './components/Post/Post';



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      arrayDosPosts :[
        { nomeUsuario: ' paulinha', fotoUsuario: 'https://picsum.photos/50/50', fotoPost: 'https://picsum.photos/200/150' },
        { nomeUsuario: 'gabi', fotoUsuario: 'https://picsum.photos/50/10', fotoPost: 'https://picsum.photos/200/160' },
        { nomeUsuario: 'alexia', fotoUsuario: 'https://picsum.photos/50/32', fotoPost: 'https://picsum.photos/200/163' },
      ]

    }
  }

  render (){
    return(
      this.state.arrayDosPosts.map((post, index)=>{
        return(
          <div className={'app-container'}>
            <Post
            nomeUsuario ={post.nomeUsuario}
            fotoUsuario ={post.fotoUsuario}
            fotoPost ={post.fotoPost}
            key ={index}
            />
          </div>
        )
      })

    )
    }

  }
  export default App




 




