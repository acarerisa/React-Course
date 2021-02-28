import React from 'react'

function Kitap({kitap}) {
    return (
        <div>
           <p>Kitap Adı: {kitap.name}</p> 
           <p>Yazarı: {kitap.author}</p> 
        </div>
    )
}

export default Kitap
