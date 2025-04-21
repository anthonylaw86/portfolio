import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import RealEstate from "./Pages/RealEstate/RealEstate";
import Development from "./Pages/Development/Development";
import Personal from "./Pages/Personal/Personal";
import Projects from "./Components/Projects/Projects.jsx";
import Contact from "./Pages/Contact/Contact";
import "./App.css";

const App = () => {
  return (
    <Router basename="/portfolio">
      <div className="app">
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/portfolio" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/real-estate" element={<RealEstate />} />
            <Route path="/development" element={<Development />} />
            <Route path="/personal" element={<Personal />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
