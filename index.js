import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './modules/App'
import First from './modules/First'
import Second from './modules/Second'

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/first" component={First}/>
    <Route path="/second" component={Second}/>
  </Router>
), document.getElementById('app'))
