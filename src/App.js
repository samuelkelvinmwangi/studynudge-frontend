import React from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Admin from "./routes/Admin";
import AdminCategory from "./routes/AdminCategory";
import Staff from "./routes/Staff";
import StaffCategory from "./routes/StaffCategory";
import AdminUsers from "./routes/AdminUsers";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/category" element={<AdminCategory />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/staff/category" element={<StaffCategory />} />
        <Route path="/admin/users" element={<AdminUsers />} />
      </Routes>
    </>
  );
}

export default App;
