import './style.css';
import React from "react";


const things = ['młotek', 'sitko', 'owoc', 'warzywo', 'chlebak', 'patelnia'];

export class Map extends React.Component {
  constructor() {
    super();    
    
    this.state = {
      filtered: things
    };
  }

  filter(e) {
    const text = e.currentTarget.value;
    const filtered= this.getFilteredForText(text)
    this.setState({
      filtered
    })
  }
  
  getFilteredForText(text) {
    return things.filter(thing => thing.toLowerCase().includes(text.toLowerCase()))
  }
  
  render () {
    return (
      <div>
        <input onInput={this.filter.bind(this)} />
        <List things={this.state.filtered} />
      </div>
    );
  }
};

const List = ({ things }) => {
  if (things.length > 0) {
    return (
      <ul>
        {things.map(thing => <li key={thing}>{thing}</li>)}
      </ul>
    );
  }

  return (
      [
    <p>Nie znaleziono.</p>,
    <p>Sprawdź czy poprawnie wpisałeś nazwę</p>
      ]
  );
};