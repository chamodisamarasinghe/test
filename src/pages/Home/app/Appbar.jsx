import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../main.css";
import InputBase from "@material-ui/core/InputBase";


function Appbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    return (
        <header>
            <h3>Projects</h3>
            <nav ref={navRef}>
                <a href="/#">Adam's team</a>
                {/*<a href="/#">Week</a>*/}
                {/*<a href="/#">Month</a>*/}
                {/*<a href="/#">Year</a>*/}
                <InputBase style={{color:"white"}}
                           placeholder="Search…"
                           classes={{

                           }}
                           inputProps={{ 'aria-label': 'search' }}
                />
                <button
                    className="nav-btn nav-close-btn"
                    onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
}

export default Appbar;