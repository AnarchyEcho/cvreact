import React from "react"
// eslint-disable-next-line
import ReactDOM from "react-dom"
// eslint-disable-next-line
import Style from "../style.css"
import Github from "../media/github/GitHub-Mark-Light-120px-plus.png"
import LinkedIn from "../media/linkedin/LinkedInLogo.png"

// css to apply to all buttons that dont need to be converted in darkmode
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

// media query to check if user is on phone or not
// this is to make the links compatible with all devices
const mq = window.matchMedia( "(min-width: 960px)" );

// opens a new window without anything other than necessities for perusal
// this one goes to the github page of the owner
function openGitPopUp() {
    if (mq.matches) {
        window.open("https://github.com/KodeAndre","popPage", "resizable,scrollbars,status");
    }
    else {
        window.open("https://github.com/KodeAndre");
 }
}

// opens a new window without anything other than necessities for perusal
// this one goes to LinkedIn (currently no profile, change if acquired)
function openLiPopUp() {
  if (mq.matches) {
      window.open("https://no.linkedin.com/","popPage", "resizable,scrollbars,status");
  }
  else {
      window.open("https://no.linkedin.com/");
}
}

export default Links