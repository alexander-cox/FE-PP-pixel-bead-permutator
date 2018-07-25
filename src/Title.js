import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import './Title.css'

const Title = (props) => {
    const {username, image_url} = props;
    return (
        <nav id='toptitle' className="level title background-colour-neutral">
            <div className="level-left">
                <figure className="image is-48x48 title-image">
                    <img src={require("./images/PBP-logo-3.png")} />
                </figure>
                <div id="app-name" className="level-item has-text-centered">
                    <p className="heading"><Link to='/' >Pixel Bead Permutator</Link></p>
                </div>
            </div>
            <div className="level-right">
                <div className="level-item has-text-centered">
                    <p className="heading"><Link to='/' >{"User: " + (username || "New User")}</Link></p>
                </div>
                <figure className="image is-48x48 title-image">
                    <img src={image_url || require( "./images/default_avatar.png")} />
                </figure>
            </div>
        </nav>
    );
}

export default Title;