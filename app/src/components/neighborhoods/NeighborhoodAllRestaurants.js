import React from 'react';
// import { Link } from 'react-router-dom';


const NeighborhoodAllRestaurants = props => (
    <div>
        <h3>This is All Restaurants in the selected Neighborhood</h3>
        {/*<ul>
            {props.selectedView.map(restaurant =>
            <li key={restaurant._id}><Link to={`/restaurants/${restaurant.name}`}>{restaurant.name}</Link></li>
            )}
        </ul>*/}
    </div>
);

export default NeighborhoodAllRestaurants;
