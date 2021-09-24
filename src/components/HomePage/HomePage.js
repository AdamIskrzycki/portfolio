import React from 'react';
import classes from './HomePage.module.css';

const HomePage = () => {
    return <div className={classes.HomePageContainer}>
        <div className={classes.Image}>
            <img alt="AdamIskrzycki" src="AdamIskrzycki.png"></img>
        </div>
        <section className={classes.Greetings}>Hello <br></br> I am Adam</section>
        <section className={classes.AboutMe}>About me</section>
    </div>
}

export default HomePage;