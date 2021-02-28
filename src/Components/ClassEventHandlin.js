import React, { Component } from 'react'

export class ClassEventHandlin extends Component {

    clickHandler(){
        console.log("Class component tıklandı")
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Tıkla</button>
            </div>
        )
    }
}

export default ClassEventHandlin
