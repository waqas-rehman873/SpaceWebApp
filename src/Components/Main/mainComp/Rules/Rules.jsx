import React, { useEffect } from "react";
import RulesNavbar from "./RulesNavbar/RulesNavbar";
import BlocksPcu from "./sectionsRulesPage/BlocksPcu";
import BuildingLimits from "./sectionsRulesPage/BuildingLimits";
import { useLocation } from "react-router-dom";
import Commands from "./sectionsRulesPage/Commands";
import RenamingGrids from "./sectionsRulesPage/RenamingGrids";
import RulesDef from "./sectionsRulesPage/RulesDef";
import Server from "./sectionsRulesPage/Server";
import Voxel from "./sectionsRulesPage/Voxel";
import Performance from "./sectionsRulesPage/Performance";

const Rules = () => {
    const location = useLocation();

    useEffect(() => {
        const handleHashChange = () => {
            const elementId = location.hash.replace("#", "");
            if (elementId) {
                const element = document.getElementById(elementId);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }
        };

        handleHashChange();
        window.addEventListener("hashchange", handleHashChange);

        return () => {
            window.removeEventListener("hashchange", handleHashChange);
        };
    }, [location]);
    return (
        <main className="bgSection">
            <section className="secondScreenBox">
                <section className="rulesSection">
                    <RulesNavbar />
                    <BlocksPcu />
                    <BuildingLimits />
                    <Commands />
                    <RenamingGrids />
                    <RulesDef />
                    <Performance />
                    <Server />
                    <Voxel />
                </section>
            </section>
        </main>
    );
};

export default Rules;
