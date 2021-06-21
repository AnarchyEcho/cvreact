import React from "react"
// eslint-disable-next-line
import ReactDOM from "react-dom"
// eslint-disable-next-line
import StyleBar from "./styleBar.css"

// eslint-disable-next-line
import Portrait from "./components/Portrait"
// eslint-disable-next-line
import Links from "./components/Links"
// eslint-disable-next-line
import About from "./components/About"
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