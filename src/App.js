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


// app with routing for Single-Page Application (SPA)
function App() {

  return (
    <div id="appBody">

      <Router>
      
      <div id="sidebar">
        <Header />
      </div>

      <div id="main">
      
        <div id="title">
            <h1>Andrè's CV Website</h1> <hr />
        </div>

        <div id="darkbtn">
          <DarkBtn />
        </div>

        <div id="portrait">        
          <Switch>
            <Route path="/" exact component={Portrait} />
          </Switch>
        </div>

        <div id="projects">
          <Switch>
            <Route path="/projects" component={Projects} />
          </Switch>
        </div>

        <div id="about">
          <Switch>
            <Route path="/about" component={About} />
          </Switch>
        </div>

        <div id="scrollBtn">
          <ScrollTopBtn />
        </div>

        <hr />

        <div id="links">
          <Links />
        </div>
        
      </div>

      </Router>

    </div>
  );
}

export default App