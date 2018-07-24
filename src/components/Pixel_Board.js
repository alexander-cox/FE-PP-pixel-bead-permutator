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
       //const sortedBoard = this.prepArrForCSSGrid(board);
       const grid_styles = this.generateGridStyling(width, height);
       return this.setState({ board, width, height, grid_styles});
    }

    componentDidUpdate = (prevProps) => {
        if (this.props.board.length !== prevProps.board.length) {
            const { board, width, height } = this.props;
            //const sortedBoard = this.prepArrForCSSGrid(board);
            const grid_styles = this.generateGridStyling(width, height);
            return this.setState({ board, width, height, grid_styles});
        }
    }

    prepArrForCSSGrid(beadArr) {
        let arr = [...beadArr];
        return arr.sort((a, b) => {
            const n = a.y - b.y;
            if (n !== 0) {
                return n;
            }
            return a.x - b.x;
        });
    }

    generateGridStyling(w, h) {
        return { width: `${w * 11}px`, 
            gridTemplateRows: `repeat(${h}, 11px)`,
            gridTemplateColumns: `repeat(${w}, 11px)`};
    }

    render() {
        const { board, grid_styles} = this.state;
        return (
            <div id="pixelboard" className="">
                <div className="grid-container" style={grid_styles}>
                    {
                        board.map(pix => {
                            return <div key={pix.id} className="grid-item" style={{backgroundColor: `rgb(${pix.r}, ${pix.g}, ${pix.b})`}}>{pix.bead_id}</div>   
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Pixel_Board;