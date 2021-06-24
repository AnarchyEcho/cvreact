import React from "react"
// eslint-disable-next-line
import ReactDOM from "react-dom"
// eslint-disable-next-line
import Style from "../style.css"


// eslint-disable-next-line
import ProjectList from "./ProjectList"
import ProjectItem from "./ProjectItem"


function Projects(props) {
  return (
    <div id="projects">
      <p className="disclaimer">*The project titles are links</p>
      {ProjectList.map(project => <ProjectItem project = {project} key={project.id}/>)}
    </div>
  );
}

export default Projects