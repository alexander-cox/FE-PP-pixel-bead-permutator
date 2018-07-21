import React, { Component } from 'react';
import Mini_Solution from './Mini_Solution';
import './Solutions.css';

const Solutions = (props) => {
    //const { solutions } = props;
    return ( 
        <div className="solutions background-color-secondary-1-3">
            {
                props.solutions.map(s => <h1 key={s.id}>{s.title}</h1>)
            }
        </div>
     );
}
 
export default Solutions;