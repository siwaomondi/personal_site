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
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
// import raw from "raw.macro";

// const about_markdown = raw("../data/about_me/aboutMe.md");
const about_markdown = "siwa";
const count = about_markdown
    .split(/\s+/)
    .map((s) => s.replace(/\W/g, ""))
    .filter((s) => s.length).length;

// Make all hrefs react router links
const LinkRenderer = ({ ...children }) => <Link {...children} />;

const About = (props) => {
    const sections = props.sections.map((e) => <AboutSection data={e} />);

    return (
        <MiscallenousLayout title="About" description="Learn about Siwa Omondi">
            <section id="about">
                <div>
                    <p>
                        Age : <Age ageData={ageData} />
                    </p>
                    <div>
                        ABOUT ME
                        <p style={{ fontWeight: "400" }}>
                            (In approx {count} words)
                        </p>
                    </div>

                    {sections}
                    <ReactMarkdown
                        source={about_markdown}
                        renderers={{
                            Link: LinkRenderer,
                        }}
                        escapeHtml={false}
                    />
                </div>
            </section>
        </MiscallenousLayout>
    );
};

About.defaultProps = {
    // sections: [currently, my_story, likes, influences],
    sections: [intro, currently, my_story, likes, influences],
};
export default About;
