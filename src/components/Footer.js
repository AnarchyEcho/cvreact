import React from "react"
// eslint-disable-next-line
import ReactDOM from "react-dom"
// eslint-disable-next-line
import Style from "../style.css"
import Github from "../media/github/GitHub-Mark-Light-120px-plus.png"
import LinkedIn from "../media/linkedin/LinkedInLogo.png"
import { useTranslation } from "react-i18next";

import NorFlag from "../media/Flags/norway.png"
import EngFlag from "../media/Flags/uk.png"

// css to apply to all buttons that dont need to be converted in darkmode
const style = {
    filter: "none"
}

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

function Links(e) {
  // eslint-disable-next-line
  const {t, i18n} = useTranslation('common');
  return (
    <>
      <div id="copyright">
        <p onClick={openGitPopUp}>&copy; Copyright 2021 Andre Hagen</p>
      </div>

      <div id="languagePicker">
        <p>{t('langpicker')}</p>
        <button id="norwegian" style={norBtn} onClick={() => i18n.changeLanguage('no')}><img src={NorFlag} alt="Norwegian flag" /></button>
        <button id="english" style={engBtn} onClick={() => i18n.changeLanguage('en')}><img src={EngFlag} alt="English flag" /></button>
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
      window.open("https://www.linkedin.com/in/andr%C3%A8-hagen-a0a821217/","popPage", "resizable,scrollbars,status");
  }
  else {
      window.open("https://www.linkedin.com/in/andr%C3%A8-hagen-a0a821217/");
}
}

export default Links