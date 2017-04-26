import React, { Component } from 'react';
import SingleInput from './formComponents/SingleInput';
import fetcher from '../../helpers/fetcher';

class SignInForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
        this.handleFormSignIn = this.handleFormSignIn.bind(this);
        this.handleFormClear = this.handleFormClear.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    handleFormSignIn(e) {
        e.preventDefault();

        const formPayload = {
            email: this.state.email,
            password: this.state.password
        };
        console.log('to be sent to DB - formPayload', formPayload);

        fetcher({
            path: '/auth/signin',
            method: 'POST',
            body: formPayload,
        })
        .then(token => {
            this.props.handleSignIn(token)
            // this.handleFormClear(e)
        })
        .catch();
    }

    handleFormClear(e) {
        e.preventDefault();

        this.setState({
            email: '',
            password: ''
        })
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <form onSubmit={this.handleFormSignIn}>
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
                    value='Sign In' />
            </form>
        );
    };

}

export default SignInForm;
