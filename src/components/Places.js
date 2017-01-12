import React, {Component} from 'react';
import superagent from 'superagent';

class Places extends Component {
  constructor(props) {
    super(props);

    this.state = {
      venues: []
    }
  }

  venueClick(e, index) {
    // e.preventDefault();
    // console.log('venueClick', e.target);
    console.log('venueClick', index);
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

  const list = this.state.venues.map(
    (venue, i) => {
        return (
            <li key={i} onClick={ (e) => this.venueClick(e, i)}>{venue.name}($1000)(List)</li>
        )
    }
  )

  return(
    <div>
        <table>
          <ol>
            <li>{list}</li>
          </ol>
        </table>
    </div>);
  }
}

export default Places;
