import React from 'react';

// Components
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

const Dashboard = props => (
    <div>
        <Header />
        <div>
            <h4>
                I'm currently redeveloping this site, refactoring code,
                implementing Redux, adding styles.
            </h4>
            <p>
                This is a full stack MERN application.
                <br /> It's difficult to see full functionality at this time,
                however you can
                <a href="https://github.com/mericks/brunchday">
                    view the code here
                </a>
                .<br />I push primarily to the dev branch and only periodically
                create a pull request to master.
                <br />
            </p>

            <h3>DASHBOARD VISION:</h3>
            <ul>
                <li>Profile information</li>
                <ul>
                    <li>Personal details</li>
                    <li>Update personal details</li>
                    <li>Send invite to friends</li>
                    <li>Delete profile</li>
                </ul>
                <li>Summary of visited restaurants, ranked by preference</li>
                <li>List of friends with link to profiles</li>
                <li>Restaurants recommend by friends within geo proximity</li>
                <li>Recent activity by friends: restaurants, reviews, etc.</li>
            </ul>
        </div>
        <Body />
        <Footer />
    </div>
);

export default Dashboard;
