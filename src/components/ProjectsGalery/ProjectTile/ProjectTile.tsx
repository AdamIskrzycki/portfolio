import React, {useState, useEffect} from 'react';
import classes from './ProjectTile.module.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';

interface ProjectTileProps {
    title: string,
    imageURL: string,
    mobileImageURL: string,
    description: string,
    tools: string[]
    demoURL: string,
    githubRepoURL: string
}

const ProjectTile: React.FC<ProjectTileProps> = (props) => {

    const [isInfoVisible, setIsInfoVisible] = useState(false);
    const [mobileView, setMobileView] = useState(false);

    const toggleInfo = () => {
        setIsInfoVisible(!isInfoVisible);
    }

    const resizeWindow = () => {
        if(window.innerWidth < 1000) {
            setMobileView(true);
        } else setMobileView(false);
    }

    useEffect(() => {
        resizeWindow();
        window.addEventListener("resize", resizeWindow);
        return () => window.removeEventListener("resize", resizeWindow);
      }, [mobileView]);

    return <div onMouseOver={toggleInfo} onMouseOut={toggleInfo} className={classes.ProjectTile} style={
        isInfoVisible ?
        { backgroundImage: "none" } :
        { backgroundImage: `url(/portfolio/${mobileView ? props.mobileImageURL : props.imageURL})`}
    }>
        <div className={isInfoVisible ? classes.ProjectInfoVisible : classes.ProjectInfoHidden}>
            <div className={classes.ProjectDetailsContainer}>
                <header className={classes.Title}>{props.title}</header>
                <article className={classes.Description}>{props.description}</article>
                <section className={classes.Tools}>{props.tools.map(el => {
                return <div className={classes.Tool}>{el}</div>
                })}</section>
            </div>
            <div className={classes.ProjectLinksContainer}>
                <section className={classes.DemoURL} style={{visibility: props.demoURL !== '' ? 'visible' : 'hidden'}}>{
                <a href={props.demoURL} target="_blank"><OpenInBrowserIcon fontSize="inherit" style={{ color: 'ff9b2a' }}></OpenInBrowserIcon></a>
                }</section>
                <section className={classes.GithubRepoURL}>{
                <a href={props.githubRepoURL} target="_blank"><GitHubIcon fontSize="inherit" style={{ color: 'ff9b2a' }}></GitHubIcon></a>
                }</section>
            </div>
        </div>
    </div>
}

export default ProjectTile;