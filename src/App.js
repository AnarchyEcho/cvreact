import React from "react"
// eslint-disable-next-line
import ReactDOM from "react-dom"
// eslint-disable-next-line
import Style from "./style.css"

import Portrait from "./components/Portrait"
import Links from "./components/Links"
// eslint-disable-next-line
import About from "./components/About"
// eslint-disable-next-line
import DarkBtn from "./buttons/BtnDark"
import ScrollTopBtn from "./buttons/ScrollTopBtn"
// eslint-disable-next-line
import Projects from "./components/Projects"
import Header from "./components/Header"

function App() {
  return (
    <div id="appBody">

      <div id="sidebar">
        <Header />
      </div>

      <div id="main">

        <div id="title">
          <h1>Andrè's CV Website</h1> <hr />
        </div>

        <div id="portrait">
          <Portrait />
        </div>

        <div id="darkbtn">
        <DarkBtn />
        </div>

        <div id="projects">
        <Projects />
        </div>

        <div id="scrollBtn">
          <ScrollTopBtn />
        </div>

        <hr />

        <div id="links">
          <Links />
        </div>

      </div>
    </div>
  );
}

export default App