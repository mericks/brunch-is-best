import React, { Component } from 'react';
import styles from './TitleEntry.css';
import SignInForm from '../forms/SignInForm';

class TitleEntry extends Component {
    render() {
        return (
            <main className={styles.titleEntry}>
                <div className="title">
                    <strong>Brunchday!</strong>
                </div>
                <div className="signIn">
                    <SignInForm />
                </div>
            </main>
        );
    }
}

export default TitleEntry;
