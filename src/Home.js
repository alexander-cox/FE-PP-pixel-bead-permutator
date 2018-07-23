import React, { Component } from 'react';
import './Home';

class Home extends Component {
    state = {
        isLoggedIn: true
    }
    render() {
        return (
            <div>
                <div className="hero">
                    <p>My Home</p>
                </div>
            </div>
        );
    }
}

export default Home;