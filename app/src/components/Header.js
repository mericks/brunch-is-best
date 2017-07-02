import React from 'react';
import SignInForm from './forms/SignInForm';


const Header = props => (
    props.signedIn ? (
        <div>
            <h3>Welcome {props.userFirstName}.</h3>
            <button onClick={() => props.handleSignOut()}>Sign out</button>
        </div>
    ) : (
        <SignInForm handleSignIn={props.handleSignIn} />
    )
);

export default Header;
