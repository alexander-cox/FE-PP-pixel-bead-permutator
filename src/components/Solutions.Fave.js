import React, { Component } from 'react';
import Mini_Solution from './Mini_Solution';
import './Solutions.css';

const Solutions = (props) => {
    const { solutions } = props;
    return ( 
        <div className="solutions background-color-secondary-0-2">
            {
                solutions.map(s => {
                    return (
                    <Mini_Solution key={s.id} solution={s} />
                    )
                })
            }
        </div>
     );
}
 
export default Solutions;