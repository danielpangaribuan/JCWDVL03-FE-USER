import React from "react";
import { Routes, Route } from "react-router-dom";

// components
import Header from "./components/header/index";
import Footer from "./components/footer/index";
import Carrousel from "./components/carousel";
import Register from "./pages/register";

function Main() {
  return (
    <div>
      <Header />
      <Carrousel />
      <Footer />
      <div>
        <Routes>
          <Route path="register" element={<Register />} />
        </Routes>
      </div>
    </div>
  );
}

export default Main;
