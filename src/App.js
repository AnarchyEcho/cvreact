import React from "react"
import ReactDOM from "react-dom"
import Style from "./style.css"

import Portrait from "./Portrait"
import Links from "./Links"
import About from "./About"

function App() {
  return (
    <>
      <h1>Andrè's CV Website</h1> <hr />
      
      <div id="portrait">
        <Portrait />
      </div>

      <About />
      <hr />
      <div id="links">
        <Links />
      </div>
    </>
  );
}

export default App