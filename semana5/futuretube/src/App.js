import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App" >

            <div className="mi" />

            <header className="header" />
            <h1>FutureTube</h1>
            <nav/>
              <form>
                <input type="text" size="40" maxlength="50" /> <button type="button">Procurar</button>
              </form>
            <nav/>


          <main className="container"/>

                    <nav>
                        <a href=""><div class="link">Home</div></a>
                        <a href=""><div class="link">Em alta</div></a>
                        <a href=""><div class="link">Populares</div></a>
                        <a href=""><div class="link">Inscrições</div></a>
                        <a href=""><div class="link">Favoritos</div></a>
                        <a href=""><div class="link">Histórico</div></a>
                    </nav>
            
              <div/>

                    <div className="video irlanda">
                        <img src={require("../src/img/1.jpg")} />
                          <video/> <a/>

                          <p>Belezas da Irlanda</p>
                    </div>

                      <div className="video globulos">
                    <img src={require("../src/img/1.jpg")} />
                        <p>Góbulos - Uma viagem</p>

                      </div>
                      <div className="video espaco">
                       <img src={require("../src/img/2.jpg")} />
                        <p>Espaço Numa Gota</p>

                    </div>
                      <div className="video praia">
                       <img src={require("../src/img/3.jpg")} />
                        <p>Praie-se</p>
                    </div>
                        <div className="video timelapse">
                        <img src={require("../src/img/4.jpg")} />
                          <p>Time-lapse </p>
                    </div>
                        <div className="video rabbit">
                        <img src={require("../src/img/5.jpg")} />
                          <p>Um rabbit chamado Jojo</p>
                    </div>
                        <div className="video sideral">
                         <img src={require("../src/img/6.jpg")} />
                          <p>Espaço Sideral</p>
                    </div>
                          <div className="video future">
                             <img src={require("../src/img/1.jpg")} />
                            <p>Lançamento Future</p>
                    </div>
            
          <main/>

            <footer className="footer">

                    <p>Cadastre-se e receba nossa Newsletter!</p>
                <form>
                    <input type="email" required />
                    <input type="button" value="Cadastro" />
                </form>

            </footer>

    </div>


  );
}
        
        export default App;
