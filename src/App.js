// src/App.js
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import MainNav from "./Components/Main/mainNav/MainNav";
import GuideDefault from "./Components/Main/mainComp/guideDefault/GuideDefault";
import MainLocation from "./Components/Main/mainComp/Location/MainLocation";
import OresIngots from "./Components/Main/mainComp/OresIngots/OresIngots";
import GridConverter from "./Components/Main/mainComp/GridConverter/GridConverter";
import Rules from "./Components/Main/mainComp/Rules/Rules.jsx";
import Lore from "./Components/Main/mainComp/Lore/Lore.jsx";

function App() {
    return (
        <main className="App">
            <Navbar />
            <Header />
            <MainNav />
            <Routes>
                <Route path="/guide" element={<GuideDefault />} />
                <Route path="/guide/location" element={<MainLocation />} />
                <Route path="/guide/oresIngots" element={<OresIngots />} />
                <Route path="/guide/gridConverter" element={<GridConverter />} />
                <Route path="/guide/Rules" element={<Rules />} />
                <Route path="/guide/Lore" element={<Lore />} />
            </Routes>
            <Footer />
        </main>
    );
}

export default App;
