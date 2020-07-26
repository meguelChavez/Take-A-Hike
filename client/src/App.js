import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/Nav/navBar';
import HomePage from './pages/HomePage';
import ParkInfo from './pages/ParkInfo';
import Footer from './components/Footer/footer';



class App extends Component {
  state = {
    isOpen: false,
    isAuthed: false,
    user: null
  }

  componentDidMount() {
    console.log("mounted");
    this.checkAuth();
    // this.auth();
  }

  checkAuth = async () => {
    try {
      const authResults = await axios.get("/auth/login/success");
      console.log(authResults);
      let user;
      let isAuthed;
      if (authResults.data.user) {
        isAuthed = true;
        user = authResults.data.user;
      } else {
        isAuthed = false;
        user = null;
      }
      this.setState({ isAuthed, user });
    } catch (err) {
      console.log(err);
    }
  };

  toggle = (name, value) => {
    // this.setState({ [name]: !this.state[name] });
    this.setState({ [name]: value });
  };

  handleLogoutClick = () => {
    // Logout using Twitter passport api
    // Set authenticated state to false in the HomePage
    this.setState({ isAuthed: false });
    window.open("http://localhost:8080/auth/logout", "_self");
    // this.props.handleNotAuthenticated();
  };

  render() {
    const { isAuthed, user } = this.state
    return (
      <Router>
        <div className="App">
          <NavBar
            isAuthed={isAuthed}
            handleLogoutClick={this.handleLogoutClick}
            toggle={this.toggle}
            checkAuth={this.checkAuth}
          />
          <Switch>
            <Route exact path="/" render={() => <HomePage user={user} isAuthed={isAuthed} />} />
            <Route exact path="/parkinfo"
              render={(props) => <ParkInfo {...props} user={user}
                isAuthed={isAuthed}
              />}
            // component={ParkInfo}
            />
          </Switch>
        </div>
        <Footer />
      </Router>
    );
  }
}

export default App;
