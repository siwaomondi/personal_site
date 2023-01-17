import React, { useState } from "react";
import {
    influences,
    likes,
    intro,
    my_story,
    currently,
    ageData,
} from "../data/about_me/about_me.js";
import "./css/About.css";
import Age from "./About/Age.js";
import AboutSection from "./About/AboutSection.js";
import { Collapse } from "@mui/material";

const About = (props) => {
    const sections = props.sections.map((e) => <AboutSection data={e} />);

    return (
        <section id="about">
            <h1>ABOUT ME</h1>
            <section>
                <h4>
                    Age : <Age ageData={ageData} />
                </h4>
                <h1>Me in a few words</h1>
                {/* <h1>{intro}</h1> */}
            </section>

            {sections}
        </section>
    );
};

About.defaultProps = {
    // sections: [currently, my_story, likes, influences],
    sections: [intro, currently,my_story, likes, influences],
};
export default About;
