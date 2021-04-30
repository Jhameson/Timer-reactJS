import React, { Component } from 'react';

import img from './Assets/cronometro.png'
import './App.css'
export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            numero: 0,
            txtButton: 'START'
        }
        this.timer = null
        this.go = this.go.bind(this);
        this.clean = this.clean.bind(this);
    }

    go() {

        if (this.timer !== null) {
            clearInterval(this.timer);
            this.timer = null;
            this.state.txtButton = 'START'
        } else {



            this.timer = setInterval(() => {
                let state = this.state;
                state.numero += 0.1;
                this.setState(state);
            }, 100);
            this.state.txtButton = 'PAUSE'
        }
        this.setState(this.state);
    }
    clean() {
        if (this.timer !== null) {
            clearInterval(this.timer);
            this.timer = null;
           
        } 
        this.state.numero = 0;
        this.state.txtButton = 'VAI';
        this.setState(this.state);
    }

    render() {
        return (
            <div className="container">
                <h1>Timer</h1>
                <h2>Paused</h2>
                <img src={img} className="imagem" />
                <span className="timer">{this.state.numero.toFixed(1)}</span>
                <div className="areaBtn">
                    <a className="botao" onClick={this.go}>{this.state.txtButton}</a>
                    <a className="botao" onClick={this.clean}>LIMPAR</a>
                </div>
            </div>
        );
    }
}