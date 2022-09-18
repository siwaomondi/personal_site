import React, { Component } from "react";
import ProjectCover from "./ProjectCover";



class Projects extends Component {
    static defaultProps = {
        projectList:[
            {id: 1, projectTitle: "NWCC", projectDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", coverImage: ""},
            {id: 1, projectTitle: "NWCC", projectDescription: "A new way of design", coverImage: ""},
            {id: 1, projectTitle: "NWCC", projectDescription: "A new way of design", coverImage: ""},
            {id: 1, projectTitle: "NWCC", projectDescription: "A new way of design", coverImage: ""},
        ]
    }
    render() {
        const projectList = this.props.projectList
        const projects = projectList.map(e => <ProjectCover features={e}/>)

        
        return (
        <div className="Projects">
            {projects}
        </div>
        )
    }
}


export default Projects