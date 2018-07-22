import React, { Component } from 'react';
import './Pixel_Board.css';

class Pixel_Board extends Component {
    state = {
        board: [],
        width: 100,
        height: 100
    }

    componentDidMount() {
        this.generateInitialBoard();
    }
    generateInitialBoard = () => {
        const initialColour = { colour_name: 'default', r: 90, g: 90, b: 90 };
        let arr = [];
        for (let i = 0; i < this.state.height * this.state.width; i++) {
            //arr.push(<div className="grid-item">{i + 1}</div>);
            arr.push({ ...initialColour, id: i, bead_id: ' '});
            
        };
        console.log('****',arr.length);
        this.setState({ board: arr});
    }
    render() {
        return (
            <div id="pixelboard" className="">
                <div className="grid-container">
                    {
                        this.state.board.map(pix => <div className="grid-item" style={{backgroundColor: 'grey'}}>{pix.bead_id}</div>)
                    }
                </div>
            </div>
        );
    }
}

export default Pixel_Board;