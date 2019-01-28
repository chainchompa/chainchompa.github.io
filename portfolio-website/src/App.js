import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faCode } from "@fortawesome/free-solid-svg-icons";

library.add(faDesktop);
library.add(faCode);

class App extends Component {
  render() {
    return (
      <div className="App-Container">
        <Navigation />
        <Route exact path="/" component={About} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
      </div>
    );
  }
}

export default App;
