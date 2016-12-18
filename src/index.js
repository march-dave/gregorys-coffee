import React from 'react'
import ReactDOM from 'react-dom'
// import { Router, Route, Link, browerHistory, IndexRoute } from 'react-router'
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router'
// import { history } from 'react-router/lib/BrowserHistory';


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

// import React from 'react'
// import { render } from 'react-dom'
// import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
//
// import App from './components/App'
// import Dashboard from './components/Dashboard'
// import About from './components/About'
// import Join from './components/Join'
//
// render(
//   <Router history={browserHistory}>
//     <Route path="/" component={App}>
//       <IndexRoute component={Dashboard} />
//       <Route path="tenants" component={About} />
//       <Route path="properties" component={Join} />
//     </Route>
//   </Router>,
//   document.getElementById('main')
// )
