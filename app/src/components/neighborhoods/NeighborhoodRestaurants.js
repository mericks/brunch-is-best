import React, { Component } from 'react';
import fetcher from '../../helpers/fetcher';
import NeighborhoodAllRestaurants from './NeighborhoodAllRestaurants';
import RestaurantView from '../restaurants/RestaurantView';


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
        this.fetchRestaurants = this.fetchRestaurants.bind(this);
        // this.updateNeighborhoods = this.updateNeighborhoods.bind(this);
        // this.updateView = this.updateView.bind(this);
    }

    componentDidMount() {
        this.fetchRestaurants();
    }

    fetchRestaurants() {
        console.log('inside fetchRestaurants');
        const brnchtkn = localStorage.getItem('brnchtkn');
        console.log('token from local storage: ', brnchtkn);
        fetcher({
            path: '/restaurants',
            method: 'GET',
            // token: brnchtkn,
        })
        .then(restaurants => {
            this.setState({ restaurants: restaurants });
            this.updateView(this.state.selectedRestaurant);
        });

    }

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
                <h3>This is Neighborhood Restaurants</h3>
                <NeighborhoodAllRestaurants />
                <RestaurantView /> 
            </div>
        );
    }
}

export default NeighborhoodRestaurants;


