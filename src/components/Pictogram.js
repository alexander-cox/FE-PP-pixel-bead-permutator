import React, { Component } from 'react';
import ProgressBar from './ProgressBar';
import './Pictogram.css';

const Pictogram = ({total, items, resetInventoryState}) => (
    <div className="pictogram">
        {
            items.map((item) => {
                return (
                    <ProgressBar key={item.bead_id} bead={item} total={total} resetInventoryState={resetInventoryState}/>
                )
            })
        }
    </div>
);

export default Pictogram;