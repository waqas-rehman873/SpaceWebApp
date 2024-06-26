import React from "react";
import LocationHead from "./locationHeader/LocationHead.jsx";
import Planets from "./planets/Planets.jsx";
import Moons from "./moons/Moons.jsx";
import Asteroids from "./Asteroids/Asteroids.jsx";
import Stations from "./stations/Stations.jsx";
const MainLocation = () => {
    return (
        <main className="bgSection">
            <section className="secondScreenBox">
                <LocationHead />
                <Planets />
                <Moons />
                <Asteroids />
                <Stations />
            </section>
        </main>
    );
};

export default MainLocation;
