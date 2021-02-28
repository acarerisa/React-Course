import React from 'react'


const Kimlik = (props)=>{
    const {name, surname, country, children} = props
    return(
        <div >
            {children}
            <h1>
                İsim: {name}
                
                Ülke: {country}
                
                Soyisim: {surname}
                </h1>
        </div>
    )

    

    
}
export default Kimlik