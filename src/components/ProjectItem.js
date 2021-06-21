import React from "react"
// eslint-disable-next-line
import ReactDOM from "react-dom"
// eslint-disable-next-line
import Style from "../style.css"


// eslint-disable-next-line
import ProjectList from "./ProjectList"


function ProjectItem(props) {
    const project = props.project
    
  return (
    <div>
        <h2>{project.name}</h2>
        <h3>Date: {project.time}</h3>
        <p>{project.description}</p>
    </div>
  )
}

export default ProjectItem