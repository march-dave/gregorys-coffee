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
            <Places />
        </h5>
      </div>);
  }
}

export default About;
