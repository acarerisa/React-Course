import React, {Component} from 'react'

export default class Form extends Component{
    
    render(){
        const {baslik}=this.props
        return(
            <div>
                <form>
                    <h1>{baslik}</h1>
                    <input placeholder="isim yaz"/>
                    <button>Gönder</button>
                    
                </form>
            </div>
        )
    }
}
//export default Form