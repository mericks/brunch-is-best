import React from 'react';


const QuadrantViews = props => (
    <div>
        <h5>Test of QuadrantViews using NW</h5>
        <ul>
            {props.selectedView.map(neighborhood =>
            <li key={neighborhood._id}>{neighborhood.name}</li>
            )}
        </ul>
        <hr />
    </div>
);

export default QuadrantViews;
