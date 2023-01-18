import React, { Component } from "react";
// import './ProjectCover.css'



class ProjectCover extends Component {
    render() {
        const features = this.props.features
        const imgSrc = features.id
        const style = {
            backgroundImage: 'url(/images/1.png)',
            height: '30rem',
        }
        return (
            <div className="ProjectCover">
                <div style={style}>
                    <h1 className="ProjectCover-title">
                        {features.projectTitle}
                    </h1>
                    <div className="ProjectCover-description-div">
                        <p className="ProjectCover-description-text">{features.projectDescription}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectCover