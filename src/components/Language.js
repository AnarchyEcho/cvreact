import React from "react"
// eslint-disable-next-line
import ReactDOM from "react-dom"
// eslint-disable-next-line
import Style from "../style.css"
// eslint-disable-next-line
import { useTranslation } from "react-i18next";

import NorFlag from "../media/Flags/norway.png"
import EngFlag from "../media/Flags/uk.png"


const norBtn = {
    border: "none",
    marginRight: "10px",
    backgroundColor: "#ffffff00",
    cursor: "pointer",
    transform: "scale(0.8)",
    marginTop: "0",
    paddingTop: "0",
  }

const engBtn = {
    border: "none",
    backgroundColor: "#ffffff00",
    cursor: "pointer",
    transform: "scale(0.8)",
    marginTop: "0",
    paddingTop: "0",
}

export default function Language() {
      // eslint-disable-next-line
    const {t, i18n} = useTranslation('common');
    return (
        <div>
            <p>Choose Language</p>
            <button id="norwegian" style={norBtn} onClick={() => i18n.changeLanguage('no')}><img src={NorFlag} alt="Norwegian flag" /></button>
            <button id="english" style={engBtn} onClick={() => i18n.changeLanguage('en')}><img src={EngFlag} alt="English flag" /></button>
        </div>
    )
}


