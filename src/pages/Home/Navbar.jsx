import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Home/main.css";
import InputBase from "@material-ui/core/InputBase";

const cal = new URL("../../assets/images/cal.png",import.meta.url)
const user = new URL("../../assets/images/user.png",import.meta.url)
function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    return (
        <header>

            <img src={cal} style={{ position:"relative",top:5, left:20,height:30,width:30}}/>
            <h3>Date</h3>
            <nav ref={navRef}>
                <a href="/#">Day</a>
                <a href="/#">Week</a>
                <a href="/#">Month</a>
                <a href="/#">Year</a>

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

export default Navbar;