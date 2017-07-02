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
                        selectedRestaurantID={props.match.params.restaurantID} />
                )
            }} />
        </div>
    );     
} 

export default Restaurants;
