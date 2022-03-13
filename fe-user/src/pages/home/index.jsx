import React, { useState, useEffect } from "react";
// import Axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate, Navigate, Link } from "react-router-dom";
import { Form, Button, Alert, Spinner } from "react-bootstrap";
import "./style.css"; // Ada di practice session 18/11/21 menit 00:30:50

// Import Components
import Header from "../../components/header";
import Carrousel from "../../components/carousel";
import Footer from "../../components/footer";

function Home() {
  return (
    <div>
      {/* <Header /> */}
      <Carrousel />
      {/* <Footer /> */}
    </div>
  );
}
export default Home;
