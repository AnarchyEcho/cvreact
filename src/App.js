import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';
import GlobalStyles from './GlobalStyles.ts'
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

  const mq = (window.matchMedia('(max-width: 769px)'))

  function RedirectMobile() {
    let history = useHistory();
    history.replace('/m/')
  }

  const url = window.location.href;

  if (mq.matches && !url.includes('/m/')) {
    RedirectMobile()
  }

  return (
      <div>

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

            <Switch>
              <Route path="/m/" exact>
                <Welcome />
              </Route>
            </Switch>

            <Switch path="/m/projects">
              <Route exact path="/m/projects" component={Projects} />
            </Switch>

            <Switch path="/m/about">
              <Route exact path="/m/about" component={About} />
            </Switch>

          </ContentWrapper>

            <Footer />

      </div>
  );
}
