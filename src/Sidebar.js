import React from "react"
// eslint-disable-next-line
import ReactDOM from "react-dom"
// eslint-disable-next-line
import StyleBar from "./styleBar.css"

// eslint-disable-next-line
import Portrait from "./elements/Portrait"
// eslint-disable-next-line
import Links from "./elements/Links"
// eslint-disable-next-line
import About from "./elements/About"
// eslint-disable-next-line
import DarkBtn from "./buttons/BtnDark"
// eslint-disable-next-line
import ScrollTopBtn from "./buttons/ScrollTopBtn"

function Sidebar() {
  return (
    <div id="sidebarBody">

        <DarkBtn />

    </div>
  );
}

export default Sidebar