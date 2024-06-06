import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import logo from "../../assets/pics/logo.png";

const Navbar = () => {
    return (
        <nav className="navComp">
            <div className="logoNav">
                <Link to="/">
                    <figure>
                        <img src={logo} alt="logo-a" />
                    </figure>
                    <h3>upside</h3>
                    down
                </Link>
            </div>
            <button className="screenBtn">Online</button>
            <div className="navLinks">
                <button className="wideScreenBtn">Online</button>
                <Link to="/vote">Vote</Link>
                <Link to="/play">Play</Link>
                <Link to="/donate">Donate</Link>
                <Link to="/guide">Guide</Link>
                <Link to="/home">Home</Link>
            </div>
        </nav>
    );
};

export default Navbar;
