import React from 'react';
// import { Link } from 'react-router-dom';


const RestaurantView = props => (
    <div>
        <h3>This is the detailed view of a restaurant: RestaurantView</h3>
        {/*<ul>
            {props.selectedView.map(neighborhood =>
            <li key={neighborhood._id}><Link to={`/neighborhoods/${neighborhood.name}/restaurants`}>{neighborhood.name}</Link></li>
            )}
        </ul>*/}
    </div>
);

export default RestaurantView;
