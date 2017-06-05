import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import UserService from '../../services/user-service';
import Nav from './Nav';
import Main from './Main';
import AddNeighborhoodForm from '../forms/AddNeighborhoodForm';
import AddRestaurantForm from '../forms/AddRestaurantForm';
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
        const { match } = this.props;
        return (
            <div>
                <Nav userFirstName={this.state.user.name.first} handleSignOut={this.props.handleSignOut} />
                <Main {...this.props}/>
                {/*<Route exact path={`${match.url}/addneighborhood`} render={ props => (
                    <AddNeighborhoodForm {...this.props}
                        quadrants={this.state.quadrants}
                        addNeighborhood={this.addNeighborhood}/>
                )} />
                <Route exact path={'restaurants/addrestaurant'} render={ props => (
                    <AddRestaurantForm 
                        selectedNeighborhood={this.state.selectedNeighborhood}
                        neighborhoods={this.state.neighborhoods}
                        addRestaurant={this.addRestaurant} />
                )} />*/}
                <Footer />
            </div>
        )
    }

}

export default Dashboard;
 




                     {/*<Route exact path={'/neighborhoods/addneighborhood'} render={ props => (*/}
