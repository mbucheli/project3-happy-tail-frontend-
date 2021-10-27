import './App.css';
import React, { Component } from 'react';
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./pages/About"
import ContactUs from "./pages/ContactUs";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Home />
          </div>
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/contactus" component={ContactUs} />
        </Switch>
      </Router >
    );
  }
};

export default App;
