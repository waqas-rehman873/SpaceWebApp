import React from "react";
import CelestialBodyInfo from "./CelestialBodyInfo/CelestialBodyInfo";

const CelestialBodies = ({ data, title, isStation }) => {
    return (
        <section className="celestialBodies">
            <h1 className="h1Planets">{title}</h1>
            {data.map((body, index) => (
                <CelestialBodyInfo
                    key={index}
                    bgImg={body.bgImg}
                    bodyImg={body.bodyImg}
                    bodyName={body.bodyName}
                    textParagraph={body.textParagraph}
                    gravityDes={body.gravityDes}
                    altitudeDes={body.altitudeDes}
                    isStation={isStation}
                />
            ))}
        </section>
    );
};

export default CelestialBodies;
