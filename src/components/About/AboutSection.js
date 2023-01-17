import React, {} from "react";

const checkType = (data) => {
    if (data.description) {
        return <p>{data.description}</p>;
    } else if (data.list) {
        return (
            <ul>
                {data.list.map((listItem) => (
                    <li>{listItem}</li>
                ))}
            </ul>
        );
    } else if (data.influences) {
        return (
            <div className="influences-div .comp-s-div">
                {data.influences.map((influencer) => (
                    <div className="influencer">
                        <div className="influencer-content">
                            <div className="influencer-top">
                                <div className="influencer-img">
                                    <a href={influencer.urlRedirect}>
                                        <img
                                            src={influencer.imgUrl}
                                            alt={`Image of ${influencer.name}`}
                                            title={`More on ${influencer.name}`}
                                        />
                                    </a>
                                </div>
                                <h2>{influencer.name}</h2>
                            </div>
                            <div className="influencer-bottom">
                                <span>{influencer.briefDescription}</span>
                                <span className="quote">{influencer.quote}</span>
                            </div>
                            
                        </div>
                    </div>
                ))}
            </div>
        );
    }
};

function AboutSection(props) {
    let type = props.data.title === "Influences"? ["full","title" ]: [""]
    return (
        <article className={`aboutsection ${type[0]}`}>
            <div className={`aboutsection-title ${type[1]}`}>{props.data.title}</div>
            <div className="aboutsection-data">{checkType(props.data)}</div>
        </article>
    );
}

export default AboutSection;
