import React, { Component } from 'react';
// import { Carousel } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'


const checkType = (data) => {
    if (data.description) { return <p>{data.description}</p> }
    else if (data.list) {
        return (
            <ul>
                {data.list.map((listItem) => <li>{listItem}</li>)}
            </ul>
        )
    }
    else if (data.influences) {

        return (

            < div className='influences-div' >
                {
                    data.influences.map(
                        (influencer) =>
                                <div className="influencer">
                                    <div className='influencer-content'>
                                        <div className='influencer-top'>
                                            <div className="influencer-img">
                                                <a href={influencer.urlRedirect} target="_blank"><img src={influencer.imgUrl} alt={`Image of ${influencer.name}`} title={`More on ${influencer.name}`} /></a>
                                            </div>
                                            <h2>{influencer.name}</h2>
                                        </div>
                                        <div className='influencer-bottom'>
                                            <p>{influencer.briefDescription}</p>
                                        </div>
                                    </div>
                                </div>
                    )
                }
            </div >
        )
    }
}

function AboutSection(props) {
    return (<section className="aboutsection">
        <h1 className="aboutsection-title">{props.data.title}</h1>
        <div className="aboutsection-data">
            {checkType(props.data)}
        </div>
    </section>);
}

function influencesCarousel(data) {
    return (
        <Carousel>
            {data.map((influencer) =>
                <Carousel.Item>
                    <div className="influencer">
                        <div className='influencer-content'>
                            <div className='influencer-top'>
                                <div className="influencer-img">
                                    <a href={influencer.urlRedirect} target="_blank"><img src={influencer.imgUrl} alt={`Image of ${influencer.name}`} title={`More on ${influencer.name}`} /></a>
                                </div>
                                <h2>{influencer.name}</h2>
                            </div>
                            <div className='influencer-bottom'>
                                <p>{influencer.briefDescription}</p>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
            )}
        </Carousel>
    )

}

export default AboutSection;
