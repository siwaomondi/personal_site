import React, { lazy } from "react";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom'
const PortfolioCover = (props) => {
    const bgImage = props.backgroundImage;
    const linkAddress =`portfolio/${props.address}`

    return (
        <>
            <Link to={linkAddress} style={{textDecoration:"none" , cursor: 'pointer'}}>
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
            </Link>
        </>
    );
};

PortfolioCover.defaultProps = {
    backgroundImage: "url(/images/1.png)",
    address:"project1"
};

export default PortfolioCover;
