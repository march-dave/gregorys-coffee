import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router'

import App from './components/App'
import Dashboard from './components/Dashboard'
import About from './components/About'
import Join from './components/Join'
import Login from './components/Login'

import './styles/app.scss'

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard} />
      <Route path="about" component={About} />
      <Route path="join" component={Join} />
      <Route path="login" component={Login} />
    </Route>
  </Router>,
  document.getElementById('main')
)
