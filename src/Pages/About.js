import React, { useState } from "react";
import {
    influences,
    likes,
    intro,
    my_story,
    currently,
    ageData,
} from "../data/about_me/about_me.js";
import Age from "../components/About/Age.js";
import AboutSection from "../components/About/AboutSection.js";
import MiscallenousLayout from "../layouts/MiscallenousLayout.js";

const About = (props) => {
    const sections = props.sections.map((e) => <AboutSection data={e} />);

    return (
        <MiscallenousLayout title="About" description="Learn about Siwa Omondi">
            <section id="about">
                <p>
                    Age : <Age ageData={ageData} />
                </p>
                <h1 style={{fontWeight:"400"}}>Me in a few words</h1>
                {/* <h1>{intro}</h1> */}

                {sections}
            </section>
        </MiscallenousLayout>
    );
};

About.defaultProps = {
    // sections: [currently, my_story, likes, influences],
    sections: [intro, currently, my_story, likes, influences],
};
export default About;
