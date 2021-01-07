import React from 'react';
import './style.css';

export class Zegar extends React.Component {
    constructor() {
      super();
      this.state = {date: new Date()};
    }
  
    render() {
      return (
          <header>
        <div className="Header_Style"> 
          <h1>Witaj, świecie!</h1>
          <h2>Aktualny czas: {this.state.date.toLocaleTimeString()}.</h2>
        </div>
        </header>
      );
    }
  }