import React, { Component } from "react";
import './css/Experience.css'

class Experience extends Component {
    static defaultProps = {
        componentName:"Experience"
    }
    render() {
        const experiencesList = this.props.experiencesList
        const experiences = experiencesList.map((e) =>
            <article className="Experience-container">
                <header className="Experience-company">
                    <h4><a href={e.companywebsite} target="_blank">{e.company}</a> - {e.position}</h4>
                    <p className="Experience-period">{e.period}</p>
                </header>
                <ul className="Experience-responsibilities">
                    {e.duties.map(duty => <li>{duty}</li>)}
                </ul>
            </article>
        )
        return (
            <div className="Experience">
                {experiences}
            </div>
        )
    }
}


export default Experience