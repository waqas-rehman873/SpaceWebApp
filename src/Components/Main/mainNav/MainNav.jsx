import React from "react";
import { Link } from "react-router-dom";

const MainNav = () => {
    return (
        <section className="mainNav">
            <ul className="mainNavUl">
                <li>
                    <Link to="/guide/GridConverter">Grid Converter </Link>
                </li>
                <li>
                    <Link to="/guide/location">Locations </Link>
                </li>
                <li>
                    <Link to="/guide/Lore">Lore </Link>
                </li>
                <li>
                    <Link to="/guide/oresIngots">Ores & Ingots </Link>
                </li>
                <li>
                    <Link to="/guide/Rules">Rules </Link>
                </li>
                <li>
                    <Link to="/guide/Videos">Videos </Link>
                </li>
            </ul>
        </section>
    );
};

export default MainNav;
