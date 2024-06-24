import React from "react";

const Voxel = () => {
    return (
        <article className="voxelSection" id="VoxelReset">
            <h1>Voxel Reset</h1>
            <hr />
            <br />
            <p>
                <strong>Voxel Reset</strong>
            </p>
            <p>
                Planets and asteroids are reset every Friday automatically at 11:55 CET. The
                asteroid reset will only reset voxels that do not have grids near it.
            </p>{" "}
            <p>
                <strong>Asteroid Reset</strong>
            </p>
            <p>
                The asteroid wipe means that all asteroids are deleted and replaced by new ones. It
                is scheduled to happen every 10th of the month, every month. If you have grid(s)
                attached to asteroids, prepare them to move them when the time is right: thrusters,
                gyros, power, hydrogen... This will happen every month, so keep it in mind if you
                want to attach your grid(s) to asteroids again.
            </p>
        </article>
    );
};

export default Voxel;
