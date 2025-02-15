/* eslint-disable no-unused-vars */
import "./App.css";
import Header from "../Components/Header/Header";
import React from "react";
import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import Skills from "../Components/Skills/Skills";
import Qualification from "../Components/Qualification/Qualification";
import Project from "../Components/Projects/Project";
import Contact from "../Components/Contact/Contact";



function App() {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About/>
        <Skills/>
        <Qualification/>
        <Project/>
        <Contact/>
      </main>
    </>
  );
}

export default App;
