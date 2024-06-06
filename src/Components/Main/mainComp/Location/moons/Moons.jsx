import React from "react";
import CelestialBodies from "../CelestialBodies/CelestialBodies";
import moonImg from "../../../../../assets/pics/moon.png";
import moonBg from "../../../../../assets/pics/moonBg.png";
import moonBg2 from "../../../../../assets/pics/moonBg2.png";
import moonImg2 from "../../../../../assets/pics/moon2.png";

const moonsData = [
    {
        bgImg: moonBg,
        bodyImg: moonImg,
        bodyName: "Moon",
        textParagraph:
            "The Moon is Earth's only natural satellite. It is rocky and has a surface covered with craters, mountains, and valleys.",
        gravityDes: "Gravity: 1.0 g = 9.8m/s2",
        altitudeDes: "Max Altitude with gravity: 36.000",
    },
    {
        bgImg: moonBg2,
        bodyImg: moonImg2,
        bodyName: "Europe",
        textParagraph: "The smallest moon, consisting entirely of ice.",
        gravityDes: "Gravity: 1.0 g = 9.8m/s2",
        altitudeDes: "Max Altitude with gravity: 36.000",
    },
];

const Moons = () => {
    return <CelestialBodies data={moonsData} title="Moons" />;
};

export default Moons;
