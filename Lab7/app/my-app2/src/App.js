import './App.css';
import Home from './Home';
import Form from './Form';
import Stronka from './Stronka';
import Component from './Component';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

var zmienna = [{
  "pierwszy":"Pierwszy punkt"
},
{
  "pierwszy":"Drugi punkt"
},
{
  "pierwszy":"Trzeci punkt"
}];

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Component />
          <Switch>
            <Route path='/stronka' render={()=>(<Stronka data={zmienna}/>)}/>
            <Route path='/form' component = {Form}/>
            <Route path='/' component = {Home}/>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
