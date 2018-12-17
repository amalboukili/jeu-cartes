import React, { Component } from 'react';
import './App.css';
import GuessCount from './GuessCount';
import Card from './Card';

class App extends Component {
  render() {
    return (
      <div className="memory">
        <GuessCount guesses={0}/> 
        <Card card=":-)" feedback="hidden" /> 
        <Card card=":-D" feedback="justMatched" />
        <Card card="<3" feedback="justMismatched" />
        <Card card=":-P" feedback="visible" />
        <Card card=":-S" feedback="visible" />
        <Card card=":-(" feedback="justMatched" />
         
      </div>
    )
  }
}

export default App;
