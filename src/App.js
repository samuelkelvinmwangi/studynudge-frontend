import React, { useEffect, useState } from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Login from "./routes/Login";
import Posts from "./routes/Posts";

import { Route, Routes } from "react-router-dom";




function App() {

  const [currentUser, setcurrentUser] = useState('');

  useEffect(()=>{
    fetch('/login')
    .then(res => {
      if(res.ok){
        res.json().then(user => setcurrentUser)
      }
    })
  },[])

  if(!currentUser) return <Login setcurrentUser={setcurrentUser} />
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
