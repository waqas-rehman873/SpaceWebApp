import React from "react";
import CelestialBodies from "../CelestialBodies/CelestialBodies";
import station1 from "../../../../../assets/pics/station1.png";
import station2Bg from "../../../../../assets/pics/station2Bg.png";
import station2 from "../../../../../assets/pics/station2.png";
import station3Bg from "../../../../../assets/pics/station3Bg.png";
import station3 from "../../../../../assets/pics/station3.png";
// import station4Bg from "../../../../../assets/pics/station2Bg.png";
import station4 from "../../../../../assets/pics/station4.png";
import station5Bg from "../../../../../assets/pics/station5Bg.png";
import station5 from "../../../../../assets/pics/station5.png";

const Stations = () => {
    const stationsData = [
        {
            bgImg: station1,
            bodyName: "Refining Station",
            textParagraph:
                "The Refining Station refines ores at high speed and with an unprecedented 300% yield - much more than you can get with your refineries. This is perfect for refining thorium or any other ore you may want. It is located at the surface of the earth-moon. This is not a safe zone.",
            gravityDes: "GPS:ICP Refining Station:19338.03:127687.5:-115883.63#FFF19475",
        },
        {
            bgImg: station2Bg,
            bodyImg: station2,
            bodyName: "Sabaton Station",
            textParagraph:
                "On Sabaton Station you can collect small amounts of free thorium and uranium ingots. It is located in space above the Refining station.",
            gravityDes: "GPS:ICP Refining Station:19338.03:127687.5:-115883.63#FFF19475",
        },
        {
            bgImg: station3Bg,
            bodyImg: station3,
            bodyName: "Trading Station",
            textParagraph:
                "On ICP's Trading Station you can exchange ingots using the patented Z-Trade system with prices varying based on supply and demand. This is a safe zone.",
            gravityDes: "GPS:40.7128° N, 74.0060° W",
        },
        {
            bgImg: station4,
            // bodyImg: statiosn4,
            bodyName: "Thorium Station",
            textParagraph:
                "The Thorium Outpost is located on the surface of earth. When activated by a player, it will slowly produce thorium ingots that anyone nearby can grab. This is a perfect place to get thorium early-game. Not a safe zone for players.",
            gravityDes: "GPS:TorchThoriumOutpost:-58850.74:-5964.11",
        },
        {
            bgImg: station5Bg,
            bodyImg: station5,
            bodyName: "Info Station",
            textParagraph:
                "On the info station you can easily read the rules of the server, meet up with others and claim bonus rewards from voting and events. This is a safe zone.",
            gravityDes: "GPS:TorchInfoStation:-21589.38:78366.37:34841.18",
        },
    ];

    return (
        <section className="stations">
            <CelestialBodies data={stationsData} title="Stations" isStation />
        </section>
    );
};

export default Stations;
