import React from 'react';
import { Link } from 'react-router';
import NavBar from './NavBar';
import Map from './Map';
import Places from './Places';
import superagent from 'superagent';

import app from '../styles/app.scss'

class App extends React.Component {

  constructor(props) {
     super(props);

     this.state = {
       conactName: 'Contact Me',
       venues: [],
       search: "New York",
       search2: ""
     }
     this.upDataSearch = this.upDataSearch.bind(this);
   }

   upDataSearch(e) {
    console.log('upDataSearch', e.target.value)
    this.setState( {
      search2: e.target.value
    } )
  }

  render() {
    const location = {
      lat: 40.7575285,
      lng: -73.9884469
    }

    return(
      <div>
          <NavBar />

            <div style={ {textAlign: 'center'} } className="appContainer">
                <div style={ {width:600, height:450, background: 'green'} } className='initial'>
                  <Map center={location} markers={this.state.venues} />
                </div>
                <div className='none'>
                  {this.props.children}

                </div>

           </div>

      </div>
    );
  }
}

export default App;
