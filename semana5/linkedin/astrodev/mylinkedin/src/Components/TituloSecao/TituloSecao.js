import React from 'react'
import './TituloSecao.css'


function TituloSecao(propsTitulo) {
    return (
       <main className="container">
          <section className="container-BigCard">
             <div className="container-items">            
                <h4> {props.titulo} </h4>
                <img src={props.imagem} />
                <p> {props.texto} </p>
             </div>
          </section>
       </main>
    );
 }
 export default TituloSecao;