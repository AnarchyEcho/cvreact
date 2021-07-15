import React from "react"
// eslint-disable-next-line
import ReactDOM from "react-dom"
// eslint-disable-next-line
import Style from "../style.css"
import { useTranslation } from "react-i18next";

// eslint-disable-next-line
import ProjectList from "./ProjectList"


export default function ProjectItem(props) {
    const project = props.project
    // eslint-disable-next-line
    const {t, i18n} = useTranslation('common');
  return (
    <div>{// eslint-disable-next-line
        <h2><a href={project.url} target="_blank">{project.name}</a></h2>}
        <h4>Languages/Libraries used: {project.languages}</h4>
        {project.api === "" ? null : <h4>API's Used: {project.api}</h4>}
        <p>{project.description}</p>
    </div>
  )
}