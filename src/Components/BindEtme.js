import React, { Component } from 'react'

 class BindEtme extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              baslik:"JavaScript"
         }
     }
     clickHandler(){
         this.setState({
             baslik:"React"
         })
       
     }
     
    render() {
        return (
            <div>
               <h1>{this.state.baslik}</h1> 
               {/* <button onClick={this.clickHandler.bind(this)}>Değiştir</button> */}
               <button onClick={()=>this.clickHandler()}>Değiştir</button>
            </div>
        )
    }
}

export default BindEtme
