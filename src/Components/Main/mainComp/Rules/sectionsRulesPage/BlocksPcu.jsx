import React from "react";

const BlocksPcu = () => {
    return (
        <article id="BlocksPCU" className="blocksPcu">
            <h1>Blocks & PCU</h1>
            <hr />
            <br />
            <strong>Blocks</strong> <br />
            <p>
                Buildable items in the Space Engineers are called <b>blocks</b>. Every item built is
                equal to 1 block no matter if it is a door, a thruster, or a reactor. Different
                blocks affect server performance differently. The performance impact of these blocks
                is measured in <b>PCU</b> (Performance Cost Unit).
            </p>
            <strong>PCU</strong> <br />
            <p>
                Blocks affects server performance differently and so they have different{" "}
                <b>PCU values</b>.where higher values equals higher performance impact.
                <b>UD applies limitations to players and grids</b>.
            </p>
        </article>
    );
};

export default BlocksPcu;
