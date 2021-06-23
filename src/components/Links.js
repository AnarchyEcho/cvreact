import React from "react"
// eslint-disable-next-line
import ReactDOM from "react-dom"
// eslint-disable-next-line
import Style from "../style.css"
import Github from "../media/github/GitHub-Mark-Light-120px-plus.png"
import LinkedIn from "../media/linkedin/LinkedInLogo.png"

const style = {
    filter: "none"
}

function Links(e) {
  return (
    <>
      <img src={Github} onClick={openGitPopUp} alt="Github link logo" id="github"></img>
      <p onClick={openGitPopUp}>Github</p>

      <img src={LinkedIn} onClick={openLiPopUp} alt="LinkedIn link logo" id="linkedin" style={style}></img>
      <p onClick={openLiPopUp}>LinkedIn</p>
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
function openLiPopUp() {
  if (mq.matches) {
      window.open("https://no.linkedin.com/","popPage", "resizable,scrollbars,status");
  }
  else {
      window.open("https://no.linkedin.com/");
}
}

export default Links