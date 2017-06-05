import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import UserService from '../../services/user-service';
import Nav from './Nav';
import Neighborhoods from '../neighborhoods/Neighborhoods';
import Restaurants from '../restaurants/Restaurants';
// import Main from './Main';
// import AddNeighborhoodForm from '../forms/AddNeighborhoodForm';
// import AddRestaurantForm from '../forms/AddRestaurantForm';
import Footer from '../Footer';



class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: { first: '' }
            },
            
            selectedRestaurant: '',
        };
    }

    componentDidMount() {
        UserService.getUser()
        .then(user => this.setState({ user }))
        .catch(err => console.log(err));
    }

    updateSelectedRestaurant(restaurant) {
        this.setState({ selectedRestaurant: restaurant });

    }   


    render() {
        const { match } = this.props;
        return (
            <div>
                <Nav userFirstName={this.state.user.name.first} handleSignOut={this.props.handleSignOut} />
                <main>
                    <Switch>

                        <Route path={match.url} render={ props => (
                            <Neighborhoods {...this.props}
                            updateSelectedRestaurant={this.updateSelectedRestaurant} />
                        )} />
                        
                        <Route path='/restaurants' render={ props => (
                            <Restaurants {...this.props}
                            selectedRestaurant={this.state.selectedRestaurant} />
                        )} />
                        
                    </Switch>
                </main>
                <Footer />
            </div>
        )
    }

}

export default Dashboard;
