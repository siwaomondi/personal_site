import React, { Component } from "react";
import './css/ResumeObject.css'

class ResumeObject extends Component {
    render() {
        return (
            <div className="ResumeObject">
                <h1 className="ResumeObject-title">{this.props.componentName}</h1>
                <div className="ResumeObject-container">
                    {this.props.object}
                </div>
            </div>
        )
    }
}
export default ResumeObject
