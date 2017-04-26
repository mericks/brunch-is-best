import React from 'react';
import { Link } from 'react-router-dom';
import SignInForm from '../forms/SignInForm';
import Footer from '../Footer';

const Home = (props) => {
    return (
        <div>
            <h1>Brunch is Best!</h1>
            <SignInForm handleSignIn={props.handleSignIn} />
            <p>Don't have an account? Sign up now!</p>
            <Link to={'/signup'}><button >Create an Account</button></Link>
            <Footer />
        </div>
    );
};

export default Home;
