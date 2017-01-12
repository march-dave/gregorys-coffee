import React, {Component} from 'react';
import Places from './Places'

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='text-cetner'>
        <h5>
            <div>Tickle Tickle: {this.props.Location.map( (c, i) => {
                console.log('i', i);
                console.log('c', c);
              } ) } </div>

        </h5>
      </div>);
  }
}

export default About;
