import React, { Component } from 'react';
import './Solution.css';
import Pixel_Board from './components/Pixel_Board';
import Pictogram from './components/Pictogram';

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
        beads: []
    }
    componentDidMount = () => {
        const { match: { params: { solution_id } } } = this.props;
        return Promise.all([
            fetch(`http://localhost:3000/api/solutions/${solution_id}`),
            fetch(`http://localhost:3000/api/beads/${solution_id}`)])
            .then(([solutions, beads]) => Promise.all([solutions.json(), beads.json()])
            .then(([solution, beads]) => {
                return this.setState({...solution, beads});
            })
        );
    }

    splitTagsToComponents = () => {
        const { tags } = this.state;
        const tagArr = tags.split(' ');
        return (
            tagArr.map((tag, i) => {
                return (
                    <div key={i} class="control hashtag">
                        <div class="tags has-addons">
                            <span class="tag">#{tag}</span>
                        </div>
                    </div>
                )
            })
        )
    }

    render() {
        const { title, avatar_url, username, image_url, beads, width_px, height_px } = this.state;
        return (
            <div id="solution" className="background-color-secondary-1-0">
                <div className="hero background-color-secondary-1-1">
                    <p>Solutions View</p>
                </div>
                <div id="solutionContent" className="">
                    <h1>{title || "Solution Title"}</h1>
                    <div class="field is-grouped is-grouped-multiline hashtags">
                        {
                            this.splitTagsToComponents()
                        }
                    </div>
                    <div className="hero background-color-secondary-1-1">
                        <p>Created By:</p>
                    </div>
                    <div id="solution-user-box" className="box background-color-secondary-1-3">
                        <article id="user-article" class="media">
                            <div className="">
                                <figure id="solution-avatar" class="image is-64x64">
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
                        <Pixel_Board board={beads} width={60} height={60} />
                    </div>
                <div id="solutionContent" className="">
                   <Pictogram items={[]} />
                </div>
            </div>
        );
    }
}

export default Solution;