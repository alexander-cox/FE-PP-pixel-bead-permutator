import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
    state = { 
        solutions: []
     }
    render() { 
        return ( 
            <div>
                <div className="hero background-color-secondary-1-2">
                    <p>Search for Solutions</p>
                </div>
                <div>
                </div>
            </div>
         );
    }   
}
 
export default Search;