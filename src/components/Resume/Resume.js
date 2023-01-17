import React, { Component } from "react";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";
import ResumeObject from "./ResumeObject";
import resumeData from "../../data/resume/resumeData";
import "./css/Resume.css";

class Resume extends Component {
    static defaultProps = {
        objects: [
            // <Skills skills={resumeData.skills} />,            
            <Experience experiencesList={resumeData.experiencesList} />,            
            <Education educationList={resumeData.educationList} />,
        ],
    };
    render() {
        const objects = this.props.objects;
        const resumeObjects = objects.map((e, index) => (
            <ResumeObject componentName={e.props.componentName} object={e} />
        ));
        return (
            <section className="Resume" id="resume">
                {resumeObjects}
            </section>
        );
    }
}

export default Resume;
