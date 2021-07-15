import React from "react"
// eslint-disable-next-line
import ReactDOM from "react-dom"
// eslint-disable-next-line
import Style from "../style.css"
import { useTranslation } from "react-i18next";

// eslint-disable-next-line
import ProjectList from "./ProjectList"
import ProjectItem from "./ProjectItem"


export default function Projects(props) {
  const {t, i18n} = useTranslation('common');
  return (
    <div id="projects">
      <p className="disclaimer">*The project titles are links</p>
      {ProjectList.map(project => <ProjectItem project = {project} key={project.id}/>)}
);
    </div>
  );
}