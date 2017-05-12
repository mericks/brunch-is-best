import React from 'react';


const QuadrantViewNav = props => (
    <div>
        <h4>View Neighborhoods by Quadrant</h4>
        <ul>
            {props.quadrants.map(quadrant =>
            <li key={quadrant} onClick={() => props.updateNeighborhoodsInQuadrantView(quadrant)}>{quadrant}</li>
            )}
        </ul>
        <hr />
    </div>
);

export default QuadrantViewNav;
