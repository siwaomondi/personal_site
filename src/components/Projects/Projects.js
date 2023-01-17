import { Collapse } from "@mui/material";
import React, { Component, useState } from "react";
import PortfolioCover from "./PortfolioObject";
import "./Projects.css";

const Projects = (props) => {
    const projectList = props.projectList;
    const [open, setOpen] = useState(false);
    const projects = projectList.map((e) => <PortfolioCover />);

    return (
        <section id="portfolio" className="full">
            <a
            style={{cursor: 'pointer'}}
                onClick={() => {
                    setOpen(!open);
                }}
            >
                <h1 className="title">Portfolio</h1>
            </a>

            <Collapse in={open} timeout={2000}>
                <div className="comp-s-div auto_slide ">{projects}</div>
            </Collapse>
        </section>
    );
};

Projects.defaultProps = {
    projectList: [
        {
            id: 1,
            projectTitle: "NWCC",
            projectDescription:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            coverImage: "",
        },
        {
            id: 1,
            projectTitle: "NWCC",
            projectDescription: "A new way of design",
            coverImage: "",
        },
        {
            id: 1,
            projectTitle: "NWCC",
            projectDescription: "A new way of design",
            coverImage: "",
        },
        {
            id: 1,
            projectTitle: "NWCC",
            projectDescription: "A new way of design",
            coverImage: "",
        },
        {
            id: 1,
            projectTitle: "NWCC",
            projectDescription: "A new way of design",
            coverImage: "",
        },
        {
            id: 1,
            projectTitle: "NWCC",
            projectDescription: "A new way of design",
            coverImage: "",
        },
        {
            id: 1,
            projectTitle: "NWCC",
            projectDescription: "A new way of design",
            coverImage: "",
        },
    ],
};

export default Projects;
