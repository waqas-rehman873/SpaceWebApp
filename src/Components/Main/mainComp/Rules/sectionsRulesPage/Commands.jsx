import React from "react";

const Commands = () => {
    const commands = [
        { command: "!hangar save", description: "Saves the grid to the hangar." },
        { command: "!hangar list", description: "Check currently saved grids in the hangar." },
        { command: "!hangar remove", description: "Remove a grid from the hangar." },
        { command: "!hangar load (1-6)", description: " - Load the desired grid." },
        { command: "!hangar help", description: " - Read about the hangar commands." },
        {
            command: "!fixship ",
            description: "Reload the ship, type it twice while looking at the grid.",
        },
        { command: "!fixme", description: "- Kills your character and lets you respawn." },
        { command: "!entities refresh", description: "- Reloads any grids within sync range." },
        {
            command: "!convert",
            description:
                "- Convert the grid to a station in 0 gravity, type it while looking at grid.",
        },
        { command: "!donate", description: " - Link to the donation portal." },
        { command: "!votelink", description: " - Vote for our server." },
        {
            command: "!reward",
            description: " - Get the reward after donating, elite tools & Quantum Computers.",
        },
        { command: "!discord ", description: "- Join the discord server." },
        { command: "!tutorial", description: "  - Watch the YouTube tutorial." },
        { command: "!longhelp", description: "  - Read about available commands." },
    ];

    const renderCommand = (command, description) => {
        return (
            <li key={command}>
                <strong>{command}</strong> - {description}
            </li>
        );
    };

    return (
        <article className="commandsSection" id="Commands">
            <h1>Commands</h1>
            <hr />
            <br />
            <p>These are the in-game commands. Access them by pressing enter and type:</p>
            <ul className="ulCommands">
                {commands.map(({ command, description }) => renderCommand(command, description))}
            </ul>
            <br />
            <p>
                <strong>Important information</strong>
            </p>
            <p>
                You can save or load a grid every 6th minutes. It will load in at the gps point you
                saved it at. Make sure not to load in grids next to asteroids or other ships as it
                may load inside of them.
            </p>
        </article>
    );
};

export default Commands;
