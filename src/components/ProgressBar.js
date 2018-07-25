import React, { Component } from 'react';

class ProgressBar extends Component {
    state = {
        id: 0,
        bead_id: 0,
        quantity: 0,
        total: 0,
        r: 90,
        g: 90,
        b: 90,
        amount: '',
        colour_name: ''
    }
    componentDidMount = () => {
        const { bead, total } = this.props;
        const { id, bead_id, quantity, r, g, b, colour_name } = bead;
        this.setState({ id, bead_id, quantity, r, g, b, colour_name, total });
    }
    componentDidUpdate = (prevProps) => {
        if (this.props.total !== prevProps.total) {
            const { bead, total } = this.props;
            const { id, bead_id, quantity, r, g, b, colour_name } = bead;
            this.setState({ id, bead_id, quantity, r, g, b, colour_name, total, amount: '' });
          }
    }

    handleAmountChange = (event) => {
        const { target: { value } } = event;
        this.setState({ amount: value });
    }
    handleIncrement = () => {
        const { id, amount } = this.state;
        const increment = +amount;
        if (increment > 0) {
            fetch(`http://localhost:3000/api/inventory/${id}/?amount=${increment}`, { method: 'PUT' })
                .then(() => {
                    return this.props.resetInventoryState();
                })
        }
    }

    handleDecrement = () => {
        const { id, amount } = this.state;
        const decrement = +amount;
        if (decrement > 0) {
            fetch(`http://localhost:3000/api/inventory/${id}/?amount=${decrement}&decrement=true`, { method: 'PUT' })
                .then(() => {
                    return this.props.resetInventoryState();
                })
        }
    }

    render() {
        const { id, bead_id, quantity, r, g, b, total, colour_name, amount } = this.state;
        return (
            <div className="box">
                <div className="columns">
                    <div className="column is-one-quarter">
                        <p className="p-beads">{colour_name}:</p>
                        <p id="bead-quantity" className="p-beads">{quantity} Beads</p>
                    </div>
                    <div className="column is-one-half progress-div" style={{ backgroundColor: `rgb(${r},${g},${b})` }}>
                        <progress className="progress is-small" value={quantity} max={total}></progress>
                    </div>
                    <div className="column is-one-quarter">
                        <input id="amount" className="input is-small" type="text" placeholder="Amount" onChange={this.handleAmountChange} value={amount} />
                        <a className="button is-danger is-small" onClick={this.handleDecrement}>-</a>
                        <a className="button is-primary is-small" onClick={this.handleIncrement}>+</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProgressBar;