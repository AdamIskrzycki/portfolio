import React from "react";
import classes from "./HomePage.module.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className={classes.HomePageContainer}>
      <div className={classes.Image}>
        <img alt="AdamIskrzycki" src="AdamIskrzycki.png"></img>
      </div>
      <section className={classes.Greetings}>
        <span className={classes.Hello}>Hello</span>
        <br></br>I am Adam
      </section>
      <section className={classes.AboutMeContainer}>
        <article className={classes.AboutMe}>
          My name is Adam Iskrzycki. I am a twenty-year-old student with a
          positive attitude to life, who likes learning new things and taking on
          challenges. I am passionate about science and programming. My main
          goal is to expand my knowledge about front-end web development and
          create apps, that would make life easier and more convenient. The
          technologies and tools I am familiar with are:{" "}
          <strong>
            HTML5, CSS3, JavaScript, ES6, ReactJS, Redux, Firebase, Material-UI,
            Git.{" "}
          </strong>{" "}
          Go check out my projects!
        </article>
        <Link to="/projects">
          <div className={classes.ProjectsIcon}>
            <ArrowForwardIcon fontSize="inherit" />
          </div>
        </Link>
      </section>
    </div>
  );
};

export default HomePage;
