import { FiList } from "react-icons/fi";
import { FiBarChart } from "react-icons/fi";
import { IoIosPeople } from "react-icons/io";
import CountUp from "react-countup";
const Statusbar = () => {
    return (
        <div className="statusbar">
            <div className="status">
                <FiBarChart />
                <small>Uptime</small>
                <div className="greenbg">
                    <CountUp start={875.039} end={99} duration={2.75} />%
                </div>
            </div>
            <div className="status">
                <IoIosPeople />
                <small>
                    Players
                    <CountUp start={875.039} end={4} duration={2.75} />
                    /
                    <CountUp start={875.039} end={46} duration={2.75} />
                </small>
            </div>
            <div className="status">
                <FiList />
                <small>Rank</small>
                <CountUp start={875.039} end={28} duration={2.75} />
            </div>
        </div>
    );
};

export default Statusbar;
