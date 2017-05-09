import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Home from './components/home/Home';
import Dashboard from './components/dashboard/Dashboard';
import SignUpForm from './components/forms/SignUpForm';


class App extends Component {
  constructor() {
    super();
    this.state = {
      signedIn: false,
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

  handleSignIn() {
    if(localStorage.getItem('brnchtkn')) {
      // let storageToken = JSON.parse(localStorage.getItem('brnchtkn'));
      // console.log('this is storageToken: ', storageToken);
      this.setState({ signedIn: true });
    }
  }

  handleSignOut() {
    localStorage.removeItem('brnchtkn');
    this.setState({ signedIn: false });
  }

  // componentDidMount() {
  //   this.hydrateAuth();
  // }


  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' render={ props => (
            this.state.signedIn ? (
              <Redirect to={{
                pathname: '/dashboard',
                state: { from: props.location },
              }} />
            ) : (
              <Home handleSignIn={this.handleSignIn} />
            )
          )} />
          
          <Route exact path='/dashboard' render={ props => <Dashboard token={this.state.token}/> } />
          <Route exact path='/signin' render={ props => <Home handleSignIn={this.handleSignIn} /> } />
          <Route exact path='/signup' render={props => <SignUpForm {...props} handleSignIn={this.handleSignIn} /> } />

        </div>
      </Router>
    );
  }
}

export default App;
