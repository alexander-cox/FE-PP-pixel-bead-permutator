import React, { Component } from 'react';
import ProgressBar from './ProgressBar';
import './Pictogram.css';

const Pictogram = (props) => {
    const { items, total } = props;
    return (
        <div class="pictogram">
            {
                items.map((item) => {
                    return (
                        <ProgressBar bead={item} total={total} />
                    )
                })
            }
        </div>
    );
}

export default Pictogram;