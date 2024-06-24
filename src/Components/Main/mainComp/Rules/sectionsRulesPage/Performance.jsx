import React from "react";

const Performance = () => {
    const sections = [
        {
            title: "Pistons",
            allowedItems: [
                "Avoid stacking them (mounting pistons on pistons) wherever possible.",
                "Ensure the center of mass of the subgrid is aligned with the piston.",
                "Use parallel pistons on larger or less stable subgrids. You can use rotors on the ends of the pistons to connect the subgrid to multiple pistons.",
            ],
            notAllowedItems: [
                "Do not make piston spaghetti. It may sound fun, but it’s likely to hurt both the server and any nearby ships you’ve built.",
                "Do not surround the pistons in armor. This causes the piston to invoke Klang and hurt performance. Ensure the piston and its subgrid do not scrape.",
            ],
        },
        {
            title: "Rotors",
            allowedItems: [
                "Move the rotors slowly. This makes them much more stable.",
                "Keep the subgrid’s center of mass aligned with the rotor.",
                "Use physical constraints to prevent the rotor from bending.",
                "Maximize the braking torque of the rotor and turn it off when not in use.",
                "Use “Share Inertia Tensor” on larger subgrids.",
            ],
            notAllowedItems: [
                "Do not make rotor spaghetti. In general, pasta made from spacecraft parts is not a good idea.",
                "Do not lower the rotor displacement lower than the rotor has room for. This again causes scraping and Klang.",
            ],
        },
    ];

    const renderSection = ({ title, allowedItems, notAllowedItems }) => (
        <>
            <h3>
                <strong>{title}</strong>
            </h3>
            <p className="allowed">Allowed</p>
            <ul className="ulGuide">
                {allowedItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <p className="notAllowed">Not Allowed</p>
            <ul className="ulGuide">
                {notAllowedItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <br />
        </>
    );

    return (
        <article className="performanceSection" id="PerformanceGuide">
            <h1>Performance Guide</h1>
            <hr />
            <br />
            {sections.map((section, index) => (
                <React.Fragment key={index}>{renderSection(section)}</React.Fragment>
            ))}
        </article>
    );
};

export default Performance;

// import React from "react";

// const Performance = () => {
//     return (
//         <article className="performanceSection">
//             <h1>Performance Guide</h1>
//             <hr />
//             <br />
//             <h3>
//                 <strong>Pistons</strong>
//             </h3>
//             <p className="allowed">Allowed</p>
//             <ul className="ulGuide">
//                 <li>Avoid stacking them (mounting pistons on pistons) wherever possible.</li>
//                 <li> Ensure the center of mass of the subgrid is aligned with the piston.</li>{" "}
//                 <li>Ensure the center of mass of the subgrid is aligned with the piston.</li>{" "}
//                 <li>
//                     Use parallel pistons on larger or less stable subgrids. You can use rotors on
//                     the ends of the pistons to connect the subgrid to multiple pistons.
//                 </li>
//                 <p className="notAllowed">Not Allowed</p>
//                 <li>
//                     Do not make piston spaghetti. It may sound fun, but it’s likely to hurt both the
//                     server and any nearby ships you’ve built.
//                 </li>
//                 <li>
//                     Do not surround the pistons in armor. This causes the piston to invoke Klang and
//                     hurt performance. Ensure the piston and it’s subgrid do not scrape.
//                 </li>
//             </ul>
//             <br />
//             <h3>
//                 <strong>Rotors</strong>
//             </h3>
//             <p className="allowed">Allowed</p>
//             <ul className="ulGuide">
//                 <li>Move the rotors slowly. This makes them much more stable.</li>
//                 <li> Keep the subgrid’s center of mass aligned with the rotor.</li>
//                 <li>Use physical constraints to prevent the rotor from bending.</li>
//                 <li>Maximize the braking torque of the rotor and turn it off when not in use.</li>
//                 <li>Use “Share Inertia Tensor” on larger subgrids.</li>
//                 <p className="notAllowed">Not Allowed</p>
//                 <li>
//                     Do not make rotor spaghetti. In general, pasta made from spacecraft parts is not
//                     a good idea.
//                 </li>
//                 <li>
//                     Do not lower the rotor displacement lower than the rotor has room for. This
//                     again causes scraping and Klang.
//                 </li>
//             </ul>
//         </article>
//     );
// };

// export default Performance;
