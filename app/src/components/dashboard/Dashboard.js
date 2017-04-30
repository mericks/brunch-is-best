import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import fetcher from '../../helpers/fetcher';
import Nav from './Nav';
import Neighborhoods from '../neighborhoods/Neighborhoods';
import Footer from '../Footer';


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userFirstName: 'Test User',
            userID: 'test123',
        };
        // this.fetchUser = this.fetchUser.bind(this);
    }

    
    componentDidMount() {
        console.log('inside Dashboard componentDidMount');
        // this.fetchUser();
    }

    // TODO: Resolve issues with user route
    // fetchUser() {
    //     console.log('inside fetchUser');
    //     const brnchtkn = localStorage.getItem('brnchtkn');
    //     console.log('token from local storage: ', brnchtkn);
    //     fetcher({
    //         path: '/user/:id',
    //         method: 'GET',
    //         token: brnchtkn,
    //     })
    //     .then(user => {
    //         console.log(user);
    //         this.setState({
    //             user,
    //         });
    //     })
    // };

    render() {
        return (
            <div>
                <Nav userFirstName={this.state.userFirstName} />
                <Neighborhoods userID={this.state.userID} />
                <Footer />
            </div>
        )
    }

}

export default Dashboard;
 