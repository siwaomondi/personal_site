import React, { Component } from "react";

const Education = (props) => {
    const educationList = props.educationList;
    const education = educationList.map((e, index) => (
        <div key={index}>
            <h2 style={{ fontSize: "1.15em" }}>{e.certification}</h2>
            <p>
                <a href={e.institutionUrl} target="_blank">
                    {e.institutionName}
                </a>{" "}
                , {e.completionYear}
            </p>
        </div>
    ));
    return <div className="Education">{education}</div>;
};

Education.defaultProps = {
    componentName: "Education",
};
export default Education;
