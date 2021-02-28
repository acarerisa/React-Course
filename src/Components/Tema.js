import React, { Component } from 'react'

export default class Tema extends Component {

    
    constructor(){
        super()
        this.state = {
            bg:"#000080", color:"yellow"
        }
    }
    
    temaDegistir(){
        this.setState({
            bg:"#ADFF2F", color:"black"
        })
    }
    render() {
        return (
            <div>
                <h1 style={{backgroundColor:this.state.bg, color:this.state.color}} >Farklı Tema Geçişleri</h1>
                <button onClick= {()=>this.temaDegistir()}>Tema Değiştir</button>
            </div>
        )
    }
}
