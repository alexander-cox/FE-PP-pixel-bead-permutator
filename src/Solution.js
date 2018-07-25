import React, { Component } from 'react';
import './Solution.css';
import Pixel_Board from './components/Pixel_Board';
import BeadSummary from './components/BeadSummary';

class Solution extends Component {
    state = {
        avatar_url: '',
        brand: '',
        created_at: '0000-00-00T00:00:00.000Z',
        favourited: 0,
        height_px: 0,
        id: 0,
        image_url: '',
        is_public: false,
        tags: '',
        title: '',
        username: '',
        users_id: 0,
        votes: 0,
        width_px: 0,
        beads: [],
        items: [],
        beadInfo: [],
        hasVotedUp: false,
        hasFavourited: false,
        loggedIn_id: ''
    }
    componentDidMount = () => {
        const { match: { params: { solution_id } }, loggedIn_id } = this.props;
        return Promise.all([
            fetch(`http://localhost:3000/api/solutions/${solution_id}`),
            fetch(`http://localhost:3000/api/beads/${solution_id}`),
            fetch('http://localhost:3000/api/beads')])
            .then(([solutions, beads, beadInfo]) => Promise.all([solutions.json(), beads.json(), beadInfo.json()])
                .then(([solution, beads, beadInfo]) => {
                    return this.setState({ ...solution, beads, beadInfo, loggedIn_id });
                })
                .then(() => {
                    return this.summarizeBeads();
                })
            );
    }

    splitTagsToComponents = () => {
        const { tags } = this.state;
        const tagArr = tags.split(' ');
        return (
            tagArr.map((tag, i) => {
                return (
                    <div key={i} className="control hashtag">
                        <div className="tags has-addons">
                            <span className="tag">#{tag}</span>
                        </div>
                    </div>
                )
            })
        )
    }

    summarizeBeads = () => {
        const { beads, beadInfo } = this.state;
        const items = beads.reduce((acc, bead) => {
            const tempColour = acc.find(colour => {
                return colour.bead_id === bead.bead_id;
            })
            if (tempColour) {
                tempColour.quantity++;
            } else if (bead.colour_name !== null){
                acc.push({ ...bead, quantity: 1 });
            }
            return acc;
        }, [])
        .sort((a, b) => b.quantity - a.quantity)
        .map((bead) => {
            const beadObj = beadInfo.find(b => b.id === bead.bead_id);
            const { brand, style, size } = beadObj;
            return {...bead, brand, style, size};
        })
        this.setState({ items })
    }

    handleVote = () => {
        const { hasVotedUp, id } = this.state;
        if(!hasVotedUp) {
            fetch(`http://localhost:3000/api/solutions/${id}/votes`, { method: 'PUT'})
            .then(res => res.json())
            .then(({votes}) => {
                this.setState({ hasVotedUp: !hasVotedUp, votes });
            })
        } else {
            fetch(`http://localhost:3000/api/solutions/${id}/votes?decrement=true`, { method: 'PUT'})
            .then(res => res.json())
            .then(({votes}) => {
                this.setState({ hasVotedUp: !hasVotedUp, votes });
            })
        }
    }

    handleFavourite = () => {
        const { hasFavourited } = this.state;
            this.setState({ hasFavourited: !hasFavourited });
    }

    render() {
        const { title, avatar_url, username, image_url, beads, width_px, height_px, items, votes, hasVotedUp, hasFavourited, loggedIn_id } = this.state;
        return (
            <div id="solution" className="background-color-secondary-1-0">
                <div className="hero background-color-secondary-1-1">
                    <p>Solutions View</p>
                </div>
                <div id="solutionContent" className="">
                    <h1>{title || "Solution Title"}</h1>
                    <div className="field is-grouped is-grouped-multiline hashtags">
                        {
                            this.splitTagsToComponents()
                        }
                    </div>
                    <h1>Votes: {votes}</h1>
                    <button className="button" onClick={this.handleVote}>{!hasVotedUp? "Vote Up": "Unvote"}</button>
                    <button className="button" onClick={this.handleFavourite} disabled={loggedIn_id === '' ? true: false } >{!hasFavourited? "Favourite": "Unfavourite"}</button>
                    <div className="hero background-color-secondary-1-1">
                        <p>Created By:</p>
                    </div>
                    <div id="solution-user-box" className="box background-color-secondary-1-3">
                        <article id="user-article" className="media">
                            <div className="">
                                <figure id="solution-avatar" className="image is-64x64">
                                    <img src={avatar_url || require('./images/default_avatar.png')} alt={"avatar for " + username} />
                                </figure>
                            </div>
                            <div className="background-color-secondary-1-3">
                                <h1 id="username-h1">{username}</h1>
                            </div>
                        </article>
                    </div>
                    <div className="hero background-color-secondary-1-1">
                        <p>Source Image:</p>
                    </div>
                    <img id="original-image" src={image_url || require('./images/PBP-logo-3.png')} alt={"avatar for " + username} />
                    <div className="hero background-color-secondary-1-1">
                        <p>Solution grid:</p>
                    </div>
                </div>
                <div id="pixelBoard-div">
                    <Pixel_Board board={beads} width={width_px} height={height_px} />
                </div>
                <div id="solutionContent" className="">
                    <div className="hero background-color-secondary-1-1">
                        <p>Beads Summary:</p>
                    </div>
                    <div className="bead_shop">
                        {
                            items.map((item) => {
                                return (
                                    <BeadSummary key={item.bead_id} bead={item} />
                                )
                            })
                        }
                    </div>

                </div>
            </div>
        );
    }
}

export default Solution;