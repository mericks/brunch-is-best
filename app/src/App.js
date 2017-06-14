import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import authService from './services/auth-service';
import UserService from './services/user-service';
import http from './services/http';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
      user: { name: { first: ''} },
    };
    this.hydrateAuth = this.hydrateAuth.bind(this);
    this.hydrateUser = this.hydrateUser.bind(this);
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
          this.hydrateUser();
        } else {
          this.setState({ signedIn: false })
        }
      })  
      .catch(err => {
        console.log('res error', err);
      });
    } 
  }

  hydrateUser() {
      UserService.getUser()
      .then(user => this.setState({ user }))
      .catch(err => console.log(err));
  }

  handleSignIn() {
    if(localStorage.getItem('brnchtkn')) {
      this.hydrateUser()
      .then(this.setState({ signedIn: true }));
    }
  }

  handleSignOut() {
    localStorage.removeItem('brnchtkn');
    this.setState({ signedIn: false });
    this.hydrateAuth();  // use router location object to navigate to '/'  history.push(location) - see docs
  }




  render() {
    return (
      <Router>
        <div>
          <Header signedIn={this.state.signedIn} userFirstName={this.state.user.name.first} handleSignIn={this.handleSignIn} handleSignOut={this.handleSignOut} />
          <Body signedIn={this.state.signedIn} handleSignIn={this.handleSignIn} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
