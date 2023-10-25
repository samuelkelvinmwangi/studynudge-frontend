import React from "react";
import "./index.css"
import { Route, Routes } from "react-router-dom";
import ContentPage from "./pages/ContentPage/ContentPage";
import ContentView from "./components/ContentView/ContentView";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/content" element={<ContentPage />} />
        <Route path="/content/:id" element={ <ContentView /> } />
      </Routes>
    </>
  );
}

export default App;
