import React from "react"
// eslint-disable-next-line
import ReactDOM from "react-dom"
// eslint-disable-next-line
import Style from "../style.css"


// eslint-disable-next-line
import ProjectList from "./ProjectList"


function ProjectItem(props) {
    const link = props.link
    
  return (
    <div>
        <p>{link.name}</p>
        <a>{link.url}</a>
    </div>
  )
}

export default ProjectItem