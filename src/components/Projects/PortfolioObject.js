import React, { lazy } from "react";

const PortfolioCover = (props) => {
    const bgImage = props.backgroundImage;

    return (
        <>
            <div
                className="port-category-cover"
                style={{
                    backgroundImage: bgImage,
                }}
            >
                <a className="port-link">
                    <span className="port-title">Interior</span>
                </a>
            </div>
        </>
    );
};

PortfolioCover.defaultProps = {
    backgroundImage: "url(/images/1.png)",
};

export default PortfolioCover;
