import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import './Title.css'

const Title = () => {
    return (
        <nav id='toptitle' className="level title background-colour-neutral">
            <div className="level-left">
                <figure class="image is-48x48">
                    <img src="https://bulma.io/images/placeholders/128x128.png" />
                </figure>
                <div className="level-item has-text-centered">
                    <p className="heading"><Link to='/' >Pixel Bead Permutator</Link></p>
                </div>
            </div>
            <div className="level-right">
                <div className="level-item has-text-centered">
                    <p className="heading"><Link to='' >User</Link></p>
                </div>
                <figure class="image is-48x48">
                    <img src="https://bulma.io/images/placeholders/128x128.png" />
                </figure>
            </div>
        </nav>
    );
}

export default Title;