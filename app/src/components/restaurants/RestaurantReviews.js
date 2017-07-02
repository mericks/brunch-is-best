import React from 'react';


const RestaurantReviews = props => {
    props.reviews.map(review => {
        return (
            <div key={props.review._id}>
                <h3>These are the reviews for the selected Restaurant</h3>
                <p>Reviewed by: {review.reviewedBy}</p>
                <p>Rating: {props.review.ratingValue} out of 5 stars. Date: {props.review.reviewDate}</p>
                <p>{props.review.comment}</p>
            </div>
        );
    })
}

export default RestaurantReviews;
