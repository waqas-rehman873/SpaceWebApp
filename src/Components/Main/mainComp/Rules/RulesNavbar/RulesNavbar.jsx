import React from "react";
import { Link } from "react-router-dom";

const RulesNavbar = () => {
    return (
        <ul className="rulesNav">
            <li>
                <Link to="/guide/Rules/#BlocksPCU">Blocks & PCU</Link>
            </li>
            <li>
                <Link to="/guide/Rules/#BuildingLimits">Building Limits</Link>
            </li>
            <li>
                <Link to="/guide/Rules/#Commands">Commands</Link>
            </li>
            <li>
                <Link to="/guide/Rules/#RenamingGrids">Renaming Grids</Link>
            </li>
            <li>
                <Link to="/guide/Rules/#Rules">Rules</Link>
            </li>
            <li>
                <Link to="/guide/Rules/#PerformanceGuide">Performance Guide</Link>
            </li>
            <li>
                <Link to="/guide/Rules/#ServerRestart">Server Restart</Link>
            </li>
            <li>
                <Link to="/guide/Rules/#VoxelReset">Voxel Reset</Link>
            </li>
        </ul>
    );
};

export default RulesNavbar;
