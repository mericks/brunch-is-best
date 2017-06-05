import React, { Component } from 'react';
import reviewService from '../../services/review-service';
import restaurantService from '../../services/restaurant-service';
import RestaurantReviews from './RestaurantReviews';
import AddReviewForm from '../forms/AddReviewForm';


class RestaurantDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: [],
        };
        this.addReview = this.addReview.bind(this);
        this.deleteRestaurant = this.deleteRestaurant.bdin(this);
    }

    componentDidMount() {
        reviewService.getAllForRestaurant(this.props.selectedRestaurant._id)
            .then(reviews => this.setState({ reviews }))
    }

    addReview(review) {
        let initialReviews = this.state.reviews;
        let updatedReviews = [ ...initialReviews, review];
        this.setState({ reviews: updatedReviews });
    }

    deleteRestaurant() {
        restaurantService.delete(this.props.selectedRestaurant._id)
    }

    
    render() {
        return (
            <div>
                <h5>This is the RestaurantDetail componentt</h5>

                <h3>{this.props.selectedRestaurant.name}</h3>
                <p>{this.props.selectedRestaurant.address.street}</p>
                <p>{this.props.selectedRestaurant.address.city}</p>
                <p>{this.props.selectedRestaurant.address.zip}</p>

                <RestaurantReviews reviews={this.state.reviews}/>
                <AddReviewForm selectedRestaurant={this.props.selectedRestaurant} addReview={this.addReview}/>
                // TODO: Add logic so that this button only appears if userID matches resto createdBy
                <button onClick={() => this.deleteRestaurant}>Delete Restaurant</button>
            </div>
        );
    }

}

export default RestaurantDetail;
