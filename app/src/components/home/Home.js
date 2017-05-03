import React from 'react';
import { Route, Link } from 'react-router-dom';
import SignInForm from '../forms/SignInForm';
import SignUpForm from '../forms/SignUpForm';
import Footer from '../Footer';

const Home = props => {
    return (
        <div>
            <h1>Brunch is Best!</h1>
            <SignInForm handleSignIn={props.handleSignIn} />
            <p>Don't have an account? Sign up now!</p>
            <Link to={'/signup'}><button >Create an Account</button></Link>
            <Footer />


            <Route exact path='/signin' render={props => <SignInForm handleSignIn={props.handleSignIn} /> } />
            <Route exact path='/signup' render={props => <SignUpForm handleSignIn={this.handleSignIn} /> } />
        </div>
    );
};

export default Home;

