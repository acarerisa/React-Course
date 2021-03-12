import React, { Component } from 'react'

export default class BasitForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username : '',
             lesson : '',
             date : '',             
        }
    }
    changeUsername=(event)=>{
        this.setState({
            username:event.target.value
        })
    }
    changeLesson=(event)=>{
        this.setState({
            lesson:event.target.value
        })
    }
    changeDate=(event)=>{
        this.setState({
            date:event.target.value
        })
    }
    submitHandler = (event)=>{
        alert(`${this.state.username} ${this.state.lesson} ${this.state.date}`)
        event.preventDefault()
    }
    
    render() {
        return (
            <div>
               <form onSubmit={this.submitHandler}>
                   <div>
                   <input onChange={this.changeUsername} value={this.state.username} type = "text"/>
                   </div>
                   <div>
                       <select onChange={this.changeLesson} value={this.state.lesson} >
                           <option>Python</option>
                           <option>Java</option>
                           <option>React</option>
                           
                       </select>
                   </div>
                   <div>
                       <input onChange={this.changeDate} value={this.state.date} type="date"/>
                   </div>
                   <button type="submit">Gönder</button>
                </form> 
            </div>
        )
    }
}
