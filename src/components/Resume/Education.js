import React, { Component } from "react";
import './css/Education.css'

class Education extends Component {
    static defaultProps = {
        componentName:"Education"
    }
    render() {
        const educationList = this.props.educationList
        const education = educationList.map(e =>
            <div>
                <h2>{e.certification}</h2>
                <p><a href={e.institutionUrl} target="_blank">{e.institutionName}</a> , {e.completionYear}</p>
            </div>
        )
        return (
            <div className="Education">
                {education}
            </div>
        )
    }
}

export default Education