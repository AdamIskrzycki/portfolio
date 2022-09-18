import React, {useState} from 'react';
import classes from './ProjectTile.module.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';

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
            <section className={classes.Tools}>{props.tools.map(el => {
               return <div className={classes.Tool}>{el}</div>
            })}</section>
            <section className={classes.DemoURL}>{
            <a href={props.demoURL} target="_blank"><OpenInBrowserIcon fontSize="inherit" style={{ color: 'ff9b2a' }}></OpenInBrowserIcon></a>
            }</section>
            <section className={classes.GithubRepoURL}>{
            <a href={props.githubRepoURL} target="_blank"><GitHubIcon fontSize="inherit" style={{ color: 'ff9b2a' }}></GitHubIcon></a>
            }</section>
        </div>
    </div>
}

export default ProjectTile;