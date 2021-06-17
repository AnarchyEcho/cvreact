import React from "react"
import ReactDOM from "react-dom"
import Style from "./style.css"

import Portrait from "./Portrait"

function App() {
  return (
    <>
      <h1>Under this line is an image of the cv person</h1>
      <hr />
      <div id="portrait">
        <Portrait />
      </div>
    </>
  );
}

export default App