import classes from "./ProjectsGalery.module.css";
import ProjectTile from './ProjectTile/ProjectTile';
import React from 'react';
import { ProjectList } from '../../data/ProjectList';

const ProjectsGalery = () => {
    return <div className={classes.ProjectsGalery}>
        <header className={classes.MyProjectsHeader}>MY PROJECTS</header>
        <section className={classes.ProjectsContainer}>
            {ProjectList.map((el, index) => {
                return <ProjectTile 
                title={ProjectList[index].title}
                imageURL={ProjectList[index].imageURL}
                description={ProjectList[index].description}
                tools={ProjectList[index].tools}
                demoURL={ProjectList[index].demoURL}
                githubRepoURL={ProjectList[index].githubRepoURL}/>
            })}
            
        </section>
    </div>
}

export default ProjectsGalery;