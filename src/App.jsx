import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav></nav>
      </header>
      <Routes>
        <Route />
        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
