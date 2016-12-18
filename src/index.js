import React from 'react'
import ReactDOM from 'react-dom'
// import { Router, Route, Link, browerHistory, IndexRoute } from 'react-router'
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router'
// import { history } from 'react-router/lib/BrowserHistory';


import App from './components/app'
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
