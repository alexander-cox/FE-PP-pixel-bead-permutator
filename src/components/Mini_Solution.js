import React, { Component } from 'react';
import './Mini_Solution.css';

const Mini_Solution = (props) => {
    const { id, title, image_url, votes, tags, brand, width_px, height_px, username } = props.solution;
    return (
        <div class="box">
            <article id="mini_solution" class="media">
                <figure class="media-left image is-96x96 solution_image">
                        <img src={image_url} />
                </figure>
                <div class="media-content">
                    <div class="content">
                        <p>
                            <strong>{title}</strong>
                            <br />
                            <small>{username}</small>
                            <br />
                            <small>{width_px} by {height_px}</small>
                        </p>
                    </div>
                </div>
                <figure class="media-left image is-96x96 solution_image">
                        <img src={image_url} />
                </figure>
            </article>
        </div>
    );
}

export default Mini_Solution;