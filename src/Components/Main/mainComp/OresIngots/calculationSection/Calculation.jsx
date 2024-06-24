import React from "react";
import ores from "../../../../../assets/pics/ores.png";

const Calculation = () => {
    return (
        <section className="calculationSection">
            <form action="" className="formOres">
                <select value>
                    <option value="Type of Ore">Type of Ore</option>
                    <option value="Cobalt">Cobalt</option>
                    <option value="Gold">Gold</option>
                    <option value="Iron">Iron</option>
                    <option value="Magnesium">Magnesium</option>
                    <option value="Nickel">Nickel</option>
                    <option value="Platinum">Platinum</option>
                    <option value="Silicon">Silicon</option>
                    <option value="Silver">Silver</option>
                    <option value="Thorium">Thorium</option>
                    <option value="Titanium">Titanium</option>
                    <option value="Uranium">Uranium</option>
                </select>
                <select value>
                    <option value="Amount of Module points">Amount of Module points</option>
                    <option value="0 module point 0%">0 module point 0%</option>
                    <option value="1 module point 109%">1 module point 109%</option>
                    <option value="2 module point 119%">2 module point 119%</option>
                    <option value="3 module point 130%">3 module point 130%</option>
                    <option value="4 module point 141%">4 module point 141%</option>
                    <option value="5 module point 154%">5 module point 154%</option>
                </select>
                <div className="inputData">
                    <input type="number" placeholder="Enter the Units" />
                    Ingots:
                    <div className="resultShow"></div>
                </div>
                <button type="submit" className="calBtn">
                    Calculate
                </button>
            </form>
            <figure>
                <img className="imgOres" src={ores} alt="loading.." />
            </figure>
        </section>
    );
};
export default Calculation;
