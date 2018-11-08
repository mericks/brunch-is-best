import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Home from '../home/Home';
import Neighborhoods from '../neighborhoods/Neighborhoods';
import Restaurants from '../restaurants/Restaurants';
import SignUpForm from '../forms/SignUpForm';

const Body = props => {
    const signedIn = props.signedIn;

    return (
        <div>
            <Route
                exact
                path="/"
                render={props =>
                    signedIn ? (
                        <Redirect
                            to={{
                                pathname: '/neighborhoods',
                                state: { from: props.location }
                            }}
                        />
                    ) : (
                        <Home {...props} handleSignIn={props.handleSignIn} />
                    )
                }
            />
            <Route path="/neighborhoods" component={Neighborhoods} />
            <Route path="/restaurants" component={Restaurants} />
            <Route
                exact
                path="/signup"
                render={props => (
                    <SignUpForm {...props} handleSignIn={props.handleSignIn} />
                )}
            />
        </div>
    );
};
export default Body;
