import React, { Component } from 'react';
import Solutions from './components/Solutions';
import './Search.css';

class Search extends Component {
    state = {
        titleInput: '',
        tagsInput: '',
        solutions: []
    }
    componentDidMount() {
        fetch('http://localhost:3000/api/solutions')
            .then((solutions) => solutions.json())
            .then(solutions => this.setState({ solutions }));
    }
    render() {
        return (
            <div id='search' className='search background-color-secondary-1-0'>
                <div className="hero background-color-secondary-1-2">
                    <p>Search for Solutions</p>
                </div>
                <SearchForm />
                <div>
                    <Solutions solutions={this.state.solutions} />
                </div>
            </div>
        );
    }
}

export default Search;

const SearchForm = () => {
    return (
        <div id="SearchForm" className="">
            <div className="field ">
                <label className="label">Search By Title</label>
                <div className="control">
                    <input className="input is-small searchinput" type="text" placeholder="Text input" />
                </div>
            </div>
            <div className="field">
                <label className="label">Search By Tags</label>
                <div className="control">
                    <input className="input is-small searchinput" type="text" placeholder="Text input" />
                </div>
            </div>
        </div>
    );
}