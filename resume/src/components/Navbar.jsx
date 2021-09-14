import React from "react";
import './Navbar.css';
const Navbar = (props) => {
    return ( 
        <nav className="navbar">
            <div className="container-fluid">
                <a className="navLogo" href="/">RESUME</a>
                {/* <span><img src={props.logo} alt="logo" /></span> */}
                <ul className="navItems">
                    <li><a href="/">Contact Me</a></li>
                    {/* <li><a href="/">Education</a></li>
                    <li><a href="/">Skills</a></li>
                    <li><a href="/">Projects</a></li> */}
                </ul>
            </div>
        </nav>
    );
}
 
export default Navbar;