import React, { Component } from 'react';
import styles from './TitleEntry.css';
import SignInForm from '../forms/SignInForm';

const TitleEntry = props => (
    <main className={styles.titleEntry}>
        <div className="title">
            <strong>Brunchday!</strong>
        </div>
        <SignInForm {...props} handleSignIn={props.handleSignIn} />
    </main>
);

export default TitleEntry;
