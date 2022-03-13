import React, { useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

// components
import Header from "./components/header/index";
import Footer from "./components/footer/index";
import Carrousel from "./components/carousel";
import Register from "./pages/register";
import Home from "./pages/home";
import Login from "./pages/login";
import { useDispatch } from "react-redux";
import { AuthUserKeepLogin } from "./redux/action/auth-action";

function Main() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(AuthUserKeepLogin()), []);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Main;
