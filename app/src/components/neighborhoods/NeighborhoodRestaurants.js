import React, { Component } from 'react';
import restaurantService from '../../services/restaurant-service';
import NeighborhoodAllRestaurants from './NeighborhoodAllRestaurants';
import RestaurantView from '../restaurants/RestaurantView';
import AddRestaurantForm from '../forms/AddRestaurantForm';


class NeighborhoodRestaurants extends Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurants: [],
            selectedRestaurant: '',
            // quadrants: ['N','NE', 'NW', 'SE', 'SW', 'View All'],
            // selectedQuadrant: 'View All',
            selectedView: '',
        };
        // this.updateNeighborhoods = this.updateNeighborhoods.bind(this);
        // this.updateView = this.updateView.bind(this);
    }

    componentDidMount() {
        restaurantService.getAll()
        .then(restaurants => this.setState({ restaurants }))
        .then(() => this.updateView(this.state.selectedRestaurant))
        .catch(err => console.log(err));
    }

    // fetchRestaurants() {
    //     fetcher({
    //         path: '/restaurants',
    //         method: 'GET',
    //         // token: brnchtkn,
    //     })
    //     .then(restaurants => {
    //         this.setState({ restaurants: restaurants });
    //         this.updateView(this.state.selectedRestaurant);
    //     });

    // }



    // updateNeighborhoods(neighborhood) {
    //     let initialNeighborhoods = this.state.neighborhoods;
    //     let updatedNeighborhoods = [ ...initialNeighborhoods, neighborhood];
    //     this.setState({ neighborhoods: updatedNeighborhoods });
    // }

    updateView(restaurant) {
        this.setState({ selectedRestaurant: restaurant });
        let updatedView = this.state.restaurants.filter(restaurant => {
            return restaurant.name === restaurant
        })
        this.setState({ selectedView: updatedView})
    }


    render() {
        return (
            <div>
                <h3>These are restaurants in the selected neighborhood</h3>
                <NeighborhoodAllRestaurants />
                <RestaurantView /> 
                <AddRestaurantForm />
            </div>
        );
    }
}   

export default NeighborhoodRestaurants;


