import classes from "./ProjectsGalery.module.css";
import ProjectTile from './ProjectTile/ProjectTile';
import React from 'react';
import { ProjectList } from '../../data/ProjectList';

const ProjectsGalery = () => {
    return <div className={classes.ProjectsGalery}>
        <header className={classes.MyProjectsHeader}>MY PROJECTS</header>
        <section className={classes.ProjectsContainer}>
            {ProjectList.map(el => {
                return <ProjectTile/>
            })}
            
        </section>
    </div>
}

export default ProjectsGalery;