import React, { Component } from 'react';
import './Inventory.css';
import Pictogram from './components/Pictogram';
import AdditionalBead from './components/AdditionalBead';

class Inventory extends Component {
    state = {
        username: '',
        user_id: '',
        items: [],
        new_beads: []
    }

    componentDidMount = () => {
        const { user_id, username } = this.props;
        this.setState({ user_id, username });
        this.fetchInventoryData(user_id);
    }

    fetchInventoryData = (user_id) => {
        Promise.all([
            fetch(`http://localhost:3000/api/inventory/${user_id}`),
            fetch('http://localhost:3000/api/beads')
        ])
            .then(([items, beads]) => {
                return Promise.all([items.json(), beads.json()])
            })
            .then(([items, beads]) => {
                const curr_beadsIds = items.map(item => item.bead_id);
                const new_beads = beads.filter(bead => curr_beadsIds.indexOf(bead.id) === -1);
                return this.setState({ items, new_beads })
            });
    }

    resetInventoryState = () => {
        const { user_id } = this.state
        this.fetchInventoryData(user_id);
    }

    getTotalBeads = () => {
        const { items } = this.state;
        return items.reduce((acc, item) => {
            return acc + item.quantity;
        }, 0);
    }

    putInventoryBeadsUp(event) {
        const { target } = event;
        return console.dir(target);
    }

    postBeadToInventory = (bead_id, amount) => {
        const { user_id } = this.state;
        const invObj = {
            users_id: +user_id,
            bead_id: +bead_id,
            quantity: +amount
        };
        fetch('http://localhost:3000/api/inventory', {
            method: 'POST',
            body: JSON.stringify(invObj),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(() => this.fetchInventoryData(user_id));
    }

    render() {
        const { username, items, new_beads } = this.state;
        const total = this.getTotalBeads();
        return (
            <div>
                <div className="hero background-color-complement-2">
                    <p>My Inventory</p>
                </div>
                <div className="background-color-complement-0">
                    <div id="inventoryContent">
                        <h1>{"Showing beads for " + username + ": " + total + " Beads Total"}</h1>
                        <Pictogram items={items} total={total} resetInventoryState={this.resetInventoryState} />
                        <div className="inventory-add background-color-complement-3">
                            <h1 id="inv_id_h1">Add To Your Inventory:</h1>
                            <AdditionalBeadList new_beads={new_beads} postBeadToInventory={this.postBeadToInventory} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Inventory;

function AdditionalBeadList(props) {
    const { new_beads, postBeadToInventory } = props;
    return (
        <div class="bead_shop">
            {
                new_beads.map((bead) => {
                    return (
                        <AdditionalBead key={"Add" + bead.id} bead={bead} postBeadToInventory={postBeadToInventory} />
                    )
                })
            }

        </div>
    );
}
