import React from "react"
// eslint-disable-next-line
import ReactDOM from "react-dom"
// eslint-disable-next-line
import Style from "../style.css"

function BtnDark() {
    const element = document.body;
    const style = {  }

    function darkmode() {
      element.classList.toggle("dark-mode");
    }
    return (
    <div>
      <button onClick={darkmode} style={style}>DarkMode</button>
    </div>
  );
}



export default BtnDark