import React from "react"
// eslint-disable-next-line
import ReactDOM from "react-dom"
// eslint-disable-next-line
import Style from "../style.css"
import { useTranslation } from "react-i18next";

import ContactModal from "./ContactModal"

export default function About() {
  // eslint-disable-next-line
  const {t, i18n} = useTranslation('common');
  return (
    <div>
      
      <h2>{t('recent.title')}</h2>
      <p>
        {t('recent.fill')}
      </p>

      <h2>{t('background.title')}</h2>
      <p>
        {t('background.fill')}
      </p>
    <hr />

      <h2>{t('contact.title')}</h2>
      
      <ContactModal />

    </div>
  );
}