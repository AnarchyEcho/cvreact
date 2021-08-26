// eslint-disable-next-line
import React, { setState, useEffect, Suspense } from "react"
// eslint-disable-next-line
import ReactDOM from "react-dom"
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
// eslint-disable-next-line
import GlobalStyles from './GlobalStyles.js'
// eslint-disable-next-line
import styled from 'styled-components';

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Welcome from './components/Welcome'
import About from './components/About'

const ContentWrapper = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  @media (max-width:769px) {
    margin-left: 5px;
    margin-right: 5px;
  }
`

export default function App() {

  return (
    <Suspense fallback="loading">

      <div className="App">

        <Router basename="cvreact">
        <GlobalStyles />
          <Navbar />

          <ContentWrapper>
  
            <Switch>
              <Route path="/" exact>
                <Welcome />
              </Route>
            </Switch>
  
            <Switch path="/projects">
              <Route exact path="/projects" component={Projects} />
            </Switch>
  
            <Switch path="/about">
              <Route exact path="/about" component={About} />
            </Switch>
          </ContentWrapper>

            <Footer />

        </Router>

      </div>

    </Suspense>
  );
}
