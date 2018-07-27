import React, { Component } from 'react';
import './Mini_Solution.css';

class Mini_Solution extends Component {
    state = {
        username: '',
        avatar_url: ''
    }

    componentDidMount = () => {
        const { users_id } = this.props.solution;
        fetch(`https://pixel-bead-permutator.herokuapp.com/api/users/id/${users_id}`)
        .then(res => res.json())
        .then(({ username , avatar_url}) => {
            this.setState({
                username,
                avatar_url
            })
        })
    }

    render() {
        const { id, title, image_url, votes, tags, brand, width_px, height_px } = this.props.solution;
        const { avatar_url, username } = this.state;
        return (
            <div className="box">
                <article id="mini_solution" className="media">
                    <figure className="media-left image is-96x96 solution_image">
                        <img src={image_url} alt='solution preview' />
                    </figure>
                    <div className="media-content">
                        <div className="content">
                                    <h1>{title}</h1>
                                    <p><strong>Votes: </strong>{votes}</p>
                                    <p>
                                        {
                                            tags.split(' ').map(t => '#' + t).join('   ')
                                        }
                                    </p>
                                    <p><strong>created by: </strong>{username}</p>
                                    
                            <p>{width_px} width (pixels) by {height_px} height (pixels)</p>
                        </div>
                        
                    </div>
                    <figure className="media-left image is-96x96 solution_image">
                        <img src={avatar_url || require('../images/default_avatar.png')} alt='user avatar' />
                    </figure>
                </article>
            </div>
        );
    }
}

export default Mini_Solution;