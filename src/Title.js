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
                <div className="level-item has-text-centered">
                    <p className="heading"><Link to='/' >Pixel Bead Permutator</Link></p>
                </div>
            </div>
            <div className="level-right">
                <div className="level-item has-text-centered">
                    <p className="heading"><Link to='' >User</Link></p>
                </div>
            </div>
        </nav>
    );
}

export default Title;