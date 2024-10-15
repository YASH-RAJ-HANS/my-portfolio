import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css"; // Import Tailwind CSS

import Navbar from "./Compo/Navbar";
import Footer from "./Compo/Footer";


import Home from "./Pages/Home";
import Dsa from "./Pages/Dsa";
import ScapperTool from "./Pages/ScapperTool";


const App = () => {
  return (
    <div className="text-white flex flex-col text-green-700 justify-center items-center ">
      <Router>
        <Navbar />
        <div className="flex-grow ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dsa" element={<Dsa />} />
            <Route path="/scrapper" element={<ScapperTool/>} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
