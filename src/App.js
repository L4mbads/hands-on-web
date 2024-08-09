import './App.css';
import React from 'react';
import About from "./components/About";
import Hobby from "./components/Hobby";

function App() {
  return (
    <main className="text-gray-400 bg-blue-500">
      <About />
      <Hobby />
    </main>
  )
}


export default App;
