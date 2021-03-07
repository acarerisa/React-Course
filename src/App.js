import logo from './logo.svg';
import './App.css';
import Selamla from './Components/Selamla'
import Form from './Components/Form'
import Kimlik from './Components/Kimlik'
import Tema from './Components/Tema'
import Sayac from './Components/Sayac';
import FunctionalEventHandling from './Components/FunctionalEventHandling';
import ClassEventHandlin from './Components/ClassEventHandlin';
import Parent from './Components/Parent';
import KosulluRender from './Components/KosulluRender';
import KitapListesi from './Components/KitapListesi';
import Stil from './Components/Stil';
import Inline from './Components/Inline';
import BindEtme from './Components/BindEtme';

function App() {
  return (
    <div className="App">
      <BindEtme/>
      {/* <Inline/> */}
      {/* <Stil/> */}
      {/* <KitapListesi/> */}
      {/* <KosulluRender/> */}
      {/* <Parent/> */}
      
      {/* <FunctionalEventHandling/>
      <ClassEventHandlin/> */}
      
      {/* <Sayac/> */}
      {/* <Tema/> */}
      {/* <Form
      baslik="Login Page"
      /> */}

     {/* <Selamla/>
      <Form/> */}

      {/* <Kimlik 
      name="isa"
      country="Turkey"
      >
       <p>Bu bir children elementtir.</p> 
      </Kimlik>       
      
      <Kimlik
       name="mark"
       country="Malta"
       />
      <Kimlik name="jason" surname="McDonald"/>
      <Kimlik name="anthony"/> */}
      
    </div>
  );
}

export default App;
