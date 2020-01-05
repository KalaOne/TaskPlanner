import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return ( 
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem Ipsum dolor sit meine schnelle piss cock sucker</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Kaloyan Vulchev</div>
                    <div>A random date</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails