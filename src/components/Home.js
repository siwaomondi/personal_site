import React from "react";
import About from "./About";
import Projects from "./Projects/Projects";
import Resume from "./Resume/Resume";
import ContactMe from "./ContactMe";
import "./css/Home.css";
import Footer from "./Footer";
import Intro from "./Intro";
import Skills from "./Resume/Skills";
import resumeData from "../data/resume/resumeData";
import { Link } from "react-router-dom";

const HomePage = (props) => {
    const sectionList = [];
    return (
        <>
            <div className="spage">
                <Intro />
                <Projects />
                <Skills skills={resumeData.skills} />
                <section>
                    <Link to="about" style={{textDecoration:"none" , cursor: 'pointer'}}>
                        <h1>About</h1>
                    </Link>
                    <Link to="resume" style={{textDecoration:"none"}}>
                        <h1>Resume</h1>
                    </Link>
                </section>
                {sectionList}
                <ContactMe />
                <Footer />
            </div>
        </>
    );
};

export default HomePage;
