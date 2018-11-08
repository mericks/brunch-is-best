import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

// Services
import authService from './services/auth-service';
import UserService from './services/user-service';
import http from './services/http';

// Components
import Home from './components/home/Home';
import SignUpForm from './components/forms/SignUpForm';
import Dashboard from './components/dashboard/Dashboard';
import Neighborhoods from './components/neighborhoods/Neighborhoods';
import './App.css';

class App extends Component {
    state = {
        signedIn: false,
        user: { name: { first: '' } }
    };

    componentDidMount() {
        this.hydrateAuth();
    }

    hydrateAuth = () => {
        const token = JSON.parse(localStorage.getItem('brnchtkn'));
        if (token) {
            authService
                .verify(token)
                .then(res => {
                    if (res.valid) {
                        http.setToken(token);
                        this.setState({ signedIn: true });
                        this.hydrateUser();
                    } else {
                        this.setState({ signedIn: false });
                    }
                })
                .catch(err => {
                    console.log('res error', err);
                });
        }
    };

    hydrateUser = () => {
        UserService.getUser()
            .then(user => this.setState({ user }))
            .catch(err => console.log(err));
    };

    handleSignIn = () => {
        if (localStorage.getItem('brnchtkn')) {
            this.hydrateUser();
            this.setState({ signedIn: true });
        }
    };

    handleSignOut = () => {
        localStorage.removeItem('brnchtkn');
        this.setState({ signedIn: false });
        this.hydrateAuth(); // use router location object to navigate to '/'  history.push(location) - see docs
    };

    render() {
        return (
            <Router>
                <main>
                    <Route
                        exact
                        path="/"
                        render={props =>
                            this.state.signedIn ? (
                                <Redirect
                                    to={{
                                        pathname: '/dashboard',
                                        state: { from: props.location }
                                    }}
                                />
                            ) : (
                                <Home
                                    {...props}
                                    handleSignIn={props.handleSignIn}
                                />
                            )
                        }
                    />
                    <Route
                        exact
                        path="/register"
                        render={props => (
                            <SignUpForm
                                {...props}
                                handleSignIn={props.handleSignIn}
                            />
                        )}
                    />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/neighborhoods" component={Neighborhoods} />
                </main>
            </Router>
        );
    }
}

export default App;

// <Route exact path='/' render={props => (
//     signedIn ? (
//         <Redirect to={{ pathname: '/neighborhoods', state: { from: props.location } }} />
//     ) : (
//             <Home {...props} handleSignIn={props.handleSignIn} />

//         )
// )} />
//     <Route path='/dashboard' component={Dashboard} />
//     <Route path='/neighborhoods' component={Neighborhoods} />
//     <Route path='/restaurants' component={Restaurants} />
//     <Route exact path='/signup' render={props => <SignUpForm {...props} handleSignIn={props.handleSignIn} />} />
