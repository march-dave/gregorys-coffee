import React, {Component} from 'react';
import superagent from 'superagent';

class Places extends Component {
  constructor(props) {
    super(props);
  }

render() {

  const rooms = this.props.roomList.map(  (c, i) => {
      return (
        <li key={i}>{c.name}</li>
      )
  } )

  return(
    <div>
      <ol>
        {rooms}
      </ol>
    </div>);
  }
}

export default Places;
