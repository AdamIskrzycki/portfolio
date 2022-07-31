import React, {useState} from 'react';
import classes from './ProjectTile.module.css';

const ProjectTile = (props) => {

    const [isInfoVisible, setIsInfoVisible] = useState(false);

    const toggleInfo = () => {
        setIsInfoVisible(!isInfoVisible);
    }

    return <div onMouseOver={toggleInfo} onMouseOut={toggleInfo} className={classes.ProjectTile} style={
        isInfoVisible ? 
        { backgroundImage: "none" } :
        { backgroundImage: `url(/${props.imageURL})` }
    }>
        <div className={isInfoVisible ? classes.ProjectInfoVisible : classes.ProjectInfoHidden}>
            <header className={classes.Title}>{props.title}</header>
            <article className={classes.Description}>{props.description}</article>
            <section className={classes.Tools}>{props.tools}</section>
            <section className={classes.DemoURL}>{props.demoURL}</section>
            <section className={classes.GithubRepoURL}>{props.githubRepoURL}</section>
        </div>
    </div>
}

export default ProjectTile;