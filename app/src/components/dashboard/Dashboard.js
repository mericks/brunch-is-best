import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import userService from '../../services/user-service';
import Nav from './Nav';
import Neighborhoods from '../neighborhoods/Neighborhoods';
import Footer from '../Footer';


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
        };
        this.fetchUser = this.fetchUser.bind(this);
    }

    
    componentDidMount() {
        console.log('inside Dashboard componentDidMount');
        this.fetchUser();
    }

    fetchUser() {
        console.log('inside fetchUser');
        userService.getUser()
        .then(user => {
            console.log('this is user from fetchUser: ', user);
            this.setState({ user });
        }); 
    }
    

    render() {
        return (
            <div>
                <Nav userFirstName={this.state.user.name.first} />
                <Neighborhoods />
                <Footer />
            </div>
        )
    }

}

export default Dashboard;
 