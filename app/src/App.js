import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import fetcher from './helpers/fetcher';
import Home from './components/home/Home';
import SignUpForm from './components/forms/SignUpForm';



class App extends Component {
  constructor() {
    super();
    this.state = {
      signedIn: false,
      token: null
    };
    this.hydrateAuth = this.hydrateAuth.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this)
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  hydrateAuth() {
    const token = localStorage.getItem('token');

    if(token) {
      fetcher({
        path: '/auth/verify',
        method: 'GET',
        token,
      })
      .then(res => {
        if(res.valid) {
          this.setState({
            signedIn: true,
            token,
          });
        }
      })
    } 
  }

  handleSignIn(token) {
    localStorage.setItem('token', token);
    if(token) {
      this.setState({
        signedIn: true,
        token,
      });
    }
  }

  handleSignOut() {
    localStorage.removeItem('token');
    this.setState({
      signedIn: false,
      token: null,
    });
  }

  componentDidMount() {
    this.hydrateAuth();
  }


  render() {
    return (
      <Router>
        <div>
          {/*<Route exact path='/' component={Home} />*/}
          <Route exact path='/' render={(props) => <Home handleSignIn={this.handleSignIn} /> } />
          {/*<Route exact path='/signup' component={SignUpForm} />*/}
          <Route exact path='/signup' render={(props) => <SignUpForm handleSignIn={this.handleSignIn} /> } />

        </div>
      </Router>
    );
  }
}

export default App;

