import React, { Component } from 'react';

class AdditionalBead extends Component {
    state = {
        amount: '',
        brand: '',
        r: 90,
        g: 90,
        b: 90,
        bead_id: 0,
        colour_name: '',
        style: '',
        size: '',
    }

    componentDidMount = () => {
        const { brand, colour_name, style, size, id, r, g, b } = this.props.bead;
        this.setState({ brand, colour_name, style, size, bead_id: id, r, g, b });
    }

    handleChange = (event) => {
        const { target: { value } } = event;
        this.setState({ amount: value });
    }

    addBeadToUsersInventory = () => {
        const { amount, bead_id } = this.state;
        if(amount !== "") {
            this.props.postBeadToInventory(bead_id, amount);
        }
    }

    render() {
        const { amount, r, g, b, colour_name, brand, style, size, bead_id } = this.state;
        return (
            <div  className="box">
                <div className="columns">
                    <div className="column bead-colour-div" style={{ backgroundColor: `rgb(${r},${g},${b})` }}>
                        <p className="p-inv">Brand: {brand}</p>
                        <p className="p-inv">Colour: {colour_name}</p>
                        <p className="p-inv">Style: {style}</p>
                        <p className="p-inv">Size: {size}</p>
                    </div>
                    <div className="column is-one-quarter">
                        <input id="amount" className="input is-small" type="text" placeholder="Amount" value={amount} onChange={this.handleChange} />
                        <a className="button is-primary is-small" onClick={this.addBeadToUsersInventory} >+</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdditionalBead;