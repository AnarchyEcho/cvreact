import React from "react"
// eslint-disable-next-line
import ReactDOM from "react-dom"
// eslint-disable-next-line
import Style from "../style.css"
import Github from "../media/github/GitHub-Mark-Light-120px-plus.png"
import LinkedIn from "../media/linkedin/LinkedInLogo.png"

import Language from "./Language"

// css to apply to all buttons that dont need to be converted in darkmode
const style = {
    filter: "none"
}

<<<<<<< HEAD
const norBtn = {
    border: "none",
    marginRight: "10px",
    backgroundColor: "#ffffff00",
    cursor: "pointer",
    transform: "scale(0.8)",
    marginTop: "0",
    paddingTop: "0",
    filter: "none",
  }

const engBtn = {
    border: "none",
    backgroundColor: "#ffffff00",
    cursor: "pointer",
    transform: "scale(0.8)",
    marginTop: "0",
    paddingTop: "0",
    filter: "none",
}

=======
>>>>>>> 927175f7aff2b7eb31d97f637bef586a5fac9104
function Links(e) {
  return (
    <>
      <div id="copyright">
        <p onClick={openGitPopUp}>&copy; Copyright 2021 Andre Hagen</p>
      </div>

      <div id="languagePicker">
<<<<<<< HEAD
        <p>{t('langpicker')}</p>
        <button id="norwegian" style={norBtn} onClick={() => i18n.changeLanguage('no')}><img src={NorFlag} alt="Norwegian flag" /></button>
        <button id="english" style={engBtn} onClick={() => i18n.changeLanguage('en')}><img src={EngFlag} alt="English flag" /></button>
=======
        <Language />
>>>>>>> 927175f7aff2b7eb31d97f637bef586a5fac9104
      </div>

        <div className="github">
          <img src={Github} onClick={openGitPopUp} alt="Github link logo" id="github"></img>
          <p onClick={openGitPopUp}>Github</p>
        </div>

        <div className="linkedin">
          <img src={LinkedIn} onClick={openLiPopUp} alt="LinkedIn link logo" id="linkedin" style={style}></img>
          <p onClick={openLiPopUp}>LinkedIn</p>
        </div>
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
      window.open("https://www.linkedin.com/in/andre-hagen-a0a821217/?locale=no_NO","popPage", "resizable,scrollbars,status");
  }
  else {
      window.open("hhttps://www.linkedin.com/in/andre-hagen-a0a821217/?locale=no_NO");
}
}

export default Links