import React from 'react'

const ProjectCard = props => {
    return (
        <div className="project-card">
            <h3>{props.project.title}</h3>
            <div className="project-card-body">
                <h4>Stack:</h4>
                <p>{props.project.stack}</p>
                <div className="project-description">
                    <h4>Description:</h4>
                    <p>{props.project.description}</p>
                </div>
                <img className="project-card-image" src={props.project.image_link} />
                <div className="project-button-wrap">
                    <a style={{display: props.project.github_link ? 'inline' : 'none'}} target="_blank" href={props.project.github_link}>
                        <button>View Code</button>
                    </a>
                    <a style={{display: props.project.view_project_link ? 'inline' : 'none'}} target="_blank" href={props.project.view_project_link}>
                        <button>View Project</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;