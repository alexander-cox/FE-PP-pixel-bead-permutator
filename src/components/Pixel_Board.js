import React, { Component } from 'react';
import './Pixel_Board.css';

class Pixel_Board extends Component {
    state = {
        board: [],
        width: 100,
        height: 100,
        grid_styles: {}
    }

    componentDidMount() {
        const { board, width, height } = this.props;
        const grid_styles = this.generateGridStyling(width, height);
        return this.setState({ board, width, height, grid_styles });
    }

    componentDidUpdate = (prevProps) => {
        if (this.props.board.length !== prevProps.board.length) {
            const { board, width, height } = this.props;
            const grid_styles = this.generateGridStyling(width, height);
            return this.setState({ board, width, height, grid_styles });
        }
    }

    generateGridStyling(w, h) {
        return {
            width: `${w * 11}px`,
            gridTemplateRows: `repeat(${h}, 11px)`,
            gridTemplateColumns: `repeat(${w}, 11px)`
        };
    }

    render() {
        const { board, grid_styles } = this.state;
        return (
            <div id="pixelboard" className="">
                <div className="grid-container" style={grid_styles}>
                    {
                        board.map(pix => {
                            return (
                                <div key={pix.id} className={`grid-item ${pix.colour_name ? pix.colour_name : 'empty'}`} style={{ backgroundColor: `rgb(${pix.r}, ${pix.g}, ${pix.b})` }}>
                                    <p>{pix.bead_id}</p>
                                    <p>{pix.colour_name}</p>
                                    <p>{"("+ pix.x + "," + pix.y + ")"}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Pixel_Board;