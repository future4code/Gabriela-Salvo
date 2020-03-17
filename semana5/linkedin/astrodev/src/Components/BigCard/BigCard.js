import React from 'react';
import './BigCard.css'





function BigCard(props) {
    return (
       <main id="bcard-container">
          <section className="container-bigcard">
             <div className="container-items">            
                <h4> {props.titulo} </h4>
                <img src={props.imagem} alt='onda'/>
                <p> {props.texto} </p>
             </div>
          </section>
       </main>
    );
 }
 export default BigCard;