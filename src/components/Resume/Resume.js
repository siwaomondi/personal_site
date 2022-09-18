import React, { Component } from "react";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education"
import ResumeObject from "./ResumeObject";
import educationList from "../../data/resume/education";
import experiencesList from "../../data/resume/experience";
import skills from "../../data/resume/skills";
import "./css/Resume.css"

class Resume extends Component {
    static defaultProps = {
        objects: [<Education educationList={educationList}/>, <Experience experiencesList={experiencesList}/>, <Skills skills={skills}/>]
    }
    render() {
        const objects = this.props.objects
        const resumeObjects = objects.map((e, index) => <ResumeObject componentName={e.props.componentName} object={e} />)
        return (
            <div className="Resume">
                {resumeObjects}
            </div>
        )
    }
}


export default Resume