import React from "react";
// import "../static/css/Home.css";

import resumeData from "../data/resume/resumeData";
import { Link } from "react-router-dom";


/******COMPONENTS IMPORT */
import Skills from "../components/Resume/Skills";
import Projects from "../components/Projects/Projects";
import ContactMe from "../components/ContactMe/ContactMe";
import Footer from "../components/Footer/Footer";
import Intro from "../components/Home/Intro/Intro";
import Main from "../layouts/Main";




const HomePage = (props) => {
    return (
        <Main>
            <div className="spage">
                <Intro />
                <ContactMe />
                <Projects />
                <Skills skills={resumeData.skills} />
                <section>
                    <Link to="about">
                        <h1>About</h1>
                    </Link>
                </section>
                
                <Footer />
            </div>
        </Main>
    );
};

export default HomePage;
