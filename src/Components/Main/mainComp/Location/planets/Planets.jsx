import React from "react";
import CelestialBodies from "../CelestialBodies/CelestialBodies";
import earth from "../../../../../assets/pics/plnt.png";
import Thora from "../../../../../assets/pics/Thora.png";
import Triton from "../../../../../assets/pics/triton.png";
import tritonBg from "../../../../../assets/pics/tritonBg.png";
import thoraBg from "../../../../../assets/pics/thoraBg.png";
import drk from "../../../../../assets/pics/drk.png";

const planetsData = [
    {
        bgImg: drk,
        bodyImg: earth,
        bodyName: "Earth",
        textParagraph:
            "The classical planet Earth is a rocky terrestrial. Its surface contains mountains, valleys, canyons, and plains. There are three biomes tundra, desert, and grassland.",
        gravityDes: "Gravity: 1.0 g = 9.8m/s2",
        altitudeDes: "Max Altitude with gravity: 42.860 m",
    },
    {
        bgImg: thoraBg,
        bodyImg: Thora,
        bodyName: "Thora",
        textParagraph:
            "Thorium is needed to make Thorium Fuel Cells, Quantum Computers, and Zone Chips. It is available in small amounts on the planet Thora.",
        gravityDes: "Gravity: 1.4",
        altitudeDes: "Max Altitude with gravity: ? m",
    },
    {
        bgImg: tritonBg,
        bodyImg: Triton,
        bodyName: "Triton",
        textParagraph:
            "Snow and ice are abundant making it ideal for hydrogen-based spacecraft. The planet consists of ice lakes, rolling snow plains, and snowy mountains, making it ideal for most types of rovers and VTOLs.",
        gravityDes: "Gravity: 1.0 g = 9.8m/s2",
        altitudeDes: "Max Altitude with gravity: 36.000 m",
    },
];

const Planets = () => {
    return <CelestialBodies data={planetsData} title="Planets" />;
    // <CelestialBodies />;
};

export default Planets;
