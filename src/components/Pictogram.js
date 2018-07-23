import React, { Component } from 'react';
import ProgressBar from './ProgressBar';
import './Pictogram.css';


class Pictogram extends Component {
    state = {
        total: 0,
        items: []
    }
    componentDidMount = () => {
        const { total, items } = this.props;
        this.setState({ total, items });
    }
    componentDidUpdate(prevProps) {
        if (this.props.total !== prevProps.total) {
            const { total, items } = this.props;
            this.setState({ total, items });
        }
    }
    render() {
        const { total, items } = this.state;
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
}

export default Pictogram;