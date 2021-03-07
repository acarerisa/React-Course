import React, { Component } from 'react'

export default class BindEtme extends Component {
    constructor(props){
        super(props)
        //this.changeLesson = this.changeLesson.bind(this)
        this.state = {
            ders : "Javascript",
            sure : "4"
        }
        
    }
    changeLesson = ()=>{
      this.setState({
          ders : "React",
          sure : "5"
      })  
    }
    render() {
        return (
            <div>
              <p>Dersin Adı: {this.state.ders} </p>  
              <p>Süre: {this.state.sure} saat</p>  
              {/* <button onClick = {this.changeLesson.bind(this)}>Dersi Değiştir</button> */}
              {/* <button onClick = {this.changeLesson}>Dersi Değiştir</button> */}
              {/* <button onClick = {()=>this.changeLesson()}>Dersi Değiştir</button> */}
              <button onClick = {this.changeLesson}>Dersi Değiştir</button>
            </div>
        )
    }
}
