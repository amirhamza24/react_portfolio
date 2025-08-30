import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/Home/HomePage";

// create temporary page components
const About = () => <div className="p-10 text-white">About Section</div>;
const Education = () => (
  <div className="p-10 text-white">Education Section</div>
);
const Experience = () => (
  <div className="p-10 text-white">Experience Section</div>
);
const Projects = () => <div className="p-10 text-white">Projects Section</div>;
const Contact = () => <div className="p-10 text-white">Contact Section</div>;

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        {" "}
        {/* prevent content hiding behind fixed navbar */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
