import React from "react";
import "./Projects.css";
import gameoflife from "../images/gameoflife.png";
import mud from "../images/mud.png";
import notes from "../images/notes.png";

const Projects = () => {
  return (
    <div className="projects">
      <div className="project-container">
        <h3>Game of Life</h3>
        <img src={gameoflife} alt="Game of Life" />
        <p>A website emulating John Conways Game of Life.</p>
        <a href="https://chainchompa.github.io/Game-Of-Life/">View Website</a>
        <a href="https://github.com/chainchompa/Conways-Life">Source Code</a>
      </div>
      <div className="project-container">
        <h3>MUD Game</h3>
        <img src={mud} alt="Mud Game" />
        <p>A web based MUD Game.</p>
        <a href="">View Website</a>
        <a href="">Source Code</a>
      </div>
      <div className="project-container">
        <h3>Notes App</h3>
        <img src={notes} alt="Notes App" />
        <p>A react Notes app</p>
        <a href="https://jennifernotes.netlify.com/">View Website</a>
        <a href="https://github.com/chainchompa/LambdaNotes">Client Source Code</a>
        <a href="https://github.com/chainchompa/back-end-project-week">Server Source Code</a>        
      </div>
    </div>
  );
};

export default Projects;
