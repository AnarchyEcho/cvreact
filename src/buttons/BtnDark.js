// eslint-disable-next-line
import React, { useState } from "react"
// eslint-disable-next-line
import ReactDOM from "react-dom"
// eslint-disable-next-line
import Style from "../style.css"



function BtnDark() {
    const element = document.body;
    const style = {
      backgroundImage: "linear-gradient(0deg, #fe9000 0%, #ffb34f 100%)",
      color: "#000",
      borderRadius: "3%",
      fontSize: "20px",
      cursor: "pointer",
      border: "2px solid #121212",
   }

    function darkmode() {
      element.classList.toggle("dark-mode");
    }
    return (
    <div>
      <button onClick={darkmode} style={style}>Dark Mode Toggle</button>
    </div>
  );
}

export default BtnDark