import React from 'react';
import ProjectCard from './subcomponents/ProjectCard';
import './projects.scss';

class Projects extends React.Component {
    constructor() {
        super();
        this.state = {
            fullStackProjects: [
                {
                    title: "HEMA Website",
                    github_link: "https://github.com/eolculnamo2/hema-site",
                    view_project_link: "https://www.sword-point.com/",
                    image_link: "https://image.ibb.co/ef0ReJ/tal_armor.jpg",
                    description: "Single page application site which provides users with the opportunity to view and create articles. The site also has a tournament builder which can currently build rosters and allow users to register for tournaments.",
                    stack: "SPA Application using Server Side Rendering, React, React Router, NodeJS/Express, MongoDB, Helmet, and Passport"
                },
                {
                    title: "JIRA Style Issue Tracker",
                    github_link: "https://github.com/eolculnamo2/fccIssueTracker",
                    view_project_link: "https://road-verse.glitch.me/",
                    image_link: "https://eolculnamo2.github.io/assets/issue-tracker.png",
                    description: "Full stack application built for one of the freeCodeCamp certificate. This is a JIRA-styled issue tracker where users can create, edit, mark issues as solved/unsolved, comment etc.",
                    stack: "React, Redux, MongoDB, NodeJS/Express, Helmet, and PassportJS"
                },
                {
                    title: "Voting App",
                    github_link: "https://github.com/eolculnamo2/VotingApp",
                    view_project_link: undefined,
                    image_link: "https://preview.ibb.co/fXAysq/Screen-Shot-2018-11-12-at-12-11-44-AM.png",
                    description: "I'm by no means a Java Developer, but used this project as a way to learn more about Java. It is a simple voting app where users can create voting polls and vote on polls created by other users. This project is not hosted anywhere online and so can only be viewed locally.",
                    stack: "Java SpringMVC, Maven, and Hibernate back end with VueJS and Vue Router on the front end."
                },
                {
                    title: "Wikipedia Viewer",
                    github_link: "https://github.com/eolculnamo2/WikipediaViewer/",
                    view_project_link: "https://juniper-cormorant.glitch.me/",
                    image_link: "https://eolculnamo2.github.io/assets/wiki-vue.png",
                    description: "Simple front end project that uses Wikipedia's API to iterate through search results. I used this project to learn Vue when I first started.",
                    stack: "VueJS"
                },
                {
                    title: "Anonymous Message Board",
                    github_link: "https://github.com/eolculnamo2/fccAnonymousBoard",
                    view_project_link: "https://rhetorical-mist.glitch.me/b/general",
                    image_link: "https://preview.ibb.co/mdJ4yV/Screen-Shot-2018-11-12-at-12-32-00-AM.png",
                    description: "A freeCodeCamp project geared towards back end development and security. Users can anonymously create and reply to anonymous posts. The site uses HelmetJS to meet security requirements layed out in project requirements on freeCodeCamp.",
                    stack: "NodeJS/Express, MongoDB, HelmetJS"
                },
                {
                    title: "Portfolio Site (This site)",
                    github_link: "https://github.com/eolculnamo2/portfolio-site",
                    view_project_link: "https://github.com/eolculnamo2/portfolio-site",
                    image_link: "https://preview.ibb.co/m2nNJV/Screen-Shot-2018-11-12-at-12-38-48-AM.png",
                    description: "This website.",
                    stack: "Server Side Rendering, React, SCSS, NodeJS/Express"
                }
            ],
            frontEndProjects: [],
            backEndProjects: []
        }
    }

    render() {
        return (
            <div className="projects-main-wrap">
                <h1 className="projects-title">Personal Projects</h1>
                <div className="project-card-wrap">
                    {this.state.fullStackProjects.map((x,i) => {
                        return <ProjectCard key={"project-card"+i} project={x}/>
                    })}
                </div>
            </div>
        )
    }
}

export default Projects;