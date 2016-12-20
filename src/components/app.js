import React from 'react';
import { Link } from 'react-router';
import NavBar from './NavBar';
import Map from './Map';
import Places from './Places';
import superagent from 'superagent';

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

            <div style={ {textAlign: 'center'} } className="container">
              <Places loc="aaa" onSearch={this.upDataSearch} venues={this.state.venues} />
              <div style={ {width:600, height:450, background: 'green'} } >
                 <Map center={location} markers={this.state.venues} />
              </div>

              {this.props.children}
              bottom

           </div>

      </div>
    );
  }
}

export default App;
