import React from "react";
import Home from "./Components/Pages/Home";
import Board from "./Components/Pages/Board";
import Analytics from "./Components/Pages/Analytics";
import Product from "./Components/Pages/Products";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Board" element={<Board />}></Route>
      <Route path="/Analytics" element={<Analytics />}></Route>
      <Route path="/Product" element={<Product />}></Route>
    </Routes>
  );
}

export default App;
