import React, {} from "react";
// import './css/ResumeObject.css'

const ResumeObject = (props) => {
    return (
        <div className="ResumeObject">
            <h1 className="ResumeObject-title">{props.componentName}</h1>
            <div className="ResumeObject-container">{props.object}</div>
        </div>
    );
};

export default ResumeObject;
