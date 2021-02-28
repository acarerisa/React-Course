import React, { Component } from 'react'

class KosulluRender extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             islem : true
        }
    }
    
    render() {
        return(
            this.state.islem ? 
            <div>İşlem: Geçerli</div> : 
            <div>İşlem: Geçersiz</div>
        )


        //******** ikinci Yöntem********* */
        // let mesaj;
        // if(this.state.islem){
        //     mesaj = <div>İşlem: Geçerli</div>
        // }else{
        //     mesaj = <div>İşlem: Geçersiz</div>
        // }

        // return (
        //     <div>{mesaj}</div>
        // )

        // ********* ilk yöntem *******
        // if(this.state.islem){
        //     return(
        //         <div>İşlem: Geçerli</div>
        //     )
        // }else{
        //     return(
        //         <div>İşlem: Geçersiz</div>
        //     )
        // }
       
    }
}

export default KosulluRender
