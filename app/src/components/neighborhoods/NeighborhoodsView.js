import React from 'react';


const NeighborhoodsView = props => (
    <div>
        <h5>Test of Dynamic Quadrant Views - default to View All</h5>
        <ul>
            {props.selectedView.map(neighborhood =>
            <li key={neighborhood._id}>{neighborhood.name}</li>
            )}
        </ul>
    </div>
);

/*const NeighborhoodsView = props => (
    <ul>
        {props.neighborhoods.map(neighborhood =>
        <li key={neighborhood._id}>{neighborhood.name}</li>
        )}
    </ul>
);*/

export default NeighborhoodsView;
