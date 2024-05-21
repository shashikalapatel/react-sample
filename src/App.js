import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
      <Footer></Footer>
    </>
  );
}

export default App;
