import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css"; // Import Tailwind CSS

import Navbar from "./Compo/Navbar";
import Footer from "./Compo/Footer";


import Home from "./Pages/Home/Home";
import Dsa from "./Pages/Dsa/Dsa";
import ScapperTool from "./Pages/ToolPage/ScapperTool";


const App = () => {
  return (
    <div className="text-white flex flex-col text-green-700 justify-center items-center ">
      <Router>
        <Navbar />
        <div className="flex-grow ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dsa" element={<Dsa />} />
            <Route path="/tool" element={<ScapperTool/>} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
