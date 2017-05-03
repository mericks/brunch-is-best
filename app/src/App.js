import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
// import fetcher from './helpers/fetcher';
import Home from './components/home/Home';
import Dashboard from './components/dashboard/Dashboard';


class App extends Component {
  constructor() {
    super();
    this.state = {
      signedIn: false,
      token: null
    };
    // this.hydrateAuth = this.hydrateAuth.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this)
    this.handleSignOut = this.handleSignOut.bind(this);
  }
  // TODO: resolve fail to authenticate issues
  // hydrateAuth() {

  //   console.log('hydrateAuth called');

  //   if(localStorage.getItem('token')) {
  //     console.log('token')
  //     return 'token';
  //   }


  //   // const token = localStorage.getItem('token');
  //   // console.log(token);

  //   if(token) {
  //     fetcher({
  //       path: '/auth/verify',
  //       method: 'GET',
  //       token,
  //     })
  //     .then(res => {
  //       if(res.valid) {
  //         this.setState({
  //           signedIn: true,
  //           token,
  //         });
  //       } 
  //     })
  //     .catch(res => {
  //       console.log('res error', res);
  //     })
  //   } 
  // }

  handleSignIn(token) {
    console.log('handleSignIn called');
    console.log('this is token before local storage: ', token);
    localStorage.setItem('brnchtkn', JSON.stringify(token));
    console.log('local storage should be set');
    // console.log('this is getting it from LS: ', JSON.parse(localStorage.getItem('brnchtkn')));
    if(token) {
      this.setState({
        signedIn: true,
        token,
      });
    }
  }

  handleSignOut() {
    localStorage.removeItem('brnchtkn');
    this.setState({
      signedIn: false,
      token: null,
    });
  }

  // componentDidMount() {
  //   this.hydrateAuth();
  // }


  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' render={props => (
            this.state.signedIn ? (
              <Redirect to={{
                pathname: '/dashboard',
                state: { from: props.location },
              }} />
            ) : (
              <Home handleSignIn={this.handleSignIn} />
            )
          )} />
          
          <Route exact path='/dashboard' render={ props => <Dashboard /> } />
          <Route exact path='/signin' render={ props => <Home handleSignIn={this.handleSignIn} /> } />
        </div>
      </Router>
    );
  }
}

export default App;
