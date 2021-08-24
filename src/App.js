// eslint-disable-next-line
import React, { setState, useEffect, Suspense } from "react"
// eslint-disable-next-line
import ReactDOM from "react-dom"
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
// eslint-disable-next-line
import GlobalStyles from './GlobalStyles.js'

import Navbar from './Navbar'

export default function App() {
  return (
    <Suspense fallback="loading">

      <div className="App">

        <Router basename="cvreact">
        <GlobalStyles />
        
          <Navbar />

        </Router>

      </div>

    </Suspense>
  );
}
