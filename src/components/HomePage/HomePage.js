import React from "react";
import classes from "./HomePage.module.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useRef } from 'react';
import ProjectsGalery from "../ProjectsGalery/ProjectsGalery";
import Footer from '../Footer/Footer';

const HomePage = () => {

  const galeryRef = useRef(null);

  const handleClick = () => {
    galeryRef.current.scrollIntoView({ behavior: 'smooth' });

  }

  return (
    <>
      <div className={classes.Header}>
      <div className={classes.HomePageContainer}>
        <div className={classes.LeftTile}>
        <div className={classes.Image}>
          <img alt="AdamIskrzycki" src="AdamIskrzycki.png"></img>
        </div>
        <section className={classes.Greetings}>
          <span className={classes.Hello}>Hello</span>
          <br></br>I am Adam
        </section>
        </div>
        <div className={classes.RightTile}>
        <section className={classes.AboutMeContainer}>
          <article className={classes.AboutMe}>
            My name is Adam Iskrzycki. I am a twenty-one-year-old student with a
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
          <div className={classes.ProjectsIcon} onClick={handleClick}>
            <ArrowDownwardIcon fontSize="inherit" />
          </div>
        </section> 
        </div>
      </div>
      <div className={classes.Wave}>
      </div>
      </div>
      <div ref={galeryRef}>
        <ProjectsGalery/>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
