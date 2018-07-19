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

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Title />
        <Navigation />
        <Route exact path="/" component={Home}/>
        <Route path="/create" component={Create}/>
        <Route path="/search" component={Search}/>
        <Route path="/favourites" component={Favourites}/>
        <Route path="/inventory" component={Inventory}/>
        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
