import React from "react";

const RenamingGrids = () => {
    return (
        <article className="renamingSection" id="RenamingGrids">
            <h1>Renaming Grids </h1>
            <hr />
            <br />
            <p>
                <strong>Respawn ships</strong> dissappear when you log out from the server. Grind it
                down and build a base or ship. You need to rename your grid to
                FactionTag.GridPurpose in the info tab. Example: ADM.Miner1
            </p>
            <br />
            <p>
                If you split a grid in two, only the bigger one keeps the name, meaning you will
                have to rename the small grid again. Your base might be out of power, or someone
                raided it. Type !grids list in chat to check if your grids are still there. If you
                are away for more than a week without reporting your absence on the server your
                grids will be saved to the hangar.
            </p>
            <br />
        </article>
    );
};

export default RenamingGrids;
