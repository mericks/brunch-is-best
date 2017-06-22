import React from 'react';
import { Route } from 'react-router-dom';
import RestaurantDetail from './RestaurantDetail';


const Restaurants = props => {
    const { match } = props;
    return (
        <div>
            <Route exact path={`${match.url}/:restaurantID`} render={ props => {
                return (
                    <RestaurantDetail {...props}
                        selectedRestaurant={props.match.params.restaurantID} />
                )
            }} />
        </div>
    );     
} 

export default Restaurants;
