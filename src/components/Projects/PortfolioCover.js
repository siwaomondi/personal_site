import React, { lazy } from "react";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom'
const PortfolioCover = (props) => {
    const linkAddress =`portfolio/architecture`
    const data = props.data
    const bgImage = `url(${data.coverImage})`;

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
                        <span className="port-title">{data.projectTitle}</span>
                    </a>
                </div>
            </Link>
        </>
    );
};

// PortfolioCover.defaultProps = {
//     data:        {
//         id: 1,
//         projectTitle: "INTERIOR",
//         coverImage:"url(/images/1.png)",
//     },
// };

export default PortfolioCover;
