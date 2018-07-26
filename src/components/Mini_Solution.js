import React, { Component } from 'react';
import './Mini_Solution.css';

const Mini_Solution = (props) => {
    console.log(props.solution);
    const { id, title, image_url, votes, tags, brand, width_px, height_px, username } = props.solution;
    return (
        <div className="box">
            <article id="mini_solution" className="media">
                <figure className="media-left image is-96x96 solution_image">
                        <img src={image_url} alt='solution preview' />
                </figure>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>{title}</strong>
                            <br />
                            <small>{username}</small>
                            <br />
                            <small>{width_px} by {height_px}</small>
                        </p>
                    </div>
                </div>
                <figure className="media-left image is-96x96 solution_image">
                        <img src={image_url} alt='user avatar' />
                </figure>
            </article>
        </div>
    );
}

export default Mini_Solution;