import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// import { Route, Switch } from 'react-router-dom';
import neighborhoodService from '../../services/neighborhood-service';
import restaurantService from '../../services/restaurant-service';
import QuadrantViewNav from '../neighborhoods/QuadrantViewNav';
import NeighborhoodsByQuadrant from '../neighborhoods/NeighborhoodsByQuadrant';
import NeighborhoodRestaurants from '../neighborhoods/NeighborhoodRestaurants';
import AddNeighborhoodForm from '../forms/AddNeighborhoodForm';



class Neighborhoods extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quadrants: ['N','NE', 'NW', 'SE', 'SW', 'View All'],
            selectedQuadrant: 'View All',

            neighborhoods: [],
            neighborhoodsInSelectedQuadrant: [],
            selectedNeighborhood: {},
            neighborhoodRestaurants: [],

            restaurantsAbbrv: [],
        };
        this.addNeighborhood = this.addNeighborhood.bind(this);
        this.updateNeighborhoodsInQuadrantView = this.updateNeighborhoodsInQuadrantView.bind(this);
        this.updateNeighborhoodRestaurantsView = this.updateNeighborhoodRestaurantsView.bind(this);
        // this.addRestaurant = this.addRestaurant.bind(this);
        
    }

    componentDidMount() {
        neighborhoodService.getAll()
            .then(neighborhoods => this.setState({ neighborhoods }))
            .then(() => this.updateNeighborhoodsInQuadrantView(this.state.selectedQuadrant));
        restaurantService.getAbbrv()
            .then(restaurantsAbbrv => this.setState({ restaurantsAbbrv }));
        console.log('inside compdimnt restaurnatsAbbrv: ', this.state.restaurantsAbbrv);
    }

    addNeighborhood(neighborhood) {
        let initialNeighborhoods = this.state.neighborhoods;
        let updatedNeighborhoods = [ ...initialNeighborhoods, neighborhood];
        this.setState({ neighborhoods: updatedNeighborhoods });
    }

    // addRestaurant(restaurant) {
    //     let initialRestaurantNames = this.state.restaurantNames;
    //     let updatedRestaurantNames = [ ...initialRestaurantNames, restaurantNames];
    //     this.setState({ restaurantNames: updatedRestaurantNames });
    // }

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

    updateNeighborhoodRestaurantsView(neighborhood) {
        this.setState({ selectedNeighborhood: neighborhood });
        let updatedView = this.state.restaurantsAbbrv.filter(restaurant => {
            return restaurant.neighborhood.name === neighborhood.name
        })
        this.setState({ neighborhoodRestaurants: updatedView });
    }


    render() {
        const { match } = this.props;
        return (
            <div>
                <QuadrantViewNav
                    quadrants={this.state.quadrants}
                    updateNeighborhoodsInQuadrantView={this.updateNeighborhoodsInQuadrantView}/>

                <Route exact path={match.url} render={ props => (
                    <NeighborhoodsByQuadrant {...this.props}
                        neighborhoodsInSelectedQuadrant={this.state.neighborhoodsInSelectedQuadrant}
                        updateNeighborhoodRestaurantsView={this.updateNeighborhoodRestaurantsView} />
                )} />

                <Route exact path={`${match.url}/:neighborhoodID/restaurants`} render={ props => (
                    <NeighborhoodRestaurants {...this.props}
                        neighborhoodRestaurants={this.state.neighborhoodRestaurants} />
                )} />

                <Route exact path={`${match.url}/addneighborhood`} render={ props => (
                    <AddNeighborhoodForm {...this.props}
                        quadrants={this.state.quadrants}
                        addNeighborhood={this.addNeighborhood}/>
                )} />

            </div>
        );
    }

}

export default Neighborhoods;

