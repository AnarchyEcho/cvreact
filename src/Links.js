import React from "react"
import ReactDOM from "react-dom"
import Style from "./style.css"
import Github from "./media/github/GitHub-Mark-Light-120px-plus.png"

function Links() {
  return (
    <>
      <img src={Github} onClick={openGitPopUp} alt="Github link logo"></img>
      <p onClick={openGitPopUp}>Github</p>
    </>
  );
}

function openGitPopUp() {
    window.open("https://github.com/KodeAndre","popPage", "resizable,scrollbars,status");
}

export default Links