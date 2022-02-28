import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate, Navigate, Link } from "react-router-dom";
import { Form, Button, Alert, Spinner } from "react-bootstrap";
import "./style.css"; // Ada di practice session 18/11/21 menit 00:30:50

// Import Components
import Header from "../../components/header";
import Footer from "../../components/footer";

const API_URL = process.env.REACT_APP_API_URL;

function Home() {
  // state
  const [username, setUserName] = useState("");
  const [password, setPassWord] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isSignIn, setIsSignIn] = useState(false);

  // initialize navigation & redux
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // event handler
  const onButtonLogin = () => {
    // check username & password in our database
    setLoading(true);
    Axios.get(API_URL + `/users?username=${username}&password=${password}`) //Ada di pembahasan query parameter, practice session 17/11/21 menit 01:06:21
      .then((respond) => {
        console.log(respond);

        // if error -> show error
        if (!respond.data.length) {
          //Ada di pembahasan practice session 17/11/21 menit 01:16:20
          setError(true);
          setLoading(false);

          return;
        }

        // save token or UID in web storage
        localStorage.setItem("token", respond.data[0].UID); // Pembahasan ada di practice session 18/11/21 menit 00:24:12, storage ada di 00:14:57, 00:19:50 (bahas token), 00:21:51 (bahas beda ID dan UID)

        // save data to global storage
        dispatch({
          type: "LOGIN",
          payload: respond.data[0],
        });

        setLoading(false);

        // if success
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  // side effect -> similiar with class component's lifecycle method
  useEffect(() => {
    // Pembahasan side effect ada di practice session 18/11/21 menit 00:27:21
    console.log("side effect");

    // check token
    const TOKEN = localStorage.getItem("token");
    if (!TOKEN) return;

    setIsSignIn(true);
  }, []); // Penggunaan dependencies array kosong "[]" agar side effect hanya jalan sekali saja, ada di practice session 18/11/21 menit 00:30:34

  // conditional rendering : auth protection , ada di practice session 18/11/21 menit 00:30:34
  if (isSignIn) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <Header />
      <div class="banner">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          </ol>
          <div class="carousel-inner" role="listbox">
            <div class="carousel-item active">
              <div class="carousel-caption text-center">
                <h3>
                  Men’s eyewear
                  <span>Cool summer sale 50% off</span>
                </h3>
                <a
                  href="shop.html"
                  class="btn btn-sm animated-button gibson-three mt-4"
                >
                  Shop Now
                </a>
              </div>
            </div>
            <div class="carousel-item item2">
              <div class="carousel-caption text-center">
                <h3>
                  Women’s eyewear
                  <span>Want to Look Your Best?</span>
                </h3>
                <a
                  href="shop.html"
                  class="btn btn-sm animated-button gibson-three mt-4"
                >
                  Shop Now
                </a>
              </div>
            </div>
            <div class="carousel-item item3">
              <div class="carousel-caption text-center">
                <h3>
                  Men’s eyewear
                  <span>Cool summer sale 50% off</span>
                </h3>
                <a
                  href="shop.html"
                  class="btn btn-sm animated-button gibson-three mt-4"
                >
                  Shop Now
                </a>
              </div>
            </div>
            <div class="carousel-item item4">
              <div class="carousel-caption text-center">
                <h3>
                  Women’s eyewear
                  <span>Want to Look Your Best?</span>
                </h3>
                <a
                  href="shop.html"
                  class="btn btn-sm animated-button gibson-three mt-4"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
