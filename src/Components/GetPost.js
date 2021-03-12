import React, { Component } from 'react'
import axios from 'axios'
import './GetPost.css'
export default class GetPost extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
           alinanData : []  
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{
            console.log(res.data)
            this.setState({alinanData:res.data})
        })
    }
    
    render() {
        return (
            <div>
            <h1>Tablo</h1>
            <table>
                <tbody>
                    <tr>
                      <th>id</th>  
                      <th>title</th>  
                      <th>body</th>  
                    </tr>
                    {
                        this.state.alinanData.map(item=>(
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.body}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            </div>
        )
    }
}
