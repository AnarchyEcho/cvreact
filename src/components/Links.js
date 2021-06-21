import React from "react"
// eslint-disable-next-line
import ReactDOM from "react-dom"
// eslint-disable-next-line
import Style from "../style.css"
import Github from "../media/github/GitHub-Mark-Light-120px-plus.png"

function Links(e) {
  return (
    <>
      <img src={Github} onClick={openGitPopUp} alt="Github link logo"></img>
      <p onClick={openGitPopUp}>Github</p>
    </>
  );
}

const mq = window.matchMedia( "(min-width: 960px)" );

function openGitPopUp() {
    if (mq.matches) {
        window.open("https://github.com/KodeAndre","popPage", "resizable,scrollbars,status");
    }
    else {
        window.open("https://github.com/KodeAndre");
 }
}

export default Links