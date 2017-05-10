import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import UserService from '../../services/user-service';
import Nav from './Nav';
import Main from './Main';
// import Neighborhoods from '../neighborhoods/Neighborhoods';
import Footer from '../Footer';


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: { first: '' }
            },
        };
    }

    componentDidMount() {
        UserService.getUser()
        .then(user => this.setState({ user }))
        .catch(err => console.log(err));
    }    


    render() {
        return (
            <div>
                <Nav userFirstName={this.state.user.name.first} />
                <Main />
                {/*<Neighborhoods />*/}
                <Footer />
            </div>
        )
    }

}

export default Dashboard;
 