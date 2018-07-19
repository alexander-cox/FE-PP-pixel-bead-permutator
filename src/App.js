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

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Title />
        <Navigation />
        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
