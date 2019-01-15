import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Navigation from './components/Navigation';


class App extends Component {
  render() {
    return (
      <div className="App-Container">
      <Navigation />
      </div>
    );
  }
}

export default App;
