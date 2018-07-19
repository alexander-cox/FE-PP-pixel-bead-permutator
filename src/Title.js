import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import './Title.css'

const Title = () => {
    return (
        <nav id='toptitle' class="level title background-colour-neutral">
            <div className="level-left">
                <div class="level-item">
                    <p class="heading"><Link to='/' >Pixel Bead Permutator</Link></p>
                </div>
            </div>
            <div className="level-right">
                <div class="level-item">
                    <p class="heading"><Link to='' >User</Link></p>
                </div>
            </div>
        </nav>
    );
}

export default Title;