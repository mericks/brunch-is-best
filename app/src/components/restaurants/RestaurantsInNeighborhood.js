import React from 'react';
import { Link } from 'react-router-dom';


const RestaurantsInNeighborhood = props => (
    <div>
        <h3>These are the restaurants in the selected Neighborhood: RestaurantsInNeighborhood</h3>
        <ul>
            {props.restaurantsInSelectedNeighborhood.map(restaurant =>
            <li key={restaurant._id} onClick={() => props.updateSelectedRestaurant(restaurant)}><Link to={`restaurants/${this.state.restaurant.name}`}>{restaurant.name}</Link></li>
            )}
        </ul>

        <Link to={'restaurants/addrestaurant'}><button>Add a Restaurant</button></Link>
    </div>
);

export default RestaurantsInNeighborhood;
