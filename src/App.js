import './App.css';
import React from 'react';
import About from "./components/About";
import Hobby from "./components/Hobby";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <main className="text-gray-400 bg-gray-950">
      <About />
      <Hobby />
      <Projects />
      <Contact />
    </main>
  )
}


export default App;
