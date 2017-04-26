import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import fetcher from '../../helpers/fetcher';
import Nav from './Nav';
import Neighborhoods from './Neighborhoods';
import Footer from '../Footer';



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
        this.updateNeighborhoods = this.updateNeighborhoods.bind(this);
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

    updateNeighborhoods(neighborhood) {
        let initialNeighborhoods = this.state.neighborhoods;
        let updatedNeighborhoods = [ ...initialNeighborhoods, neighborhood];
        this.setState({ neighborhoods: updatedNeighborhoods });
    }

    render() {
        return (
            // <Router>
                <div>
                    <Nav />
                    <Neighborhoods neighborhoods={this.state.neighborhoods} updateNeighborhoods={this.updateNeighborhoods} />
                    <Footer />
                </div>
            // </Router>
        )
    }

}

export default Dashboard;
