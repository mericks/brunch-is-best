import React from 'react';
import styles from './TitleEntry.css';

const InDevelopment = () => (
    <div className="temp">
        <h4>
            I'm currently redeveloping this site, refactoring code, implementing
            Redux, and adding styles.
        </h4>
        <p>
            This is a full stack MERN application. It's difficult to see
            functionality at this time, however you can{' '}
            <a href="https://github.com/mericks/brunchday">
                view the code here
            </a>
            .<br />I push primarily to the dev branch, periodically creating a
            pull request to master.
        </p>
    </div>
);

export default InDevelopment;
