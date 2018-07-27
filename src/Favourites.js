import React, { Component } from 'react';
import './Favourites.css';
import Solutions from './components/Solutions.Fave';

class Favourites extends Component {
    state = {
        solutions: []
    }

    componentDidMount = () => {
       const { username, user_id } = this.props;
       fetch(`https://pixel-bead-permutator.herokuapp.com/api/users/${user_id}/favourites`)
       .then(res => res.json())
       .then(solutions => this.setState({ solutions }));
    }

    render() {
        const { solutions } = this.state;
        return (
            <div className="background-color-secondary-2-0">
                <div className="hero background-color-secondary-2-2">
                    <p>My Favourites</p>
                </div>
                <div id="faves">
                    <Solutions solutions={solutions} />
                </div>
            </div>
        );
    }
}

export default Favourites;