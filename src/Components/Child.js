import React from 'react'

function Child(props) {
    return (
        <div>
            <button onClick={()=>props.sayHello('mehmet')}>Selam Gönder</button>
        </div>
    )
}

export default Child
