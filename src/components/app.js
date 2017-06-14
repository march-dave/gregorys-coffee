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
        const url =
            superagent
            .get(url)
            .query(null)
            .set('Accept', 'text/json')
            .end((err, res) => {
                const venues = res.body.response.venues;
                console.log('venues', venues);

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

        return ( <
            div >
            <
            NavBar / >

            <
            div style = {
                { textAlign: 'center' } }
            className = "appContainer" >
            <
            div style = {
                { width: 600, height: 450, background: 'green' } }
            className = 'initial' >
            <
            Map center = { location }
            markers = { this.state.venues }
            /> <
            /div>

            <
            div className = 'none' > {
                this.props.children
            }

            <
            /div>

            <
            Places roomList = { this.state.venues }
            />

            <
            /div>


            <
            /div>
        );
    }
}

export default App;