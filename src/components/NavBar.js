import React, {Component} from 'react';
import {Link} from 'react-router';

class NavBar extends Component {
  render() {
    return(
      <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">About</span>
              <span className="icon-bar">Join</span>
              <span className="icon-bar">Login</span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to="/">Brand</Link>
          </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li className="active"><a href="#">Link <span className="sr-only">(current)</span></a></li>

            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
              <ul className="dropdown-menu">
                <li><Link to="about">About</Link></li>
                <li><Link to="join">Join</Link></li>
                <li><Link to="login">Login</Link></li>

              </ul>
            </li>
          </ul>

        </div>
      </div>
    </nav>

    );
  }

}

export default NavBar;
