import React from 'react';
import SignInForm from '../forms/SignInForm';
import { Link } from 'react-router-dom';

const Home = (props) => {
    return (
        <div>
            <h1>Brunch is Best!</h1>
            <SignInForm handleSignIn={props.handleSignIn} />
            <p>Don't have an account? Sign up now!</p>
            <Link to={'/signup'}><button >Create an Account</button></Link>
        </div>
    );
};

export default Home;
