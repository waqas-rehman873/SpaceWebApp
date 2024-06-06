import React from "react";
import { Link } from "react-router-dom";

const MainNav = () => {
    return (
        <section className="mainNav">
            <ul>
                <li>
                    <Link to="/GridConverter">Grid Converter </Link>
                </li>
                <li>
                    <Link to="/Locations">Locations </Link>
                </li>
                <li>
                    <Link to="/Lore">Lore </Link>
                </li>{" "}
                <li>
                    <Link to="/Ores&Ingots">Ores & Ingots </Link>
                </li>{" "}
                <li>
                    <Link to="/Rules">Rules </Link>
                </li>{" "}
                <li>
                    <Link to="/Videos">Videos </Link>
                </li>{" "}
            </ul>
        </section>
    );
};

export default MainNav;
