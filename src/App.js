import React from "react"
import ReactDOM from "react-dom"
import Style from "./style.css"

import Portrait from "./Portrait"
import Links from "./Links"
import About from "./About"

function App() {
  return (
    <>
      <div id="title">
        <h1>Andrè's CV Website</h1> <hr />
      </div>
      
      <div id="portrait">
        <Portrait />
      </div>

      <div id="about">
        <About /> <hr />
      </div>

      <div id="links">
        <Links />
      </div>
    </>
  );
}

export default App