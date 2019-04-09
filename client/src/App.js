import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/navBar';
import HomePage from './pages/HomePage';


class App extends Component {
  state = {
    isOpen: false
  }
  render() {
    return (
      <div className="App">
        <NavBar />
        <HomePage />
      </div>
    );
  }
}

export default App;
