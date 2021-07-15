import React from "react"
// eslint-disable-next-line
import ReactDOM from "react-dom"
// eslint-disable-next-line
import Style from "../style.css"

import ContactModal from "./ContactModal"

export default function About() {
  return (
    <div>
      
      <h2>Nylig Historie</h2>
      <p>
        Jeg har i de siste ukene jobbet med flere prosjekter, som CV siden og en porteføljeside for en klient, som har gitt meg mye mer kunnskap innen React.
      </p>

      <h2>Jobb Bakgrunn</h2>
      <p>
      Har bakgrunn i Hardware og SYSAdmin arbeid på 2 forskjellige plasser, der jeg fikset og vedlikeholdet PCer, laptoper og annet teknisk hardware, som SYSAdmin gjorde jeg valg om nettbutikk og vedlikehold i den nettbutikken for selskapet, og hjalp med generell IT i selskapet.
      </p>
    <hr />

      <h2>Contact me</h2>
      
      <ContactModal />

    </div>
  );
}