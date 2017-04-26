import React from 'react';
import AddNeighborhoodForm from '../forms/AddNeighborhoodForm';


const Neighborhoods = props => (
    <div>
        <h3>This is NABE component - list should be belo</h3>
        <ul>
            {props.neighborhoods.map(neighborhood =>
            <li key={neighborhood._id}>{neighborhood.name}</li>
            )}
        </ul>
        <AddNeighborhoodForm updateNeighborhoods={props.updateNeighborhoods}/>
    </div>
);

export default Neighborhoods;