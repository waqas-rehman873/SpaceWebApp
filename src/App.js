import "./App.scss";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import MainContent from "./Components/Main/MainContent";
import Navbar from "./Components/Navbar/Navbar";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
}

export default App;
