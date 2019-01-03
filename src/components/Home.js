import React, {Component} from 'react';
import Navigation from './Navigation';
import Body from './Body';
import '../App.css';

class Home extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <Body/>
            </div>
        );
    }
}

export default Home;