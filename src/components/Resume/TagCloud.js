import TagCloud from "TagCloud";
import React, { Component, useEffect } from "react";
import "./css/Skills.css";

const SkillsTag = () => {
    useEffect(() => {
        const container = ".tagcloud";
        let radii;
        const texts = [
            "HTML",
            "CSS",
            "SASS",
            "JavaScript",
            "React",
            "Vue",
            "Nuxt",
            "NodeJS",
            "Shopify",
            "Jquery",
            "ES6",
            "GIT",
            "GITHUB",
        ];

        function radiusValue() {
            if (window.screen.width <= 778) {
                radii = 150;
            } else {
                radii = 290;
            }
            return radii;
        }

        const options = {
            radius: radiusValue(),
            maxSpeed: "normal",
            initSpeed: "normal",
            keep: true,
        };

        TagCloud(container, texts, options);
    }, []);
    return (
        <>
            <div className="text-sphere">
                <span className="tagcloud"></span>
            </div>
        </>
    );
};

export default SkillsTag;
