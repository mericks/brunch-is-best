import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import fetcher from '../../helpers/fetcher';
import Nav from './Nav';
import Footer from '../Footer';


const Neighborhoods = (props) => {
    return (
        <h1>This is the NABE component</h1>
    );
}

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            neighborhoods: [],
            restaurants: []
        };
        // this.fetchUser = this.fetchUser.bind(this);
        this.fetchNeighborhoods = this.fetchNeighborhoods.bind(this);
    }

    
    componentDidMount() {
        console.log('inside componentDidMount');
        // this.fetchUser();
        this.fetchNeighborhoods();
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

    fetchNeighborhoods() {
        console.log('inside fetchNeighborhoods');
        const brnchtkn = localStorage.getItem('brnchtkn');
        console.log('token from local storage: ', brnchtkn);
        fetcher({
            path: '/neighborhoods',
            method: 'GET',
            token: brnchtkn,
        })
        .then(neighborhoods => {
            console.log(neighborhoods);
            this.setState({
                neighborhoods: neighborhoods
            });
        })
    }


    render() {
        return (
            // <Router>
                <div>
                    <Nav />
                    <Neighborhoods />
                    <Footer />
                </div>
            // </Router>
        )
    }

}

export default Dashboard;
