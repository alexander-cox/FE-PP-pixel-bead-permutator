import React, { Component } from 'react';
import Pixel_Board from './components/Pixel_Board';
import './Create.css';
import logo from './images/PBP-logo-3.png';

class Create extends Component {
    state = {
        image_url: logo
    }
    render() {
        return (
            <div className="background-color-primary-0">
                <div className="hero background-color-primary-2">
                    <p>Create some Pixel Art!</p>
                </div>
                <div id="CreateForm" >
                    <div className="field">
                        <label className="label">Image URL:</label>
                        <div className="control">
                            <input className="input is-small" type="text" placeholder="Text input" />
                        </div>
                        <div className='card-content is-flex is-horizontal-center'>
                            <input className="button button-create" type="submit" value="Load Image" />
                        </div>
                        <div className='card-content is-flex is-horizontal-center'>
                            <figure className="image is-128x128 create-image">
                                <img src={this.state.image_url} />
                            </figure>
                        </div>
                        <div className="columns">
                            <div className="column">
                                <label className="label">Width (pixels):</label>
                                <input className="input is-small" type="text" placeholder="Text input" />
                            </div>
                            <div className="column">
                                <label className="label">Height (pixels):</label>
                                <input className="input is-small" type="text" placeholder="Text input" />
                            </div>
                        </div>
                        <div className='card-content is-flex is-horizontal-center'>
                            <input className="button button-create" type="submit" value="Generate Solution" />
                        </div>
                    </div>
                </div>
                <Pixel_Board />
                <div id="CreateForm" >
                    <div className="field">
                        <label className="label">Solution Title:</label>
                        <div className="control">
                            <input className="input is-small" type="text" placeholder="Text input" />
                        </div>
                        <br />
                        <label className="label">Solution Hashtags:</label>
                        <div className="columns">
                            <div className="column">
                                <div className="control">
                                    <input className="input is-small" type="text" placeholder="Text input" />
                                </div>
                            </div>
                            <div className="column">
                                <div className=''>
                                    <input className="button button-create is-small" type="submit" value="Add Hashtag" />
                                </div>
                            </div>
                        </div>
                        <div class="field is-grouped is-grouped-multiline">
                            <div class="control">
                                <div class="tags has-addons">
                                    <span class="tag">Hashtag1</span>
                                    <span class="tag is-delete"></span>
                                </div>
                            </div>

                            <div class="control">
                                <div class="tags has-addons">
                                    <span class="tag">Hashtag2</span>
                                    <span class="tag is-delete"></span>
                                </div>
                            </div>

                            <div class="control">
                                <div class="tags has-addons">
                                    <span class="tag">Hashtag3</span>
                                    <span class="tag is-delete"></span>
                                </div>
                            </div>
                        </div>
                        <div className='card-content is-flex is-horizontal-center'>
                            <input className="button button-create" type="submit" value="Submit Solution" />
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Create;