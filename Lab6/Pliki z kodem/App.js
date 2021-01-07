import {Zegar} from './comp/comClass';
import {ComFunkc} from './comp/comFunc';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {Nadrzedny} from './comp/comN';
import Button from 'react-bootstrap/Button';
import {Map} from './comp/map';
import {FunkcjaWProps} from './comp/Prop';

function App() {
  return (
    <div className="App">
      <div className="wnetrze">Komponent klasowy</div>
    <Zegar />
    <div className="wnetrze">Komponent funkcyjny</div>
    <ComFunkc />
    <div className="wnetrze">Nadrzędne i podrzędne</div>
    <Nadrzedny />
    <br />
    <div className="wnetrze">bootstrap</div>
      <Button variant="info" size='sm' block><a href="https://react-bootstrap.github.io/components/buttons/"> Bootstap </a></Button>
    <br />
    <div className="wnetrze">
      Użycie map i key
        <p>Podaj rzecz a sprawdzę czy jest na liście</p>
      <Map />
      </div>
      <div className="wnetrze">
        Funkcja przesłana props
        <br></br>
      <FunkcjaWProps alt="strzalka" obroc={()=> document.body.style.animation = "rotate 10s forwards" } />
      </div>
    </div>
  );
}

export default App;
