import React, { Component } from 'react';
import './App.css';
import GenerateQuote from './GenerateQuote';
import DisplayQuote from './DisplayQuote';

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      quote : null
    };
  };

  getQuote () {
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(response => response.json())
      .then(data => {
        this.setState ({
          quote : data[0],
        });
    });
  };

  render() {
    const quote = this.state.quote;
    return (
      <div>
          <GenerateQuote selectQuote={()=> this.getQuote()} />
          {quote? <DisplayQuote quote={quote} /> : "no quote yet"}
      </div>
    );
  }
}

export default App;
