import React, { Component } from 'react';
import Solutions from './components/Solutions';
import './Search.css';

class Search extends Component {
    state = {
        title: '',
        tags: '',
        solutions: []
    }
    componentDidMount() {
        this.fetchAll();
    }
    fetchAll = () => {
        fetch('http://localhost:3000/api/solutions')
        .then((solutions) => solutions.json())
        .then(solutions => this.setState({ solutions }));
    }
    handleTitleChange = (event) => {
        const { value: title } = event.target;
        this.setState({ title });
        this.fetchNewSolutions();
    }
    handleTagsChange = (event) => {
        const { value: tags } = event.target;
        this.setState({ tags });
        this.fetchNewSolutions();
    }
    fetchNewSolutions = () => {
        const { title, tags } = this.state;
        if (title === '' && tags === '') {
            this.fetchAll();
        } else {
            fetch(`http://localhost:3000/api/solutions?title=${title}&tags=${tags}`)
            .then((solutions) => solutions.json())
            .then(solutions => this.setState({ solutions }));
        }
    }
    render() {
        const {title, tags} = this.state;
        return (
            <div id='search' className='search background-color-secondary-1-0'>
                <div className="hero background-color-secondary-1-2">
                    <p>Search for Solutions</p>
                </div>
                <div id="SearchForm" className="">
                    <div className="field ">
                        <label className="label">Search By Title</label>
                        <div className="control">
                            <input className="input is-small searchinput" type="text" placeholder="Text input" value={title} onChange={this.handleTitleChange} />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Search By Tags</label>
                        <div className="control">
                            <input className="input is-small searchinput" type="text" placeholder="Text input" value={tags} onChange={this.handleTagsChange} />
                        </div>
                    </div>
                </div>
                <div id="search-results">
                    <Solutions solutions={this.state.solutions} />
                </div>
            </div>
        );
    }
}

export default Search;

