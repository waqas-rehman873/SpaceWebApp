import React from "react";

const BuildingLimits = () => {
    return (
        <article className="buildingLimits" id="BuildingLimits">
            <h1>Building Limits</h1>
            <hr />
            <br />
            <strong>Why limitations?</strong>
            <br />
            <p>
                Limitations are implemented to maintain a balance between server performance and the
                player's creativity. There are limits to what each player can build in total aswell
                as how much each grid can contain. Limits stated as “OR” with two similar blocks
                mean that you can only build the stated amount of blocks in total.
            </p>
            <br />
            <strong>Example:</strong>
            <p>
                The limit for Oxygen Tanks OR Hydrogen Tanks is stated as 8 blocks. This means you
                can build 2 oxygen tanks and 6 hydrogen tanks, 3 oxygen and 5 hydrogen and so on -
                the total number of tanks equates to 8.
            </p>
            <br />
            <br />
            <p>
                Exceeding those limits will result in a warning, then removal of the concerned grids
                or blocks.
            </p>
            <section className="info">
                <div>
                    <p>
                        <strong>Player limit:</strong>
                    </p>
                    <p>Blocks: 30.000</p>
                    <p>PCU: 40.000</p>
                    <hr />
                    <p>
                        <strong>Production</strong>
                    </p>
                    <ul className="ulOrder">
                        <li>Assembler and Ammunition Factory: 8</li>
                        <li>Refinery: 8</li>
                        <li>Basic Refinery: 4</li>
                        <li>Stone Crusher: 4</li>
                    </ul>
                    <hr />
                    <p>
                        <strong>Tools</strong>
                    </p>
                    <ul className="ulOrder">
                        <li>Welder: 21</li>
                        <li>Grinder: 21</li>
                        <li>Drill: 15 of each tier</li>
                        <li>NWPCS-Casing: 1</li>
                    </ul>
                    <hr />{" "}
                    <p>
                        <strong>Weapons</strong>
                    </p>
                    <p>
                        <strong>Vanilla turrets</strong>
                    </p>
                    <ul className="ulOrder">
                        <li>Interior Turret: 25</li>
                        <li>Gatling Turret: 25</li>
                        <li>Missile Turret: 25</li>
                    </ul>
                    <br />
                    <br />
                    <p>
                        <strong>Cannons</strong>
                    </p>
                    <ul className="ulOrder">
                        <li>Encased 300mm Crossbow: 12</li>
                        <li>300mm Archer: 18</li>
                        <li>2x300mm Longbow: 12</li>
                        <li>3x300mm Ballista: 8</li>
                        <br />
                        <li>Encased 900mm Elephant: 6</li>
                        <li>900mm Rhino: 12</li>
                        <li>2x900mm Mammoth: 8</li>
                        <li>3x900mm Mastodon: 4</li>
                        <br />
                        <p>Plasma Turret: 6</p>
                        <br />
                    </ul>
                    <p>
                        <strong>Fixed Weapons</strong>
                    </p>
                    <ul className="ulOrder">
                        <li>Little David Junior: 6</li>
                        <li>Little David: 6</li>
                        <li>Plasma Battery: 6</li>
                        <li>Rocket Launcher: ∞</li>
                    </ul>
                    <br />
                    <hr />
                    <p>
                        <strong>Misc</strong>
                    </p>
                    <ul className="ulOrder">
                        <li>Battery: 15</li>
                        <li>Program Block: 4</li>
                        <li>Projector: 2</li>
                        <li>Timer Block: 4</li>
                        <li>Sensor: 8</li>
                        <li>Remote Control: 2</li>
                        <li>Hydrogen Engine: 4</li>
                        <li>Safe Zone: 1</li>
                        <li>Oxygen / Hydrogen Tank: ∞</li>
                        <li>Pistons: 4</li>
                        <li>Rotors: 4</li>
                        <li>Advanced Rotors: 4</li>
                        <li>Gravity Generators: 6</li>
                        <li>Large Hydrogen/Ion Thrusters: ∞</li>
                        <li>Small Hydrogen/Ion Thrusters: ∞</li>
                        <li>Gravity Mass Blocks Large/Small: ∞</li>
                    </ul>
                    <hr />
                </div>
                <div>
                    <p>
                        <strong>Grid limit:</strong>
                    </p>

                    <p>Blocks: 10.500</p>
                    <p>PCU: 40.000</p>
                    <hr />
                    <p>
                        <strong>Production</strong>
                    </p>
                    <ul className="ulOrder">
                        <li>Assembler and Ammunition Factory: 8</li>
                        <li>Refinery: 8</li>
                        <li>Basic Refinery: 4</li>
                        <li>Stone Crusher: 4</li>
                    </ul>
                    <hr />
                    <p>
                        <strong>Tools</strong>
                    </p>
                    <ul className="ulOrder">
                        <li>Welder: 21</li>
                        <li>Grinder: 21</li>
                        <li>Drill: 15 </li>
                        <li>NWPCS-Casing: ∞</li>
                    </ul>
                    <hr />
                    <p>
                        <strong>Weapons</strong>
                    </p>
                    <p>
                        <strong>Vanilla turrets</strong>
                    </p>
                    <ul className="ulOrder">
                        <li>Interior Turret: 25</li>
                        <li>Gatling Turret: 25</li>
                        <li>Missile Turret: 25</li>
                    </ul>
                    <br />
                    <br />
                    <p>
                        <strong>Cannons</strong>
                    </p>
                    <ul className="ulOrder">
                        <li>Encased 300mm Crossbow: 12</li>
                        <li>300mm Archer: 18</li>
                        <li>2x300mm Longbow: 12</li>
                        <li>3x300mm Ballista: 8</li>
                        <br />
                        <li>Encased 900mm Elephant: 6</li>
                        <li>900mm Rhino: 12</li>
                        <li>2x900mm Mammoth: 8</li>
                        <li>3x900mm Mastodon: 4</li>
                        <br />
                        <p>Plasma Turret: 6</p>
                        <br />
                    </ul>
                    <p>
                        <strong>Fixed Weapons</strong>
                    </p>
                    <ul className="ulOrder">
                        <li>Little David Junior: 6</li>
                        <li>Little David: 6</li>
                        <li>Plasma Battery: 6</li>
                        <li>Rocket Launcher: 10</li>
                    </ul>
                    <br />
                    <hr />
                    <p>
                        <strong>Misc</strong>
                    </p>
                    <ul className="ulOrder">
                        <li>Battery: 15</li>
                        <li>Program Block: 2</li>
                        <li>Projector: 1</li>
                        <li>Timer Block: 4</li>
                        <li>Sensor: ∞</li>
                        <li>Remote Control: ∞</li>
                        <li>Hydrogen Engine: 4</li>
                        <li>Safe Zone: ∞</li>
                        <li>Oxygen / Hydrogen Tank: 8</li>
                        <li>Pistons: ∞</li>
                        <li>Rotors: ∞</li>
                        <li>Advanced Rotors: ∞</li>
                        <li>Gravity Generators: 6</li>
                        <li>Large Hydrogen/Ion Thrusters: 75</li>
                        <li>Small Hydrogen/Ion Thrusters: 120</li>
                        <li>Gravity Mass Blocks Large/Small:20</li>
                    </ul>
                    <hr />
                </div>
            </section>
        </article>
    );
};

export default BuildingLimits;
