import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './App.css';
import Navigation from './Navigation';
import Title from './Title';
import Footer from './Footer';
import Search from './Search';
import Favourites from './Favourites';
import Home from './Home';
import Create from './Create';
import Inventory from './Inventory';
import Solution from './Solution';

class App extends Component {
  state = {
    username: 'cockles',
    user_id: '1',
    image_url: 'https://pbs.twimg.com/profile_images/691705411939012609/YHZlX_97_400x400.jpg'
  }
  render() {
    const { username, user_id, image_url } = this.state;
    return (
      <Router>
        <div className="App">
          <Title username={username} image_url={image_url} />
          <Navigation />
          <Route exact path="/" component={Home} loggedIn_id={user_id} />
          <Route path="/create" component={Create} loggedIn_id={user_id} />
          <Route path="/search" component={Search} loggedIn_id={user_id} />
          <Route path="/solutions/:solution_id" render={(props) => <Solution loggedIn_id={user_id} {...props} />} />
          <Route path="/favourites" render={() => <Favourites username={username} user_id={user_id} />} />
          <Route path="/inventory" render={() => <Inventory username={username} user_id={user_id} />} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
