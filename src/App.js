import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import MainNav from "./Components/Main/mainNav/MainNav";
import GuideDefault from "./Components/Main/mainComp/guideDefault/GuideDefault";
// import MainNav from "../../..//Components/Navbar/Navbar";
import MainLocation from "./Components/Main/mainComp/Location/MainLocation";
import OresIngots from "./Components/Main/mainComp/OresIngots/OresIngots";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Header />
            <MainNav />
            <Routes>
                <Route path="/guide" element={<GuideDefault />} />
                <Route path="/guide/location" element={<MainLocation />} />
                <Route path="/guide/oresIngots" element={<OresIngots />} />
            </Routes>

            <Footer />
        </div>
    );
}

export default App;
