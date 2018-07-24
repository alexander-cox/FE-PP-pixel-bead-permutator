import React, { Component } from 'react';

class BeadSummary extends Component {
    state = {
        brand: '',
        r: 90,
        g: 90,
        b: 90,
        bead_id: 0,
        colour_name: '',
        style: '',
        size: '',
        quantity: 0
    }

    componentDidMount = () => {
        const { brand, colour_name, style, size, bead_id, r, g, b, quantity } = this.props.bead;
        this.setState({ brand, colour_name, style, size, bead_id, r, g, b, quantity });
    }

    handleChange = (event) => {
        const { target: { value } } = event;
        this.setState({ amount: value });
    }

    render() {
        const { quantity, r, g, b, colour_name, brand, style, size, bead_id } = this.state;
        return (
            <div id={bead_id} className="box">
                <div className="columns">
                    <div className="column bead-colour-div" style={{ backgroundColor: `rgb(${r},${g},${b})` }}>
                        <p className="p-inv">ID: {bead_id}</p>
                        <p className="p-inv">Brand: {brand}</p>
                        <p className="p-inv">Colour: {colour_name}</p>
                        <p className="p-inv">Style: {style}</p>
                        <p className="p-inv">Size: {size}</p>
                    </div>
                    <div className="column is-one-quarter">
                        <p>Quantity Needed: {quantity}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default BeadSummary;