import React, {} from "react";
import { TagCloud } from "react-tagcloud";

const Skills = (props) => {
    const skillsList = props.skills;
    const techSkills = skillsList.techStack;
    const designSkills = skillsList.design;
    const customRenderer = (tag, size=1, color) => (
        <span
            key={tag.value}
            style={{
                animation: "blinker 6s linear infinite",
                animationDelay: `${Math.random() * 2}s`,
                fontSize: `${size / 2}rem`,
                // border: `2px solid white`,
                margin: "3px",
                padding: "3px",
                display: "inline-block",
                color: `${color}`,
                // fontStyle:"italic",
                fontFamily:"'Moon Dance', cursive",
            
            }}
        >
            {tag.value}
        </span>
    );

    return (
        <section id="Skills"  style={{padding:0,margin:0}}>
            <TagCloud
                style={{ textAlign: "center" ,transition:"1.5s"}}
                minSize={2}
                maxSize={6}
                tags={techSkills}
                shuffle={true}
                renderer={customRenderer}
            />
            <TagCloud
                style={{ textAlign: "center"}}
                minSize={4}
                maxSize={6}
                tags={designSkills}
                shuffle={true}
                renderer={customRenderer}
            />
        </section>
    );
};

Skills.defaultProps = {
    componentName: "Skills",
    skills: [],
};
export default Skills;
