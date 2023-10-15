import React from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Login from "./routes/Login";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
