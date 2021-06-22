// eslint-disable-next-line
import React, { setState, useEffect, } from "react"
// eslint-disable-next-line
import ReactDOM from "react-dom"
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
// eslint-disable-next-line
import Style from "./style.css"

import Portrait from "./components/Portrait"
import Links from "./components/Links"
// eslint-disable-next-line
import About from "./components/About"
// eslint-disable-next-line
import DarkBtn from "./buttons/BtnDark"
import ScrollTopBtn from "./buttons/ScrollTopBtn"
// eslint-disable-next-line
import Projects from "./components/Projects"
import Header from "./components/Header"

function App() {

  return (
    <div id="appBody">

      <div id="sidebar">
        <Header />
      </div>

      <div id="main">
      <Router>
        <div id="title">
            <h1>Andrè's CV Website</h1> <hr />
        </div>

        <div id="darkbtn">
          <DarkBtn />
        </div>

        <div id="portrait">        
        <Switch>
          <Route exact path="/">
            <Portrait />
          </Route>
        </Switch>      
        </div>

        <div id="projects">
        <Switch>
          <Route path="/projects">
            <Projects />
          </Route>
        </Switch>
        </div>

        <div id="about">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </div>

        <div id="scrollBtn">
          <ScrollTopBtn />
        </div>

        <hr />

        <div id="links">
          <Links />
        </div>
        </Router>
      </div>
    </div>
  );
}

export default App