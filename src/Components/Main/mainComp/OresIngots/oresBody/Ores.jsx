import React from "react";
import CustomPart from "./customPart/CustomPart";
import cobalt from "../../../../../assets/pics/cobalt.png";
import Scrap from "../../../../../assets/pics/scrapMetal.png";
import Nickel from "../../../../../assets/pics/Nickel.png";
import Gold from "../../../../../assets/pics/Gold.png";
import Ice from "../../../../../assets/pics/Ice.png";
import Iron from "../../../../../assets/pics/Iron.png";
import Magnesium from "../../../../../assets/pics/Magnesium.png";
import Platinum from "../../../../../assets/pics/Platinum.png";
import Silicon from "../../../../../assets/pics/Silicon.png";
import Silver from "../../../../../assets/pics/Silver.png";
import Stone from "../../../../../assets/pics/Stone.png";
import Thorium from "../../../../../assets/pics/Thorium.png";
import Titanium1 from "../../../../../assets/pics/Titanium1.png";
import Uranium from "../../../../../assets/pics/Uranium.png";

const Ores = () => {
    const customData = [
        {
            img: cobalt,
            h1Heading: "Cobalt",
            paraBody1: "Planets & asteroids",
            paraBody2: "1 ingot per 3,333kg ore",
            paraBody3: "1kg",
            paraBody4: "0.37L",
        },
        {
            img: Gold,
            h1Heading: "Gold",
            paraBody1: "Planets & asteroids",
            paraBody2: "1 ingot per 100kg ore",
            paraBody3: "1kg",
            paraBody4: "0.37L",
        },
        {
            img: Ice,
            h1Heading: "Ice",
            paraBody1: "Planets & asteroids",
            paraBody2: "Ice returns Hydrogen & Oxygen only",
            paraBody3: "1kg",
            paraBody4: "0.37L",
        },
        {
            img: Iron,
            h1Heading: "Iron",
            paraBody1: "Planets & asteroids",
            paraBody2: "1 ingot per 100kg ore",
            paraBody3: "1kg",
            paraBody4: "0.37L",
        },
        {
            img: Magnesium,
            h1Heading: "Magnesium",
            paraBody1: "Planets & asteroids",
            paraBody2: "1 ingot per 143kg ore",
            paraBody3: "1kg",
            paraBody4: "0.37L",
        },
        {
            img: Nickel,
            h1Heading: "Nickel",
            paraBody1: "Planets & asteroids",
            paraBody2: "1 ingot per 2,5kg ore",
            paraBody3: "1kg",
            paraBody4: "0.37L",
        },
        {
            img: Platinum,
            h1Heading: "Platinum",
            paraBody1: "Asteroids",
            paraBody2: "1 ingot per 200kg ore",
            paraBody3: "1kg",
            paraBody4: "0.37L",
        },
        {
            img: Scrap,
            h1Heading: "Scrap Metal",
            paraBody1: " Drilling on grids, is aka ships or stations",
            paraBody2: "1 ingots per 1,25kg scrap metal",
            paraBody3: "1kg",
            paraBody4: "0.25L",
        },
        {
            img: Silicon,
            h1Heading: "Silicon",
            paraBody1: "Planets & asteroids",
            paraBody2: "1 ingot per 1,43kg ore",
            paraBody3: "1kg",
            paraBody4: "0.37L",
        },
        {
            img: Silver,
            h1Heading: "Silver",
            paraBody1: "Planets & Asteroids",
            paraBody2: "1 ingot per 10kg ore",
            paraBody3: "1kg",
            paraBody4: "0.37L",
        },
        {
            img: Stone,
            h1Heading: "Stone",
            paraBody1: "Planets & asteroids",
            paraBody2: "Not calculated as it gives multiple ores",
            paraBody3: "1kg",
            paraBody4: "0.37L",
        },
        {
            img: Thorium,
            h1Heading: "Thorium",
            paraBody1: "Planet Thora & the Thorium Asteroid",
            paraBody2: "1 ingot per 12.500kg ore",
            paraBody3: "50kg",
            paraBody4: "250L",
        },
        {
            img: Titanium1,
            h1Heading: "Titanium",
            paraBody1: "The Core",
            paraBody2: "1 ingots per 1,25kg scrap metal",
            paraBody3: "50kg",
            paraBody4: "250L",
        },
        {
            img: Uranium,
            h1Heading: "Uranium",
            paraBody1: "Asteroids",
            paraBody2: "1 ingot per 100kg ore",
            paraBody3: "1kg",
            paraBody4: "0.37L",
        },
    ];
    return (
        <section className="OresSection ">
            {customData.map((data, index) => (
                <CustomPart key={index} {...data} />
            ))}
        </section>
    );
};

export default Ores;
