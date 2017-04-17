import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/home/Home';
import SignUpForm from './components/forms/SignUpForm';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route exact path='/signup' component={SignUpForm} />

        </div>
      </Router>
    );
  }
}

export default App;

