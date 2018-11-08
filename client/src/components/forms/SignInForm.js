import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SingleInput from './formComponents/SingleInput';
import authService from '../../services/auth-service';

class SignInForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    handleFormSignIn = e => {
        e.preventDefault();

        const formPayload = {
            email: this.state.email,
            password: this.state.password
        };

        authService
            .signin(formPayload)
            .then(() => this.props.handleSignIn())
            .catch(err => console.log(err));
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSignIn}>
                    <SingleInput
                        // title={'Email'}
                        name={'email'}
                        inputType={'text'}
                        content={this.state.email}
                        controlFunc={this.handleChange}
                        placeholder={'Email'}
                    />
                    <SingleInput
                        // title={'Password'}
                        name={'password'}
                        inputType={'text'}
                        content={this.state.password}
                        controlFunc={this.handleChange}
                        placeholder={'Password'}
                    />
                    <input type="submit" value="Sign In" />
                </form>
                <p>
                    Not a member? <Link to="/register">Join now</Link>
                </p>
            </div>
        );
    }
}

export default SignInForm;
