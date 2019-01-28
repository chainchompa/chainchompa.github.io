import React from "react";
import "./Projects.css";
import gameoflife from "../images/gameoflife.png";
import mud from "../images/mud.png";
import notes from "../images/notes.png";
import architects from "../images/architects.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Projects = () => {
  return (
    <div className="projects">
      <div className="project-container">
        <h3>Game of Life</h3>
        <img src={gameoflife} alt="Game of Life" />
        <p>
          A web app that emulates John Conway's Game of Life. A grid of cells
          that are either alive or dead that can be manually populated or
          created with templates. The cells advance based on a set of rules that
          govern their replication and destruction. Includes features like
          changing grid size, choosing different colors for grid and cells,
          randomizing the grid, and manually clicking through the steps of the
          game.
        </p>
        <a href="https://chainchompa.github.io/Game-Of-Life/">
          <FontAwesomeIcon icon="desktop" size="2x" color="white" />
        </a>
        <a href="https://github.com/chainchompa/Conways-Life">
          <FontAwesomeIcon icon="code" size="2x" color="white" />
        </a>
      </div>
      <div className="project-container">
        <h3>MUD Game</h3>
        <img src={mud} alt="Mud Game" />
        <p>A web based MUD Game.</p>
        <a href="">
          <FontAwesomeIcon icon="desktop" size="2x" color="white" />
        </a>
        <a href="">
          <FontAwesomeIcon icon="code" size="2x" color="white" />
        </a>
      </div>
      <div className="project-container">
        <h3>Notes App</h3>
        <img src={notes} alt="Notes App" />
        <p>A react Notes app</p>
        <a href="https://jennifernotes.netlify.com/">
          <FontAwesomeIcon icon="desktop" size="2x" color="white" />
        </a>
        <a href="https://github.com/chainchompa/back-end-project-week">
          <FontAwesomeIcon icon="code" size="2x" color="white" />
        </a>
      </div>
      <div className="project-container">
        <h3>S&J Architects Mock Website</h3>
        <img src={architects} alt="Architecture Website" />
        <p>A mock website for S&J Architects</p>
        <a href="https://chainchompa.github.io/User-Interface-Project-Week/">
          <FontAwesomeIcon icon="desktop" size="2x" color="white" />
        </a>
        <a href="https://github.com/chainchompa/LambdaNotes">
          <FontAwesomeIcon icon="code" size="2x" color="white" />
        </a>
      </div>
    </div>
  );
};

export default Projects;
