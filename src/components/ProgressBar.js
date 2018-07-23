import React, { Component } from 'react';

class ProgressBar extends Component {
    state = { 
        bead_id: 0,
        quantity: 0,
        total: 0,
        r: 90,
        g: 90,
        b: 90,
        amount: 0,
        colour_name: ''
    }
    componentDidMount = () => {
        const {bead, total} = this.props;
        const {bead_id, quantity, r, g, b, colour_name} = bead;
        this.setState({bead_id, quantity, r, g, b, colour_name, total});
    }
    render() { 
        const {bead_id, quantity, r, g, b, total, colour_name} = this.state;
        return ( 
            <div key={bead_id} class="box">
                <div class="columns">
                    <div class="column is-one-quarter">
                        <p className="p-beads">{colour_name}:</p>
                        <p id="bead-quantity" className="p-beads">{quantity} Beads</p>
                    </div>
                    <div class="column is-one-half progress-div" style={{ backgroundColor: `rgb(${r},${g},${b})` }}>
                        <progress class="progress is-small" value={quantity} max={total}></progress>
                    </div>
                    <div class="column is-one-quarter">
                        <input id="amount" class="input is-small" type="text" placeholder="Amount"  />
                        <a key={bead_id} class="button is-danger is-small">-</a>
                        <a key={bead_id} class="button is-primary is-small">+</a>
                    </div>
                </div>
            </div>
         )
    }
}

export default ProgressBar;