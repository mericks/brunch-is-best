import React, { Component } from 'react';
import neighborhoodService from '../../services/neighborhood-service';
import restaurantService from '../../services/restaurant-service';
import QuadrantViewNav from '../neighborhoods/QuadrantViewNav';
import NeighborhoodsView from '../neighborhoods/NeighborhoodsView';
// import NeighborhoodRestaurants from '../neighborhoods/NeighborhoodRestaurants';
import AddNeighborhoodForm from '../forms/AddNeighborhoodForm';
import RestaurantsInNeighborhood from '../restaurants/RestaurantsInNeighborhood';
import AddRestaurantForm from '../forms/AddRestaurantForm';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quadrants: ['N','NE', 'NW', 'SE', 'SW', 'View All'],
            selectedQuadrant: 'View All',
            neighborhoodsInSelectedQuadrant: [],

            neighborhoods: [],
            selectedNeighborhood: '',

            restaurants: [],
            restaurantsInSelectedNeighborhood: [],
            selectedRestaurant: '',
            
        };
        this.updateNeighborhoods = this.updateNeighborhoods.bind(this);
        this.updateQuadrantView = this.updateQuadrantView.bind(this);
    }

    componentDidMount() {
        neighborhoodService.getAll()
            .then(neighborhoods => this.setState({ neighborhoods }))
            .then(() => this.updateQuadrantView(this.state.selectedQuadrant));
        restaurantService.getAll()
            .then(restaurants => this.setState({ restaurants }));
    }


    updateNeighborhoods(neighborhood) {
        let initialNeighborhoods = this.state.neighborhoods;
        let updatedNeighborhoods = [ ...initialNeighborhoods, neighborhood];
        this.setState({ neighborhoods: updatedNeighborhoods });
    }

    updateQuadrantView(quadrant) {
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

    updateNeighborhoodView(neighborhood) {
        this.setState({ selectedNeighborhood: neighborhood });
        let updatedView = this.state.restaurants.filter(restaurant => {
            return restaurant.neighborhood === neighborhood.name
        })
        this.setState({ restaurantsInSelectedNeighborhood: updatedView })

    }


    render() {
        return (
            <div>
                <QuadrantViewNav quadrants={this.state.quadrants} updateQuadrantView={this.updateQuadrantView}/>
                <NeighborhoodsView neighborhoodsInSelectedQuadrant={this.state.neighborhoodsInSelectedQuadrant} updateNeighborhoodView={this.updateNeighborhoodView}  />
                <AddNeighborhoodForm quadrants={this.state.quadrants} updateNeighborhoods={this.updateNeighborhoods}/>
                <RestaurantsInNeighborhood restaurantsInSelectedNeighborhood={this.state.restaurantsInSelectedNeighborhood} />
                <AddRestaurantForm selectedNeighborhood={this.state.selectedNeighborhood} neighborhoods={this.state.neighborhoods}/>
                {/*<NeighborhoodRestaurants />*/}
            </div>
        );
    }
}

export default Main;


