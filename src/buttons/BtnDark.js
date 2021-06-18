import React from "react"
// eslint-disable-next-line
import ReactDOM from "react-dom"
// eslint-disable-next-line
import Style from "../style.css"

function BtnDark() {
    const element = document.body;

    function darkmode() {
      element.classList.toggle("dark-mode");
    }
    return (
    <div>
      <button onClick={darkmode}>DarkMode</button>
    </div>
  );
}



export default BtnDark