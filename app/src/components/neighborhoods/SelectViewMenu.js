import React from 'react';


const SelectViewMenu = props => (
    <div>
        <h4>View Neighborhoods by Quadrant</h4>
        <ul>
            {props.quadrants.map(quadrant =>
            <li key={quadrant} onClick={() => props.updateView(quadrant)}>{quadrant}</li>
            )}
        </ul>
        <hr />
    </div>
);

export default SelectViewMenu;
