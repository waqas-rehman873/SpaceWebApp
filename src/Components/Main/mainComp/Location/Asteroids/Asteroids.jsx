import React from "react";
import CelestialBodies from "../CelestialBodies/CelestialBodies";
import asteroidsBg from "../../../../../assets/pics/asteroids.png";
import asteroidsImg from "../../../../../assets/pics/asteroidsBg.png";
import TitaniumBg from "../../../../../assets/pics/TitaniumBg.png";
import Titanium from "../../../../../assets/pics/Titanium.png";

const Asteroids = () => {
    const asteroidsData = [
        {
            bgImg: asteroidsImg,
            bodyImg: asteroidsBg,
            bodyName: "Thorium Asteroid",
            textParagraph:
                "A thorium asteroid regularly spawns in with 3x the yield of the Thorium found on the surface of Thora - this is where the big money is.",
        },
        {
            bgImg: TitaniumBg,
            bodyImg: Titanium,
            bodyName: "Titanium Asteroid",
            textParagraph:
                "This asteroid will allow you to mine Titanium ore and will refine it in Titanium ingots. These ingots are used mainly for MK10 techs such as solar panels, cargo blocks, and other future blocks. Guarded by NPC.",
        },
    ];
    return <CelestialBodies data={asteroidsData} title="Asteroids" />;
};

export default Asteroids;
