import React, { useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

// components
import Header from "./components/header/index";
import Footer from "./components/footer/index";
import Carrousel from "./components/carousel";
import $ from 'jquery';
import Register from "./pages/register";
import Home from "./pages/home";
import Login from "./pages/login";
import { useDispatch } from "react-redux";
import { AuthUserKeepLogin } from "./redux/action/auth-action";

function Main() {
  const dispatch = useDispatch();
  useEffect(() =>  {

    // $(".dropdown").on('click', function() {
    //   let dropdown_open = $('.dropdown.open');
    //   if (!$(this).hasClass('open')) {
    //     if (dropdown_open) {
    //       $('.dropdown-menu', dropdown_open).stop(true, true).slideUp("fast");
    //       $('.dropdown.open').removeClass('open')
    //     }
  
    //     $('.dropdown-menu', this).stop(true, true).slideDown("fast");
    //     $(this).addClass('open');
    //   } else {
    //     $('.dropdown-menu', this).stop(true, true).slideUp("fast");
    //     $(this).removeClass('open');
    //   }
    // });
    // $(document).on('click', function(e) {
    //   let dropdown_open = $('.dropdown.open');
    //   if (!dropdown_open.is(e.target) && !dropdown_open.has(e.target).length) {
    //     $('.dropdown-menu', this).stop(true, true).slideUp("fast");
    //     $('.dropdown.open').removeClass('open')
    //   }
    // });

    dispatch(AuthUserKeepLogin())
  }, []);

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
