import React from "react";
import VanillaTilt from "react-vanilla-tilt";

const CustomPart = ({ img, h1Heading, paraBody1, paraBody2, paraBody3, paraBody4 }) => {
    return (
        <VanillaTilt
            className="Ores"
            options={{
                max: 60,
                speed: 1000,
                glare: true,
                "max-glare": 0.9,
                perspective: 1000,
                axis: true,
                easing: "cubic-bezier(.03,.98,.52,.99)",
                transition: true,
            }}
            style={{
                willChange: "transform",
                transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
            }}
        >
            <figure>
                <img src={img} alt="loading.." />
            </figure>
            <div className="subOresPart">
                <h1>{h1Heading}</h1>
                <div className="detailsPart">
                    <div className="row">
                        <b>Spot: </b>
                        <span>{paraBody1}</span>
                    </div>
                    <div className="row">
                        <b>Ingots: </b>
                        <span>{paraBody2}</span>
                    </div>
                    <div className="row">
                        <b>Mass:</b>
                        <span>{paraBody3}</span>
                    </div>
                    <div className="row">
                        <b>Volume: </b>
                        <span>{paraBody4}</span>
                    </div>
                </div>
            </div>
        </VanillaTilt>
    );
};

export default CustomPart;
