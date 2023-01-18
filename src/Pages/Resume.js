import Education from "../components/Resume/Education";
import Experience from "../components/Resume/Experience";
import ResumeObject from "../components/Resume/ResumeObject";
import resumeData from "../data/resume/resumeData";
import Main from "../layouts/Main";
// import "../static/css/Resume.css";

const Resume= (props)=> {
    const resumeSections = props.sections.map((e,index) => (
        <ResumeObject key={index} componentName={e.props.componentName} object={e} />
    ));
    return (
        <Main
            title="Resume"
            description="Siwa Omondi (Brian) resume and skills"
            subdirectory="resume"
        >
            <section className="Resume" id="resume">
                {resumeSections}
            </section>
        </Main>
    );
}
Resume.defaultProps = {
    sections: [
        <Experience experiencesList={resumeData.experiencesList} />,
        <Education educationList={resumeData.educationList} />,
    ],
};
export default Resume;
