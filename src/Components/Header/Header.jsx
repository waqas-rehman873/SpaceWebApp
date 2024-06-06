import Statusbar from "./statusbar/Statusbar";
import Title from "./tiltle/Title";
import Videobox from "./videoBox/Videobox";

const Header = () => {
    return (
        <header className="header">
            <section className="headerBg">
                <div className="headerContent">
                    <Title />
                    <Statusbar />
                    <Videobox />
                </div>
            </section>
        </header>
    );
};

export default Header;
