import React from 'react';

const NeighborhoodsView = props => (
    <ul>
        {props.neighborhoods.map(neighborhood =>
        <li key={neighborhood._id}>{neighborhood.name}</li>
        )}
    </ul>
);

export default NeighborhoodsView;
