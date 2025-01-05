import classes from "./ProjectsGalery.module.css";
import ProjectTile from './ProjectTile/ProjectTile';
import React, { useState } from 'react';
import { WebDevProjectList } from '../../data/WebDevProjectList';
import { DataProjectList } from '../../data/DataProjectList';

const ProjectsGalery: React.FC = () => {

    const [projectList, setProjectList] = useState("Web Development")


    return <div className={classes.ProjectsGalery}>
        <header className={classes.MyProjectsHeader}>MY PROJECTS</header>
        <section className={classes.ProjectOptionContainer}>
            {/* <button className={classes.ProjectOptionButton} onClick={() => setProjectList('Web Development')}>Web Development</button> */}
            <button
                className={`${classes.ProjectOptionButton} ${
                    projectList === 'Web Development' ? classes.ActiveButton : ''
                }`}
                onClick={() => setProjectList('Web Development')}
            >
                Web Development
            </button>
            <button
                className={`${classes.ProjectOptionButton} ${
                    projectList === 'Data Analysis' ? classes.ActiveButton : ''
                }`}
                onClick={() => setProjectList('Data Analysis')}
            >
                Data Analysis
            </button>
        </section>
        <section className={classes.ProjectsContainer}>
            {projectList == 'Web Development' ? (WebDevProjectList.map((el, index) => {
                return <ProjectTile
                    title={WebDevProjectList[index].title}
                    imageURL={WebDevProjectList[index].imageURL}
                    mobileImageURL={WebDevProjectList[index].mobileImageURL}
                    description={WebDevProjectList[index].description}
                    tools={WebDevProjectList[index].tools}
                    demoURL={WebDevProjectList[index].demoURL}
                    githubRepoURL={WebDevProjectList[index].githubRepoURL} />
            })) : (DataProjectList.map((el, index) => {
                return <ProjectTile
                    title={DataProjectList[index].title}
                    imageURL={DataProjectList[index].imageURL}
                    mobileImageURL={DataProjectList[index].mobileImageURL}
                    description={DataProjectList[index].description}
                    tools={DataProjectList[index].tools}
                    demoURL={DataProjectList[index].demoURL}
                    githubRepoURL={DataProjectList[index].githubRepoURL} />
            }))
            }

        </section>
    </div>
}

export default ProjectsGalery;