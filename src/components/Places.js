import React, {Component} from 'react';
import superagent from 'superagent';

class Places extends Component {
  constructor(props) {
    super(props);
  }

onClickVenue(e, index) {
  console.log('index: ', index);
}

render() {
  const rooms = this.props.roomList.map(  (c, i) => {
      return (
        <li key={i} onClick={this.onClickVenue.bind(this)}>{c.name}</li>
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
