import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/navBar';
import HomePage from './pages/HomePage';
import ParkInfo  from './pages/ParkInfo'


class App extends Component {
  state = {
    isOpen: false
  }
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/parkinfo" component={ParkInfo}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
