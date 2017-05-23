import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import authService from './services/auth-service';
import http from './services/http';
import Home from './components/home/Home';
import Dashboard from './components/dashboard/Dashboard';
import SignUpForm from './components/forms/SignUpForm';


class App extends Component {
  constructor() {
    super();
    this.state = {
      signedIn: false,
    };
    this.hydrateAuth = this.hydrateAuth.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this)
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  componentDidMount() {
    this.hydrateAuth();
  }

  hydrateAuth() {
    const token = JSON.parse(localStorage.getItem('brnchtkn'));
    if(token) {
      authService.verify(token)
      .then(res => {
        if (res.valid) {
          http.setToken(token);
          this.setState({ signedIn: true });
        } else {
          this.setState({ signedIn: false })
        }
      })  
      .catch(err => {
        console.log('res error', err);
      });
    } 
  }

  handleSignIn() {
    if(localStorage.getItem('brnchtkn')) {
      this.setState({ signedIn: true });
    }
  }

  handleSignOut() {
    localStorage.removeItem('brnchtkn');
    this.setState({ signedIn: false });
    this.hydrateAuth();
  }


  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' render={ props => (
            this.state.signedIn ? (
              <Redirect to={{
                pathname: '/neighborhoods',
                state: { from: props.location },
              }} />
            ) : (
              <Home {...props} handleSignIn={this.handleSignIn} />
            )
          )} />
          
          <Route exact path='/neighborhoods' render={ props => <Dashboard {...props} handleSignOut={this.handleSignOut} /> } />
          <Route exact path='/signin' render={ props => <Home {...props} handleSignIn={this.handleSignIn} /> } />
          <Route exact path='/signup' render={ props => <SignUpForm {...props} handleSignIn={this.handleSignIn} /> } />

        </div>
      </Router>
    );
  }
}

export default App;
