import React from 'react'

function FunctionalEventHandling() {

    const clickHandler = ()=>{
        console.log("Tıklandı")
    }
    return (
        <div>
            <button onClick={clickHandler}>Tıklandı</button>
        </div>
    )
}

export default FunctionalEventHandling
