import React from "react"
// eslint-disable-next-line
import ReactDOM from "react-dom"
// eslint-disable-next-line
import Style from "../style.css"
import portrait from "../media/react-logo/logo512.png"
import { useTranslation } from "react-i18next";

export default function Portrait() {
  // eslint-disable-next-line
  const {t, i18n} = useTranslation('common');
  return (
    <>
      <img src={portrait} alt="Portrait of author"></img>
    </>
  );
}