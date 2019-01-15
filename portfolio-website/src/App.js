import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import About from "./components/About";

class App extends Component {
  render() {
    return (
      <div className="App-Container">
        <Navigation />
        <About />
      </div>
    );
  }
}

export default App;
