import React from "react";

const RulesDef = () => {
    const rules = [
        {
            num: "1.",
            description:
                "Rename your grids to FactionTag.GridPurpose in the info tab or they will be deleted. Ex: ABC.Large Miner",
        },
        {
            num: "2.",
            description:
                " Do not build inside the planets or asteroid voxels. They are reset every week. If you drill and build inside, your grids will be destroyed.",
        },
        {
            num: "3a.",
            description: "PvP is allowed without any restrictions, with the exception of:",
        },
        {
            num: "3b.",
            description:
                "Suitwarrioring is not permitted. Suitwarrioring is defined as repeatedly engaging in combat against a ship without using a ship yourself, except in the case of looting an unattended grid.",
        },
        {
            num: "3c. ",
            description: "PvP actions must comply with all other server rules.",
        },
        {
            num: "3d.",
            description: "Raycasting scripts cannot work with any turrets or static weapons.",
        },
        {
            num: "3e.",
            description: "Pushing ships outside the trade station safe zone is an offense",
        },
        {
            num: "4a.",
            description: "Do not farm the Respawn Ships (1 time /player)",
        },
        {
            num: "4b.",
            description: "Respawn ship ramming counts as respawn ship farming.",
        },
        {
            num: "5.",
            description:
                "Players and staff are expected to conduct themselves respectfully. Insulting or attacking other players/staff members in chat is not allowed. Listen to staff members, their word is final.",
        },
        {
            num: "6. ",
            description:
                "Only English or French are allowed in public chat. Use the general-int channel, faction chat, whispering or Discord if you want to talk any other language.",
        },
        {
            num: "7.",
            description:
                "Respect the PCU/block/grid limits. Using sub-grids or any other method to get around these limits is strictly forbidden.",
        },
        {
            num: "8a.",
            description:
                "Negatively impacting serverside or clientside performance significantly by any means is not allowed. Egregious cases of this are subject to an immediate ban at moderator discretion.",
        },
        {
            num: "8b.",
            description: "Follow the performance guide. It exists for a reason.",
        },
    ];
    const renderRule = ({ num, description }) => {
        return (
            <li key={num}>
                <strong>{num} </strong> {description}
            </li>
        );
    };
    return (
        <article className="rulesSection" id="Rules">
            <h1>Rules</h1>
            <hr />
            <br />
            <ul className="ulRules">{rules.map((rule) => renderRule(rule))}</ul>
            <br />
        </article>
    );
};

export default RulesDef;
