import React from "react";
import "../static/css/Home.css";

import resumeData from "../data/resume/resumeData";
import { Link } from "react-router-dom";


/******COMPONENTS IMPORT */
import Skills from "../components/Resume/Skills";
import Projects from "../components/Projects/Projects";
import ContactMe from "../components/ContactMe/ContactMe";
import Footer from "../components/Footer/Footer";
import Intro from "../components/Home/Intro/Intro";




const HomePage = (props) => {
    const sectionList = [];
    return (
        <>
            <div className="spage">
                <Intro />
                <ContactMe />
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
                
                <Footer />
            </div>
        </>
    );
};

export default HomePage;
