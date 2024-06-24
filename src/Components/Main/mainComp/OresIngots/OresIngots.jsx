import React from "react";
import OreHead from "./OresHead/OreHead";
import Calculation from "./calculationSection/Calculation";
import Ores from "./oresBody/Ores";

const OresIngots = () => {
    return (
        <main className="bgSection">
            <section className="secondScreenBox">
                <OreHead />
                <Calculation />
                <Ores />
            </section>
        </main>
    );
};

export default OresIngots;
