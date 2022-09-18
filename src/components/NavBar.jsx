import React, { Component } from "react";
import './css/NavBar.css'
import { Link } from 'react-router-dom'


const NavBar = (props) => {
    return ( 
        <nav className="NavBar">
                <div className="NavBar-header">
                    <Link to="/"><h1>SIWA OMONDI</h1></Link>
                    <div>
                        <ul>
                            <li>
                                <Link to="/about"><a>About</a></Link>
                            </li>
                            <li>
                                <Link to="/resume"><a>Resume</a></Link>
                            </li>
                            <li>
                                <Link to="/projects"><a>Projects</a></Link>
                            </li>
                            <li>
                                <Link to="/contacts"><a>Contact Me</a></Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
     );
}

export default NavBar;
