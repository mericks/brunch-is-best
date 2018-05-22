import React from 'react';
import { Link } from 'react-router-dom';

const NeighborhoodRestaurants = props => {
    if (props.neighborhoodRestaurants.length === 0) {
        return (
            <div>
                <h3>Restaurants in the selected Neighborhood</h3>
                <p>No restaurants in this neighborhood yet. Add one!</p>
                <Link to={'restaurants/addrestaurant'}><button>Add a Restaurant</button></Link>
            </div>
        )
    } else {
        return (
            <div>
                <h3>Restaurants in the selected Neighborhood</h3>
                <ul>
                    {props.neighborhoodRestaurants.map(restaurant =>
                    <li key={restaurant._id}>
                        <Link to={`/restaurants/${restaurant._id}`}>{restaurant.name}</Link>
                    </li>
                    )}
                </ul>

                <Link to={'restaurants/addrestaurant'}><button>Add a Restaurant</button></Link>
            </div>
        );
    }
} 

export default NeighborhoodRestaurants;






/*const NeighborhoodRestaurants = props => (
    <div>
        <h3>These are the restaurants in the selected Neighborhood: NeighborhoodRestaurants</h3>
        <ul>
            {props.restaurantsInSelectedNeighborhood.map(restaurant =>
            <li key={restaurant._id} onClick={() => props.updateSelectedRestaurant(restaurant)}><Link to={`restaurants/${restaurant.name}`}>{restaurant.name}</Link></li>
            )}
        </ul>

        <Link to={'restaurants/addrestaurant'}><button>Add a Restaurant</button></Link>
    </div>
);

export default NeighborhoodRestaurants;*/
