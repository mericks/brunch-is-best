import React, { Component } from 'react';
import restaurantService from '../../services/restaurant-service';
import reviewService from '../../services/review-service';
import RestaurantReviews from './RestaurantReviews';
import AddReviewForm from '../forms/AddReviewForm';


class RestaurantDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurant: {},
            reviews: [],
        };
        this.addReview = this.addReview.bind(this);
        this.deleteRestaurant = this.deleteRestaurant.bind(this);
    }

    componentDidMount() {
        restaurantService.getRestaurant(this.props.restaurantID)
            .then(restaurant => this.setState({ restaurant }))
        reviewService.getAllForRestaurant(this.props.restaurantID)
            .then(reviews => this.setState({ reviews }))
    }

    addReview(review) {
        let initialReviews = this.state.reviews;
        let updatedReviews = [ ...initialReviews, review];
        this.setState({ reviews: updatedReviews });
    }

    deleteRestaurant() {
        restaurantService.delete(this.state.restaurant._id)
    }

    
    render() {
        return (
            <div>
                <h3>THIS IS RESTO DETAIL</h3>
                {/*<h3>{this.state.restaurant.name}</h3>*/}
                {/*<p>{this.state.restaurant.address.street}</p>
                <p>{this.state.restaurant.address.city}</p>
                <p>{this.state.restaurant.address.zip}</p>*/}

                {/*<RestaurantReviews reviews={this.state.reviews} />*/}
                <AddReviewForm selectedRestaurant={this.state.restaurant} addReview={this.addReview}/>
                {/*// TODO: Add logic so that this button only appears if userID matches resto createdBy
                <button onClick={() => this.deleteRestaurant}>Delete Restaurant</button>*/}
            </div>
        );
    }

}

export default RestaurantDetail;
