import React from 'react';

const Nav = props => (
    <div>
        <h3>NAV: Welcome {props.userFirstName}.</h3>
        <button onClick={() => props.handleSignOut()}>Sign out</button>
    </div>
);

export default Nav;
