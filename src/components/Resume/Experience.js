import React, { Component } from "react";
// import "./css/Experience.css";

const Experience = (props) => {
    const experiencesList = props.experiencesList;
    const experiences = experiencesList.map((e, index) => (
        <article key={index} className="Experience-container">
            <header className="Experience-company">
                <h4>
                    <a href={e.companywebsite} target="_blank">
                        {e.company}
                    </a>{" "}
                    - {e.position}
                </h4>
                <p className="Experience-period">{e.period}</p>
            </header>
            <ul className="Experience-responsibilities">
                {e.duties.map((duty) => (
                    <li>{duty}</li>
                ))}
            </ul>
        </article>
    ));
    return <div className="Experience">{experiences}</div>;
};

Experience.defaultProps = {
    componentName: "Experience",
};
export default Experience;
