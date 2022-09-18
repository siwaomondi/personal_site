import React, { Component } from "react";
import SkillBar from 'react-skillbars';

class Skills extends Component {
    static defaultProps = {
        componentName: "Skills"
    }
    render() {
        const skills = this.props.skills
        return (
            <div className="Skills">
                <SkillBar skills={skills} height={16} animationDelay={0}/>
            
            </div>
        )
    }
}


export default Skills