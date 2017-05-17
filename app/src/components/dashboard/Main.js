import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import neighborhoodService from '../../services/neighborhood-service';
import restaurantService from '../../services/restaurant-service';
import QuadrantViewNav from '../neighborhoods/QuadrantViewNav';
import NeighborhoodsView from '../neighborhoods/NeighborhoodsView';
import AddNeighborhoodForm from '../forms/AddNeighborhoodForm';
import RestaurantsInNeighborhood from '../restaurants/RestaurantsInNeighborhood';
import AddRestaurantForm from '../forms/AddRestaurantForm';
import RestaurantView from '../restaurants/RestaurantView';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quadrants: ['N','NE', 'NW', 'SE', 'SW', 'View All'],
            selectedQuadrant: 'View All',
            neighborhoodsInSelectedQuadrant: [],

            neighborhoods: [],
            selectedNeighborhood: {},

            restaurants: [],
            restaurantsInSelectedNeighborhood: [],
            selectedRestaurant: {},
            
        };
        this.addNeighborhood = this.addNeighborhood.bind(this);
        this.addRestaurant = this.addRestaurant.bind(this);
        this.updateNeighborhoodsInQuadrantView = this.updateNeighborhoodsInQuadrantView.bind(this);
        this.updateRestaurantsInNeighborhoodView = this.updateRestaurantsInNeighborhoodView.bind(this);
        this.updateSelectedRestaurant = this.updateSelectedRestaurant.bind(this);
    }

    componentDidMount() {
        neighborhoodService.getAll()
            .then(neighborhoods => this.setState({ neighborhoods }))
            .then(() => this.updateNeighborhoodsInQuadrantView(this.state.selectedQuadrant));
        restaurantService.getAll()
            .then(restaurants => this.setState({ restaurants }));
    }


    addNeighborhood(neighborhood) {
        let initialNeighborhoods = this.state.neighborhoods;
        let updatedNeighborhoods = [ ...initialNeighborhoods, neighborhood];
        this.setState({ neighborhoods: updatedNeighborhoods });
    }

    addRestaurant(restaurant) {
        let initialRestaurants = this.state.restaurants;
        let updatedRestaurants = [ ...initialRestaurants, restaurant];
        this.setState({ restaurants: updatedRestaurants });
    }

    updateNeighborhoodsInQuadrantView(quadrant) {
        this.setState({ selectedQuadrant: quadrant });
        if(quadrant === 'View All') {
            this.setState({ neighborhoodsInSelectedQuadrant: this.state.neighborhoods })
        } else {
            let updatedView = this.state.neighborhoods.filter(neighborhood => {
                return neighborhood.quadrant === quadrant
            })
            this.setState({ neighborhoodsInSelectedQuadrant: updatedView})
        }
    }

    updateRestaurantsInNeighborhoodView(neighborhood) {
        console.log('passedinnabe from updateRestoinNabe: ', neighborhood);
        console.log('restaurants from updateRestoinNabe: ', this.state.restaurants);
        this.setState({ selectedNeighborhood: neighborhood });
        let updatedView = this.state.restaurants.filter(restaurant => {
            return restaurant.neighborhood.name === neighborhood.name
        })
        this.setState({ restaurantsInSelectedNeighborhood: updatedView });
        console.log('restaurantsInSelectedNeighborhood: ', this.state.restaurantsInSelectedNeighborhood);
    }

    updateSelectedRestaurant(restaurant) {
        this.setState({ selectedRestaurant: restaurant});
    }

    render() {
        return (
            <div>
                <QuadrantViewNav
                    quadrants={this.state.quadrants}
                    updateNeighborhoodsInQuadrantView={this.updateNeighborhoodsInQuadrantView}/>

                <Switch>
                    <Route exact path={'/neighborhoods'} render={ props => (
                        <NeighborhoodsView {...props}
                            neighborhoodsInSelectedQuadrant={this.state.neighborhoodsInSelectedQuadrant}
                            updateRestaurantsInNeighborhoodView={this.updateRestaurantsInNeighborhoodView} />
                    )} />
                    <Route path={`/neighborhoods/${this.state.neighborhood.name}/restaurants`} render={ props => (
                        <RestaurantsInNeighborhood {...props}
                            restaurantsInSelectedNeighborhood={this.state.restaurantsInSelectedNeighborhood} />
                    )} />
                    <Route path={`neighborhoods/${this.state.neighborhood.name}/${this.state.restaurant.name}`} render={ props => (
                        <RestaurantView {...props}
                            selectedRestaurant={this.state.selectedRestaurant} />
                    )} />
                </Switch> 

                <Route exact path={'/neighborhoods/addneighborhood'} render={ props => (
                    <AddNeighborhoodForm
                        quadrants={this.state.quadrants}
                        addNeighborhood={this.addNeighborhood}/>
                )} />

                <Route exact path={'restaurants/addrestaurant'} render={ props => (
                    <AddRestaurantForm
                        selectedNeighborhood={this.state.selectedNeighborhood}
                        neighborhoods={this.state.neighborhoods}
                        addRestaurant={this.addRestaurant} />
                )} />

            </div>
        );
    }
    
}

export default Main;


