import React from "react";

const OreHead = () => {
    return (
        <article className="locationHead">
            <h1 className="h1Heading">Ores & Ingots</h1>
            <hr />
            <p>
                There are 14 different ores to mine at Upside Down and so it can, at times, be
                difficult to remember how much ore equals x amounts of ingots. To help answer this
                common question from our players, we decided to create an ore to ingot calculator.{" "}
                <br />
                <br />
                Select the ore of interest. Note that stone, ice, and scrap metal cannot be
                selected. Stone gives small amounts of multiple ingots, ice is used for oxygen and
                hydrogen, and scrap metal is not usually refined in mass.
                <br />
                <br />
                Select the number of module points. Each refinery has the capacity for four modules,
                each module has two module points. With this information, we know that one yield
                module can be connected to two refineries. To accommodate any possible yield module
                setup, select the desired amount. Or select zero incases you want to calculate
                without any modules. Type any number and press the button to see the result in
                ingots. We hope this information will help you better calculate how much you need to
                mine to keep that safe zone going.
                <br />
            </p>
        </article>
    );
};

export default OreHead;
