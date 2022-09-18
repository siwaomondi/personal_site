import React, { Component } from 'react';
import { influences, likes, intro, my_story, currently, ageData } from '../data/about_me/about_me.js';
import './css/About.css'
import { Link } from 'react-router-dom'
import Age from './About/Age.js';
import AboutSection from './About/AboutSection.js';

const About = (props) => {
    const sections = props.sections.map((e) =>
            <AboutSection data={e} />)
    return (
        <div>
            <h1>Me in a few words</h1>
            <h2>Current age : <Age counter={true} ageData={ageData} /></h2>
            {sections}

        </div>
    );
}


About.defaultProps={
    sections: [intro, currently, my_story, likes, influences ]
}
export default About;