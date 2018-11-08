import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div>
                <nav>
                    <h3>Welcome. Get ready to brunch!</h3>
                    <div>
                        This will be the nav bar:
                        <Link to="/"> Home</Link>
                        &nbsp;
                        <Link to="/favorites">Favorites</Link>
                        &nbsp;
                        <Link to="/friends">Friends</Link>
                        &nbsp;
                        <Link to="/">Log Out</Link>
                        {/* <Link to="/" onClick={() => props.handleSignOut()}>
                            Log out
                        </Link> */}
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;
