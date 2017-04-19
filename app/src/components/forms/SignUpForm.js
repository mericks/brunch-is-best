import React, { Component } from 'react';
import SingleInput from './SingleInput';
import fetcher from '../../helpers/fetcher';

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        };
        this.handleFormSignUp = this.handleFormSignUp.bind(this);
        this.handleFormClear = this.handleFormClear.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    handleFormSignUp(e) {
        e.preventDefault();

        const formPayload = {
            name: { first: this.state.firstName, last: this.state.lastName },
            email: this.state.email,
            password: this.state.password
        };
        console.log('to be sent to DB - formPayload', formPayload);

        fetcher({
            path: '/auth/signup',
            method: 'POST',
            body: formPayload,
        })
        .then(token => {
            this.props.handleSignIn(token)
            // this.handleFormClear(e)    //TODO: figure out what to do when signing doesn't work
        });
    }

    handleFormClear(e) {
        e.preventDefault();

        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        })
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div>
                <h1>Sign Up and Get Ready to Brunch!</h1>
                <form onSubmit={this.handleFormSignUp}>
                    <SingleInput
                        title={'First Name'}
                        name={'firstName'}
                        inputType={'text'}
                        content={this.state.firstName}
                        controlFunc={this.handleChange}
                        placeholder={'First Name'} />
                    <SingleInput
                        title={'Last Name'}
                        name={'lastName'}
                        inputType={'text'}
                        content={this.state.lastName}
                        controlFunc={this.handleChange}
                        placeholder={'Last Name'} />
                    <SingleInput
                        title={'Email'}
                        name={'email'}
                        inputType={'text'}
                        content={this.state.email}
                        controlFunc={this.handleChange}
                        placeholder={'Email'} />
                    <SingleInput 
                        title={'Password'}
                        name={'password'}
                        inputType={'text'}
                        content={this.state.password}
                        controlFunc={this.handleChange}
                        placeholder={'Password'} />
                    <input
                        type='submit'
                        value='Submit' />
                </form>
            </div>
        );
    };

}

export default SignUpForm;
