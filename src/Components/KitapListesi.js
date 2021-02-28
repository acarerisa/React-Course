import React from 'react'
import Kitap from './Kitap'
import { v4 as uuidv4 } from 'uuid';
function KitapListesi() {
    // const BList = [
    //     "Şeker Portakalı", "Gülün Adı",
    //     "İstanbul Hatırası"
    // ]
    const BList = [
        {name:"Şeker Portakalı", author:"Vasconcales"},
        {name:"Gülün Adı", author:"Umberto Eco"},
        {name:"İstanbul Hatırası", author:"Ahmet Ümit"},
        {name: "Devlet Ana", author:"Kemal Tahir"}
        
    ]
    return (
        <div>

            {
                BList.map((kitap,index)=>(
                    <Kitap key={uuidv4()}  kitap = {kitap} />
                ))
            }

          {/* <p>{BList[0]}</p> 
          <p>{BList[1]}</p> 
          <p>{BList[2]}</p>  */}
        </div>
    )
}

export default KitapListesi
