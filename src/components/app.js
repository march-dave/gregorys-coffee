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
       venues: []
     }
   }

   componentDidMount() {
     const url = 'https://api.foursquare.com/v2/venues/search?ll=40.7575285,-73.9884469&oauth_token=0DWMXELULH1PCZUJVTPBZ5ISSSD30DIXN2WZGRNEU0KZW23G&v=20161209'
     superagent
     .get(url)
     .query(null)
     .set('Accept', 'text/json')
     .end((err, res) => {
       const venues = res.body.response.venues;
       console.log(venues);

       this.setState({
         venues: venues
       })
     })
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


          //  var Parent = React.createClass({
          //  doSomething: function(value) {
          //  },
          //  render: function() {
          //    return (<div>{this.props.children}</div>);
          //  }
          // });
          //
          // var Child = React.createClass({
          //  onClick: function() {
          //    this.props.doSomething(this.props.value); // doSomething is undefined
          //  },
          //  render: function() {
          //    return (<div onClick={this.onClick}></div>);
          //  }
          // });

      </div>
    );
  }
}

export default App;
