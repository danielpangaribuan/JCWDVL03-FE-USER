import React, { useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

// components
import Header from "./components/header";
import Footer from "./components/footer";
import Carrousel from "./components/carousel";
import $ from 'jquery';
// import Register from "./pages/register";
import Home from "./pages/home";
// import Login from "./pages/login";
import Product from "./pages/product";
import { useDispatch } from "react-redux";
import { AuthUserKeepLogin } from "./redux/action/auth-action";
import ProductDetails from "./pages/product-detail";

function Main() {
  const dispatch = useDispatch();
  useEffect(() =>  {
    dispatch(AuthUserKeepLogin())
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          
          <Route path="/" element={<Home />} />
          {/* <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} /> */}
          <Route path="/product" element={<Product />} />
          <Route path="/detail/:id" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default Main;
