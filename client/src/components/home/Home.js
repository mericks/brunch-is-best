import React from 'react';
import { Link } from 'react-router-dom';


const Home = props => (
    <div>
        <h1>Brunch is Best!</h1>
        <p>Don't have an account? Sign up now!</p>
        <Link to={'/signup'}><button >Create an Account</button></Link>
    </div>
);

export default Home;
