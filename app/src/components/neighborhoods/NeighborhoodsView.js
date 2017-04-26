import React from 'react';


const NeighborhoodsView = props => (
    <div>
        <h3>Neighborhoods</h3>
        <ul>
            {props.selectedView.map(neighborhood =>
            <li key={neighborhood._id}>{neighborhood.name}</li>
            )}
        </ul>
    </div>
);

export default NeighborhoodsView;
