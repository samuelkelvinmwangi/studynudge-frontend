import React from "react";
import "./index.css"
import { Route, Routes } from "react-router-dom";
import ContentPage from "./pages/ContentPage/ContentPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/content" element={<ContentPage />} />
        <Route path="/content/:id" element={<h1>Content View</h1>} />
      </Routes>
    </>
  );
}

export default App;
