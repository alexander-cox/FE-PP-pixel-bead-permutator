import React, { Component } from 'react';
import {
    Route,
    Link
  } from 'react-router-dom'
import './Navigation.css';

const Navigation = () => {
    return (
        <nav id="topnav" className="level">
                <div className="level-item has-text-centered background-color-primary-2">
                    <p className="heading nav"><Link to='/create' >CREATE</Link></p>
                </div>
                <div className="level-item has-text-centered background-color-secondary-1-2">
                    <p className="heading nav"><Link to='/search' >SEARCH</Link></p>
                </div>
                <div className="level-item has-text-centered background-color-secondary-2-2">
                    <p className="heading nav"><Link to='/favourites' >FAVOURITES</Link></p>
                </div>
                <div className="level-item has-text-centered background-color-complement-2">
                    <p className="heading nav"><Link to='/inventory' >INVENTORY</Link></p>
                </div>
        </nav>
    );
}

export default Navigation;