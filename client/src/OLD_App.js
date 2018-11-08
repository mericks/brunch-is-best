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
            user: { name: { first: '' } },
            x: 0,
            y: 0
        };
        this.hydrateAuth = this.hydrateAuth.bind(this);
        this.hydrateUser = this.hydrateUser.bind(this);
        this.handleSignIn = this.handleSignIn.bind(this);
        this.handleSignOut = this.handleSignOut.bind(this);
    }

    // credit: Gokhan Demirhan https://codepen.io/gokhandemirhan/pen/WObNOm
    componentWillMount() {
        let w = window,
            d = document,
            e = d.documentElement,
            g = d.getElementsByTagName('body')[0],
            x = w.innerWidth || e.clientWidth || g.clientWidth,
            y = w.innerHeight || e.clientHeight || g.clientHeight;

        this.setState({ x: x, y: y });
    }

    componentDidMount() {
        this.hydrateAuth();
    }

    hydrateAuth() {
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
    }

    hydrateUser() {
        UserService.getUser()
            .then(user => this.setState({ user }))
            .catch(err => console.log(err));
    }

    handleSignIn() {
        if (localStorage.getItem('brnchtkn')) {
            this.hydrateUser();
            this.setState({ signedIn: true });
        }
    }

    handleSignOut() {
        localStorage.removeItem('brnchtkn');
        this.setState({ signedIn: false });
        this.hydrateAuth(); // use router location object to navigate to '/'  history.push(location) - see docs
    }

    render() {
        return (
            <Router>
                <div>
                    {/* <img className='bg' style={{ width: this.state.x+'px', height: this.state.y+'px' }} /> */}
                    {/* <img className='bg' src={'https://source.unsplash.com/'+this.state.x+'x'+this.state.y+'/?brunch'} /> */}
                    <Header
                        signedIn={this.state.signedIn}
                        userFirstName={this.state.user.name.first}
                        handleSignIn={this.handleSignIn}
                        handleSignOut={this.handleSignOut}
                    />
                    <Body
                        signedIn={this.state.signedIn}
                        handleSignIn={this.handleSignIn}
                    />
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;
