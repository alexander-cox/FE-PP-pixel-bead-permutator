import React, { Component } from 'react';
import './Create.css';

class Create extends Component {
    state = {}
    render() {
        return (
            <div className="background-color-primary-0">
                <div className="hero background-color-primary-2">
                    <p>Create some Pixel Art!</p>
                </div>
                <div id="CreateForm" >
                    <div className="field ">
                        <label className="label">Image URL:</label>
                        <div className="control">
                            <input className="input is-small" type="text" placeholder="Text input" />
                        </div>
                        <div className='card-content is-flex is-horizontal-center'>
                            <input className="button button-create" type="submit" value="Load Image" />
                        </div>
                        <div className='card-content is-flex is-horizontal-center'>
                            <figure className="image is-128x128">
                                <img src="https://bulma.io/images/placeholders/128x128.png" />
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
                            <input className="button button-create" type="submit" value="Create Solution" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Create;