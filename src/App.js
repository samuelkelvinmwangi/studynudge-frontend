import React from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Login from "./routes/Login";
import Posts from "./routes/Posts";
import styled from 'styled-components';
import Menu from './components/Menu';

import { Route, Routes } from "react-router-dom";
import Navbar2 from "./components/Navbar2";

const Container = styled.div ;
const Main = styled.div ;
const Wrapper = styled.div ;


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Container>
        <Menu />
        <Main>
          <Navbar2 />
          <Wrapper>
            
          </Wrapper>
        </Main>
      </Container>
    </>
  );
}

export default App;
