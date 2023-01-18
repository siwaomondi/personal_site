import React, { } from "react";
// import './css/NavBar.css'
import { HashLink } from "react-router-hash-link";

const NavBar = (props) => {
    return ( 
        <nav className="NavBar">
                <div className="NavBar-header">
                    <HashLink to="#"><h1>SIWA OMONDI</h1></HashLink>
                    <div>
                        <ul>
                            <li>
                                <HashLink to="#about" smooth>About</HashLink>
                            </li>
                            <li>
                                <HashLink to="#resume" smooth>Resume</HashLink>
                            </li>
                            <li>
                                <HashLink to="#portfolio" smooth>Portfolio</HashLink>
                            </li>
                            <li>
                                <HashLink to="#contactMe" smooth>Contact Me</HashLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
     );
}

export default NavBar;
