import React from "react"
// eslint-disable-next-line
import ReactDOM from "react-dom"
// eslint-disable-next-line
import Style from "./style.css"

import Portrait from "./elements/Portrait"
import Links from "./elements/Links"
import About from "./elements/About"
import DarkBtn from "./buttons/BtnDark"
import ScrollTopBtn from "./buttons/ScrollTopBtn"

function App() {
  return (
    <div>
      <div id="title">
        <h1>Andrè's CV Website</h1> <hr />
      </div>

      <div id="portrait">
        <Portrait />
      </div>

      <div>
        <DarkBtn />
      </div>

      <div id="scrollBtn">
        <ScrollTopBtn />
      </div>
      
      <div id="about">
        <About /> <hr />
      </div>

      <div id="links">
        <Links />
      </div>
    </div>
  );
}

export default App