import React from 'react'

export default function Inline() {
    const baslik = {
        color : 'red',
        backgroundColor : "yellow",
        fontSize : "50px"
    }
    return (
        <div>
          <h1 style={baslik}>Başlık</h1> 
          <p style={{color:"red", fontSize:"45px"}}>paragraf</p> 
        </div>
    )
}
