import React, { Component } from 'react'

export class Sayac extends Component {
    constructor(props){
        super(props)
        this.state = {
            sayac : 0
        }
    }

    birerArtir(){
        this.setState((prevState)=>({
            sayac : prevState.sayac + 1
        }))
    }

    // birerArtir(){
    //     this.setState({
    //         sayac : this.state.sayac + 1
    //     })
    // }
    ucerArtir(){
        this.birerArtir();
        this.birerArtir();
        this.birerArtir();

    }
    render() {
        return (
            <div>
                <h1>Sayaç: {this.state.sayac} </h1>
                <button onClick={()=>this.ucerArtir()}>Artır</button>
            </div>
        )
    }
}

export default Sayac
