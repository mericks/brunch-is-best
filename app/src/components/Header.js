import React from 'react';

const Header = props => (
    this.state.signedIn ? (
        <div>
            <h3>Welcome {props.userFirstName}.</h3>
            <button onClick={() => props.handleSignOut()}>Sign out</button>
        </div>
    ) : (
        <SignInForm handleSignIn={props.handleSignIn} />
    )
);

export default Header;
