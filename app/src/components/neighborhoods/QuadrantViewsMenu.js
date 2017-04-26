import React from 'react';


const QuadrantViewsMenu = props => (
    <div>
        <h4>View Neighborhoods by Quadrant</h4>
        <ul>
            {props.quadrants.map(quadrant =>
            <li key={quadrant}>{quadrant}</li>
            )}
        </ul>
        <hr />
    </div>
);

export default QuadrantViewsMenu;
