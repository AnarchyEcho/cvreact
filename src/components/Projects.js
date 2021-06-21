import React from "react"
// eslint-disable-next-line
import ReactDOM from "react-dom"
// eslint-disable-next-line
import Style from "../style.css"


// eslint-disable-next-line


function Projects(props) {
  return (
    <div id="projects">
        <p>{props.projects.title}</p>
        
        <p>{props.projects.filler}</p>
        
        <p>{props.projects.summary}</p>
    </div>
  );
}

export default Projects