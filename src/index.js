import React from 'react'
import ReactDOM from 'react-dom'
// import { Router, Route, Link, browerHistory, IndexRoute } from 'react-router'
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router'
import { history } from 'react-router/lib/BrowserHistory';

import App from './components/app'
import './styles/app.scss'

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={App} />
      <Route path="about" component={App} />
      <Route path="join" component={App} />
      <Route path="login" component={App} />
    </Route>
  </Router>,
  document.getElementById('main')
)
