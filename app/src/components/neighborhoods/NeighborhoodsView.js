import React from 'react';
import { Link } from 'react-router-dom';


const NeighborhoodsView = props => (
    <div>
        <h3>Neighborhoods in the Selected Quadrant</h3>
        <ul>
            {props.neighborhoodsInSelectedQuadrant.map(neighborhood =>
            <li key={neighborhood._id} onClick={() => props.updateRestaurantsInNeighborhoodView(neighborhood)}><Link to={`/neighborhoods/${neighborhood.name}/restaurants`}>{neighborhood.name}</Link></li>
            )} 
        </ul>

        <Link to={'/neighborhoods/addneighborhood'}><button>Add a Neighborhood</button></Link>
    </div>
);

export default NeighborhoodsView;
