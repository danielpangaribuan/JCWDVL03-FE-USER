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
      <section class="banner-bottom-wthreelayouts py-lg-5 py-3">
        <div class="container-fluid">
          <div class="inner-sec-shop px-lg-4 px-3">
            <h3 class="tittle-w3layouts my-lg-4 my-4">New Arrivals for you</h3>
            <div class="row">
              <div class="col-md-3 product-men women_two">
                <div class="product-googles-info googles">
                  <div class="men-pro-item">
                    <div class="men-thumb-item">
                      <img src="images/s1.jpg" class="img-fluid" alt="" />
                      <div class="men-cart-pro">
                        <div class="inner-men-cart-pro">
                          <a href="single.html" class="link-product-add-cart">
                            Quick View
                          </a>
                        </div>
                      </div>
                      <span class="product-new-top">New</span>
                    </div>
                    <div class="item-info-product">
                      <div class="info-product-price">
                        <div class="grid_meta">
                          <div class="product_price">
                            <h4>
                              <a href="single.html">Farenheit (Grey)</a>
                            </h4>
                            <div class="grid-price mt-2">
                              <span class="money">$575.00</span>
                            </div>
                          </div>
                          <ul class="stars">
                            <li>
                              <a href="#">
                                <i class="fa fa-star" aria-hidden="true"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fa fa-star" aria-hidden="true"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fa fa-star" aria-hidden="true"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fa fa-star" aria-hidden="true"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i
                                  class="fa fa-star-half-o"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div class="googles single-item hvr-outline-out">
                          <form action="#" method="post">
                            <input type="hidden" name="cmd" value="_cart" />
                            <input type="hidden" name="add" value="1" />
                            <input
                              type="hidden"
                              name="googles_item"
                              value="Farenheit"
                            />
                            <input type="hidden" name="amount" value="575.00" />
                            <button
                              type="submit"
                              class="googles-cart pgoogles-cart"
                            >
                              <i class="fas fa-cart-plus"></i>
                            </button>
                          </form>
                        </div>
                      </div>
                      <div class="clearfix"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-3 product-men women_two">
                <div class="product-googles-info googles">
                  <div class="men-pro-item">
                    <div class="men-thumb-item">
                      <img src="images/s2.jpg" class="img-fluid" alt="" />
                      <div class="men-cart-pro">
                        <div class="inner-men-cart-pro">
                          <a href="single.html" class="link-product-add-cart">
                            Quick View
                          </a>
                        </div>
                      </div>
                      <span class="product-new-top">New</span>
                    </div>
                    <div class="item-info-product">
                      <div class="info-product-price">
                        <div class="grid_meta">
                          <div class="product_price">
                            <h4>
                              <a href="single.html">Opium (Grey)</a>
                            </h4>
                            <div class="grid-price mt-2">
                              <span class="money">$325.00</span>
                            </div>
                          </div>
                          <ul class="stars">
                            <li>
                              <a href="#">
                                <i class="fa fa-star" aria-hidden="true"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fa fa-star" aria-hidden="true"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fa fa-star" aria-hidden="true"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i
                                  class="fa fa-star-half-o"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fa fa-star-o" aria-hidden="true"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div class="googles single-item hvr-outline-out">
                          <form action="#" method="post">
                            <input type="hidden" name="cmd" value="_cart" />
                            <input type="hidden" name="add" value="1" />
                            <input
                              type="hidden"
                              name="googles_item"
                              value="Opium (Grey)"
                            />
                            <input type="hidden" name="amount" value="325.00" />
                            <button
                              type="submit"
                              class="googles-cart pgoogles-cart"
                            >
                              <i class="fas fa-cart-plus"></i>
                            </button>
                          </form>
                        </div>
                      </div>
                      <div class="clearfix"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-3 product-men women_two">
                <div class="product-googles-info googles">
                  <div class="men-pro-item">
                    <div class="men-thumb-item">
                      <img src="images/s3.jpg" class="img-fluid" alt="" />
                      <div class="men-cart-pro">
                        <div class="inner-men-cart-pro">
                          <a href="single.html" class="link-product-add-cart">
                            Quick View
                          </a>
                        </div>
                      </div>
                      <span class="product-new-top">New</span>
                    </div>
                    <div class="item-info-product">
                      <div class="info-product-price">
                        <div class="grid_meta">
                          <div class="product_price">
                            <h4>
                              <a href="single.html">Kenneth Cole</a>
                            </h4>
                            <div class="grid-price mt-2">
                              <span class="money">$575.00</span>
                            </div>
                          </div>
                          <ul class="stars">
                            <li>
                              <a href="#">
                                <i class="fa fa-star" aria-hidden="true"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fa fa-star" aria-hidden="true"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fa fa-star" aria-hidden="true"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fa fa-star" aria-hidden="true"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i
                                  class="fa fa-star-half-o"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div class="googles single-item hvr-outline-out">
                          <form action="#" method="post">
                            <input type="hidden" name="cmd" value="_cart" />
                            <input type="hidden" name="add" value="1" />
                            <input
                              type="hidden"
                              name="googles_item"
                              value="Kenneth Cole"
                            />
                            <input type="hidden" name="amount" value="575.00" />
                            <button
                              type="submit"
                              class="googles-cart pgoogles-cart"
                            >
                              <i class="fas fa-cart-plus"></i>
                            </button>
                          </form>
                        </div>
                      </div>
                      <div class="clearfix"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-3 product-men women_two">
                <div class="product-googles-info googles">
                  <div class="men-pro-item">
                    <div class="men-thumb-item">
                      <img src="images/s4.jpg" class="img-fluid" alt="" />
                      <div class="men-cart-pro">
                        <div class="inner-men-cart-pro">
                          <a href="single.html" class="link-product-add-cart">
                            Quick View
                          </a>
                        </div>
                      </div>
                      <span class="product-new-top">New</span>
                    </div>
                    <div class="item-info-product">
                      <div class="info-product-price">
                        <div class="grid_meta">
                          <div class="product_price">
                            <h4>
                              <a href="single.html">Farenheit Oval </a>
                            </h4>
                            <div class="grid-price mt-2">
                              <span class="money">$325.00</span>
                            </div>
                          </div>
                          <ul class="stars">
                            <li>
                              <a href="#">
                                <i class="fa fa-star" aria-hidden="true"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fa fa-star" aria-hidden="true"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fa fa-star" aria-hidden="true"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i
                                  class="fa fa-star-half-o"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fa fa-star-o" aria-hidden="true"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div class="googles single-item hvr-outline-out">
                          <form action="#" method="post">
                            <input type="hidden" name="cmd" value="_cart" />
                            <input type="hidden" name="add" value="1" />
                            <input
                              type="hidden"
                              name="googles_item"
                              value="Farenheit Oval"
                            />
                            <input type="hidden" name="amount" value="325.00" />
                            <button
                              type="submit"
                              class="googles-cart pgoogles-cart"
                            >
                              <i class="fas fa-cart-plus"></i>
                            </button>
                          </form>
                        </div>
                      </div>
                      <div class="clearfix"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row mt-lg-3 mt-0">
              <div class="col-md-3 product-men women_two">
                <div class="product-googles-info googles">
                  <div class="men-pro-item">
                    <div class="men-thumb-item">
                      <img src="images/m1.jpg" class="img-fluid" alt="" />
                      <div class="men-cart-pro">
                        <div class="inner-men-cart-pro">
                          <a href="single.html" class="link-product-add-cart">
                            Quick View
                          </a>
                        </div>
                      </div>
                      <span class="product-new-top">New</span>
                    </div>
                    <div class="item-info-product">
                      <div class="info-product-price">
                        <div class="grid_meta">
                          <div class="product_price">
                            <h4>
                              <a href="single.html">Aislin Wayfarer </a>
                            </h4>
                            <div class="grid-price mt-2">
                              <span class="money">$775.00</span>
                            </div>
                          </div>
                          <ul class="stars">
                            <li>
                              <a href="#">
                                <i class="fa fa-star" aria-hidden="true"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fa fa-star" aria-hidden="true"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fa fa-star" aria-hidden="true"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fa fa-star" aria-hidden="true"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i
                                  class="fa fa-star-half-o"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div class="googles single-item hvr-outline-out">
                          <form action="#" method="post">
                            <input type="hidden" name="cmd" value="_cart" />
                            <input type="hidden" name="add" value="1" />
                            <input
                              type="hidden"
                              name="googles_item"
                              value="Aislin Wayfarer"
                            />
                            <input type="hidden" name="amount" value="775.00" />
                            <button
                              type="submit"
                              class="googles-cart pgoogles-cart"
                            >
                              <i class="fas fa-cart-plus"></i>
                            </button>
                          </form>
                        </div>
                      </div>
                      <div class="clearfix"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-3 product-men women_two">
                <div class="product-googles-info googles">
                  <div class="men-pro-item">
                    <div class="men-thumb-item">
                      <img src="images/m2.jpg" class="img-fluid" alt="" />
                      <div class="men-cart-pro">
                        <div class="inner-men-cart-pro">
                          <a href="single.html" class="link-product-add-cart">
                            Quick View
                          </a>
                        </div>
                      </div>
                      <span class="product-new-top">New</span>
                    </div>
                    <div class="item-info-product">
                      <div class="info-product-price">
                        <div class="grid_meta">
                          <div class="product_price">
                            <h4>
                              <a href="single.html">Azmani Round </a>
                            </h4>
                            <div class="grid-price mt-2">
                              <span class="money">$725.00</span>
                            </div>
                          </div>
                          <ul class="stars">
                            <li>
                              <a href="#">
                                <i class="fa fa-star" aria-hidden="true"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fa fa-star" aria-hidden="true"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fa fa-star" aria-hidden="true"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i
                                  class="fa fa-star-half-o"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fa fa-star-o" aria-hidden="true"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div class="googles single-item hvr-outline-out">
                          <form action="#" method="post">
                            <input type="hidden" name="cmd" value="_cart" />
                            <input type="hidden" name="add" value="1" />
                            <input
                              type="hidden"
                              name="googles_item"
                              value="Azmani Round"
                            />
                            <input type="hidden" name="amount" value="725.00" />
                            <button
                              type="submit"
                              class="googles-cart pgoogles-cart"
                            >
                              <i class="fas fa-cart-plus"></i>
                            </button>
                          </form>
                        </div>
                      </div>
                      <div class="clearfix"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-3 product-men women_two">
                <div class="product-googles-info googles">
                  <div class="men-pro-item">
                    <div class="men-thumb-item">
                      <img src="images/m3.jpg" class="img-fluid" alt="" />
                      <div class="men-cart-pro">
                        <div class="inner-men-cart-pro">
                          <a href="single.html" class="link-product-add-cart">
                            Quick View
                          </a>
                        </div>
                      </div>
                      <span class="product-new-top">New</span>
                    </div>
                    <div class="item-info-product">
                      <div class="info-product-price">
                        <div class="grid_meta">
                          <div class="product_price">
                            <h4>
                              <a href="single.html">Farenheit Wayfarer</a>
                            </h4>
                            <div class="grid-price mt-2">
                              <span class="money">$475.00</span>
                            </div>
                          </div>
                          <ul class="stars">
                            <li>
                              <a href="#">
                                <i class="fa fa-star" aria-hidden="true"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fa fa-star" aria-hidden="true"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fa fa-star" aria-hidden="true"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fa fa-star" aria-hidden="true"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i
                                  class="fa fa-star-half-o"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div class="googles single-item hvr-outline-out">
                          <form action="#" method="post">
                            <input type="hidden" name="cmd" value="_cart" />
                            <input type="hidden" name="add" value="1" />
                            <input
                              type="hidden"
                              name="googles_item"
                              value="Farenheit Wayfarer"
                            />
                            <input type="hidden" name="amount" value="475.00" />
                            <button
                              type="submit"
                              class="googles-cart pgoogles-cart"
                            >
                              <i class="fas fa-cart-plus"></i>
                            </button>
                          </form>
                        </div>
                      </div>
                      <div class="clearfix"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-3 product-men women_two">
                <div class="product-googles-info googles">
                  <div class="men-pro-item">
                    <div class="men-thumb-item">
                      <img src="images/m4.jpg" class="img-fluid" alt="" />
                      <div class="men-cart-pro">
                        <div class="inner-men-cart-pro">
                          <a href="single.html" class="link-product-add-cart">
                            Quick View
                          </a>
                        </div>
                      </div>
                      <span class="product-new-top">New</span>
                    </div>
                    <div class="item-info-product">
                      <div class="info-product-price">
                        <div class="grid_meta">
                          <div class="product_price">
                            <h4>
                              <a href="single.html">Fossil Wayfarer </a>
                            </h4>
                            <div class="grid-price mt-2">
                              <span class="money">$825.00</span>
                            </div>
                          </div>
                          <ul class="stars">
                            <li>
                              <a href="#">
                                <i class="fa fa-star" aria-hidden="true"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fa fa-star" aria-hidden="true"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fa fa-star" aria-hidden="true"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i
                                  class="fa fa-star-half-o"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="fa fa-star-o" aria-hidden="true"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div class="googles single-item hvr-outline-out">
                          <form action="#" method="post">
                            <input type="hidden" name="cmd" value="_cart" />
                            <input type="hidden" name="add" value="1" />
                            <input
                              type="hidden"
                              name="googles_item"
                              value="Fossil Wayfarer"
                            />
                            <input type="hidden" name="amount" value="825.00" />
                            <button
                              type="submit"
                              class="googles-cart pgoogles-cart"
                            >
                              <i class="fas fa-cart-plus"></i>
                            </button>
                          </form>
                        </div>
                      </div>
                      <div class="clearfix"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12 middle-slider my-4">
                <div class="middle-text-info">
                  <h3 class="tittle-w3layouts two text-center my-lg-4 mt-3">
                    Summer Flash sale
                  </h3>
                  <div
                    class="simply-countdown-custom"
                    id="simply-countdown-custom"
                  ></div>
                </div>
              </div>
            </div>

            <div class="slider-img mid-sec">
              <div class="mid-slider">
                <div class="owl-carousel owl-theme row">
                  <div class="item">
                    <div class="gd-box-info text-center">
                      <div class="product-men women_two bot-gd">
                        <div class="product-googles-info slide-img googles">
                          <div class="men-pro-item">
                            <div class="men-thumb-item">
                              <img
                                src="images/s5.jpg"
                                class="img-fluid"
                                alt=""
                              />
                              <div class="men-cart-pro">
                                <div class="inner-men-cart-pro">
                                  <a
                                    href="single.html"
                                    class="link-product-add-cart"
                                  >
                                    Quick View
                                  </a>
                                </div>
                              </div>
                              <span class="product-new-top">New</span>
                            </div>
                            <div class="item-info-product">
                              <div class="info-product-price">
                                <div class="grid_meta">
                                  <div class="product_price">
                                    <h4>
                                      <a href="single.html">
                                        Fastrack Aviator{" "}
                                      </a>
                                    </h4>
                                    <div class="grid-price mt-2">
                                      <span class="money">$325.00</span>
                                    </div>
                                  </div>
                                  <ul class="stars">
                                    <li>
                                      <a href="#">
                                        <i
                                          class="fa fa-star"
                                          aria-hidden="true"
                                        ></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i
                                          class="fa fa-star"
                                          aria-hidden="true"
                                        ></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i
                                          class="fa fa-star"
                                          aria-hidden="true"
                                        ></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i
                                          class="fa fa-star-half-o"
                                          aria-hidden="true"
                                        ></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i
                                          class="fa fa-star-o"
                                          aria-hidden="true"
                                        ></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div class="googles single-item hvr-outline-out">
                                  <form action="#" method="post">
                                    <input
                                      type="hidden"
                                      name="cmd"
                                      value="_cart"
                                    />
                                    <input type="hidden" name="add" value="1" />
                                    <input
                                      type="hidden"
                                      name="googles_item"
                                      value="Fastrack Aviator"
                                    />
                                    <input
                                      type="hidden"
                                      name="amount"
                                      value="325.00"
                                    />
                                    <button
                                      type="submit"
                                      class="googles-cart pgoogles-cart"
                                    >
                                      <i class="fas fa-cart-plus"></i>
                                    </button>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="gd-box-info text-center">
                      <div class="product-men women_two bot-gd">
                        <div class="product-googles-info slide-img googles">
                          <div class="men-pro-item">
                            <div class="men-thumb-item">
                              <img
                                src="images/s6.jpg"
                                class="img-fluid"
                                alt=""
                              />
                              <div class="men-cart-pro">
                                <div class="inner-men-cart-pro">
                                  <a
                                    href="single.html"
                                    class="link-product-add-cart"
                                  >
                                    Quick View
                                  </a>
                                </div>
                              </div>
                              <span class="product-new-top">New</span>
                            </div>
                            <div class="item-info-product">
                              <div class="info-product-price">
                                <div class="grid_meta">
                                  <div class="product_price">
                                    <h4>
                                      <a href="single.html">MARTIN Aviator </a>
                                    </h4>
                                    <div class="grid-price mt-2">
                                      <span class="money">$425.00</span>
                                    </div>
                                  </div>
                                  <ul class="stars">
                                    <li>
                                      <a href="#">
                                        <i
                                          class="fa fa-star"
                                          aria-hidden="true"
                                        ></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i
                                          class="fa fa-star"
                                          aria-hidden="true"
                                        ></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i
                                          class="fa fa-star"
                                          aria-hidden="true"
                                        ></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i
                                          class="fa fa-star-half-o"
                                          aria-hidden="true"
                                        ></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i
                                          class="fa fa-star-o"
                                          aria-hidden="true"
                                        ></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div class="googles single-item hvr-outline-out">
                                  <form action="#" method="post">
                                    <input
                                      type="hidden"
                                      name="cmd"
                                      value="_cart"
                                    />
                                    <input type="hidden" name="add" value="1" />
                                    <input
                                      type="hidden"
                                      name="googles_item"
                                      value="MARTIN Aviator"
                                    />
                                    <input
                                      type="hidden"
                                      name="amount"
                                      value="425.00"
                                    />
                                    <button
                                      type="submit"
                                      class="googles-cart pgoogles-cart"
                                    >
                                      <i class="fas fa-cart-plus"></i>
                                    </button>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="gd-box-info text-center">
                      <div class="product-men women_two bot-gd">
                        <div class="product-googles-info slide-img googles">
                          <div class="men-pro-item">
                            <div class="men-thumb-item">
                              <img
                                src="images/s7.jpg"
                                class="img-fluid"
                                alt=""
                              />
                              <div class="men-cart-pro">
                                <div class="inner-men-cart-pro">
                                  <a
                                    href="single.html"
                                    class="link-product-add-cart"
                                  >
                                    Quick View
                                  </a>
                                </div>
                              </div>
                              <span class="product-new-top">New</span>
                            </div>
                            <div class="item-info-product">
                              <div class="info-product-price">
                                <div class="grid_meta">
                                  <div class="product_price">
                                    <h4>
                                      <a href="single.html">
                                        Royal Son Aviator{" "}
                                      </a>
                                    </h4>
                                    <div class="grid-price mt-2">
                                      <span class="money">$425.00</span>
                                    </div>
                                  </div>
                                  <ul class="stars">
                                    <li>
                                      <a href="#">
                                        <i
                                          class="fa fa-star"
                                          aria-hidden="true"
                                        ></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i
                                          class="fa fa-star"
                                          aria-hidden="true"
                                        ></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i
                                          class="fa fa-star"
                                          aria-hidden="true"
                                        ></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i
                                          class="fa fa-star-half-o"
                                          aria-hidden="true"
                                        ></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i
                                          class="fa fa-star-o"
                                          aria-hidden="true"
                                        ></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div class="googles single-item hvr-outline-out">
                                  <form action="#" method="post">
                                    <input
                                      type="hidden"
                                      name="cmd"
                                      value="_cart"
                                    />
                                    <input type="hidden" name="add" value="1" />
                                    <input
                                      type="hidden"
                                      name="googles_item"
                                      value="Royal Son Aviator"
                                    />
                                    <input
                                      type="hidden"
                                      name="amount"
                                      value="425.00"
                                    />
                                    <button
                                      type="submit"
                                      class="googles-cart pgoogles-cart"
                                    >
                                      <i class="fas fa-cart-plus"></i>
                                    </button>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="gd-box-info text-center">
                      <div class="product-men women_two bot-gd">
                        <div class="product-googles-info slide-img googles">
                          <div class="men-pro-item">
                            <div class="men-thumb-item">
                              <img
                                src="images/s8.jpg"
                                class="img-fluid"
                                alt=""
                              />
                              <div class="men-cart-pro">
                                <div class="inner-men-cart-pro">
                                  <a
                                    href="single.html"
                                    class="link-product-add-cart"
                                  >
                                    Quick View
                                  </a>
                                </div>
                              </div>
                              <span class="product-new-top">New</span>
                            </div>
                            <div class="item-info-product">
                              <div class="info-product-price">
                                <div class="grid_meta">
                                  <div class="product_price">
                                    <h4>
                                      <a href="single.html">Irayz Butterfly </a>
                                    </h4>
                                    <div class="grid-price mt-2">
                                      <span class="money">$281.00</span>
                                    </div>
                                  </div>
                                  <ul class="stars">
                                    <li>
                                      <a href="#">
                                        <i
                                          class="fa fa-star"
                                          aria-hidden="true"
                                        ></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i
                                          class="fa fa-star"
                                          aria-hidden="true"
                                        ></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i
                                          class="fa fa-star"
                                          aria-hidden="true"
                                        ></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i
                                          class="fa fa-star-half-o"
                                          aria-hidden="true"
                                        ></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i
                                          class="fa fa-star-o"
                                          aria-hidden="true"
                                        ></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div class="googles single-item hvr-outline-out">
                                  <form action="#" method="post">
                                    <input
                                      type="hidden"
                                      name="cmd"
                                      value="_cart"
                                    />
                                    <input type="hidden" name="add" value="1" />
                                    <input
                                      type="hidden"
                                      name="googles_item"
                                      value="Irayz Butterfly"
                                    />
                                    <input
                                      type="hidden"
                                      name="amount"
                                      value="281.00"
                                    />
                                    <button
                                      type="submit"
                                      class="googles-cart pgoogles-cart"
                                    >
                                      <i class="fas fa-cart-plus"></i>
                                    </button>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="gd-box-info text-center">
                      <div class="product-men women_two bot-gd">
                        <div class="product-googles-info slide-img googles">
                          <div class="men-pro-item">
                            <div class="men-thumb-item">
                              <img
                                src="images/s9.jpg"
                                class="img-fluid"
                                alt=""
                              />
                              <div class="men-cart-pro">
                                <div class="inner-men-cart-pro">
                                  <a
                                    href="single.html"
                                    class="link-product-add-cart"
                                  >
                                    Quick View
                                  </a>
                                </div>
                              </div>
                              <span class="product-new-top">New</span>
                            </div>
                            <div class="item-info-product">
                              <div class="info-product-price">
                                <div class="grid_meta">
                                  <div class="product_price">
                                    <h4>
                                      <a href="single.html">
                                        Jerry Rectangular{" "}
                                      </a>
                                    </h4>
                                    <div class="grid-price mt-2">
                                      <span class="money">$525.00</span>
                                    </div>
                                  </div>
                                  <ul class="stars">
                                    <li>
                                      <a href="#">
                                        <i
                                          class="fa fa-star"
                                          aria-hidden="true"
                                        ></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i
                                          class="fa fa-star"
                                          aria-hidden="true"
                                        ></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i
                                          class="fa fa-star"
                                          aria-hidden="true"
                                        ></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i
                                          class="fa fa-star-half-o"
                                          aria-hidden="true"
                                        ></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i
                                          class="fa fa-star-o"
                                          aria-hidden="true"
                                        ></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div class="googles single-item hvr-outline-out">
                                  <form action="#" method="post">
                                    <input
                                      type="hidden"
                                      name="cmd"
                                      value="_cart"
                                    />
                                    <input type="hidden" name="add" value="1" />
                                    <input
                                      type="hidden"
                                      name="googles_item"
                                      value="Jerry Rectangular "
                                    />
                                    <input
                                      type="hidden"
                                      name="amount"
                                      value="525.00"
                                    />
                                    <button
                                      type="submit"
                                      class="googles-cart pgoogles-cart"
                                    >
                                      <i class="fas fa-cart-plus"></i>
                                    </button>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="gd-box-info text-center">
                      <div class="product-men women_two bot-gd">
                        <div class="product-googles-info slide-img googles">
                          <div class="men-pro-item">
                            <div class="men-thumb-item">
                              <img
                                src="images/s10.jpg"
                                class="img-fluid"
                                alt=""
                              />
                              <div class="men-cart-pro">
                                <div class="inner-men-cart-pro">
                                  <a
                                    href="single.html"
                                    class="link-product-add-cart"
                                  >
                                    Quick View
                                  </a>
                                </div>
                              </div>
                              <span class="product-new-top">New</span>
                            </div>
                            <div class="item-info-product">
                              <div class="info-product-price">
                                <div class="grid_meta">
                                  <div class="product_price">
                                    <h4>
                                      <a href="single.html">Herdy Wayfarer </a>
                                    </h4>
                                    <div class="grid-price mt-2">
                                      <span class="money">$325.00</span>
                                    </div>
                                  </div>
                                  <ul class="stars">
                                    <li>
                                      <a href="#">
                                        <i
                                          class="fa fa-star"
                                          aria-hidden="true"
                                        ></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i
                                          class="fa fa-star"
                                          aria-hidden="true"
                                        ></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i
                                          class="fa fa-star"
                                          aria-hidden="true"
                                        ></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i
                                          class="fa fa-star-half-o"
                                          aria-hidden="true"
                                        ></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i
                                          class="fa fa-star-o"
                                          aria-hidden="true"
                                        ></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div class="googles single-item hvr-outline-out">
                                  <form action="#" method="post">
                                    <input
                                      type="hidden"
                                      name="cmd"
                                      value="_cart"
                                    />
                                    <input type="hidden" name="add" value="1" />
                                    <input
                                      type="hidden"
                                      name="googles_item"
                                      value="Herdy Wayfarer"
                                    />
                                    <input
                                      type="hidden"
                                      name="amount"
                                      value="325.00"
                                    />
                                    <button
                                      type="submit"
                                      class="googles-cart pgoogles-cart"
                                    >
                                      <i class="fas fa-cart-plus"></i>
                                    </button>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="testimonials py-lg-4 py-3 mt-4">
              <div class="testimonials-inner py-lg-4 py-3">
                <h3 class="tittle-w3layouts text-center my-lg-4 my-4">
                  Tesimonials
                </h3>
                <div
                  id="carouselExampleControls"
                  class="carousel slide"
                  data-ride="carousel"
                >
                  <div class="carousel-inner" role="listbox">
                    <div class="carousel-item active">
                      <div class="testimonials_grid text-center">
                        <h3>
                          Anamaria
                          <span>Customer</span>
                        </h3>
                        <label>United States</label>
                        <p>
                          Maecenas interdum, metus vitae tincidunt porttitor,
                          magna quam egestas sem, ac scelerisque nisl nibh vel
                          lacus. Proin eget gravida odio. Donec ullamcorper est
                          eu accumsan cursus.
                        </p>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div class="testimonials_grid text-center">
                        <h3>
                          Esmeralda
                          <span>Customer</span>
                        </h3>
                        <label>United States</label>
                        <p>
                          Maecenas interdum, metus vitae tincidunt porttitor,
                          magna quam egestas sem, ac scelerisque nisl nibh vel
                          lacus. Proin eget gravida odio. Donec ullamcorper est
                          eu accumsan cursus.
                        </p>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div class="testimonials_grid text-center">
                        <h3>
                          Gretchen
                          <span>Customer</span>
                        </h3>
                        <label>United States</label>
                        <p>
                          Maecenas interdum, metus vitae tincidunt porttitor,
                          magna quam egestas sem, ac scelerisque nisl nibh vel
                          lacus. Proin eget gravida odio. Donec ullamcorper est
                          eu accumsan cursus.
                        </p>
                      </div>
                    </div>
                    <a
                      class="carousel-control-prev test"
                      href="#carouselExampleControls"
                      role="button"
                      data-slide="prev"
                    >
                      <span class="fas fa-long-arrow-alt-left"></span>
                      <span class="sr-only">Previous</span>
                    </a>
                    <a
                      class="carousel-control-next test"
                      href="#carouselExampleControls"
                      role="button"
                      data-slide="next"
                    >
                      <span
                        class="fas fa-long-arrow-alt-right"
                        aria-hidden="true"
                      ></span>
                      <span class="sr-only">Next</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="row galsses-grids pt-lg-5 pt-3">
              <div class="col-lg-6 galsses-grid-left">
                <figure class="effect-lexi">
                  <img src="images/banner4.jpg" alt="" class="img-fluid" />
                  <figcaption>
                    <h3>
                      Editor's
                      <span>Pick</span>
                    </h3>
                    <p>Express your style now.</p>
                  </figcaption>
                </figure>
              </div>
              <div class="col-lg-6 galsses-grid-left">
                <figure class="effect-lexi">
                  <img src="images/banner1.jpg" alt="" class="img-fluid" />
                  <figcaption>
                    <h3>
                      Editor's
                      <span>Pick</span>
                    </h3>
                    <p>Express your style now.</p>
                  </figcaption>
                </figure>
              </div>
            </div>

            <div class="bottom-sub-grid-content py-lg-5 py-3">
              <div class="row">
                <div class="col-lg-4 bottom-sub-grid text-center">
                  <div class="bt-icon">
                    <span class="far fa-hand-paper"></span>
                  </div>

                  <h4 class="sub-tittle-w3layouts my-lg-4 my-3">
                    Satisfaction Guaranteed
                  </h4>
                  <p>
                    Duis mollis, est non commodo luctus, nisi erat porttitor
                    ligula, eget lacinia odio sem nec elit.
                  </p>
                  <p>
                    <a
                      href="shop.html"
                      class="btn btn-sm animated-button gibson-three mt-4"
                    >
                      Shop Now
                    </a>
                  </p>
                </div>

                <div class="col-lg-4 bottom-sub-grid text-center">
                  <div class="bt-icon">
                    <span class="fas fa-rocket"></span>
                  </div>

                  <h4 class="sub-tittle-w3layouts my-lg-4 my-3">
                    Fast Shipping
                  </h4>
                  <p>
                    Duis mollis, est non commodo luctus, nisi erat porttitor
                    ligula, eget lacinia odio sem nec elit.
                  </p>
                  <p>
                    <a
                      href="shop.html"
                      class="btn btn-sm animated-button gibson-three mt-4"
                    >
                      Shop Now
                    </a>
                  </p>
                </div>

                <div class="col-lg-4 bottom-sub-grid text-center">
                  <div class="bt-icon">
                    <span class="far fa-sun"></span>
                  </div>

                  <h4 class="sub-tittle-w3layouts my-lg-4 my-3">
                    UV Protection
                  </h4>
                  <p>
                    Duis mollis, est non commodo luctus, nisi erat porttitor
                    ligula, eget lacinia odio sem nec elit.
                  </p>
                  <p>
                    <a
                      href="shop.html"
                      class="btn btn-sm animated-button gibson-three mt-4"
                    >
                      Shop Now
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div class="testimonials p-lg-5 p-3 mt-4">
              <div class="row last-section">
                <div class="col-lg-3 footer-top-w3layouts-grid-sec">
                  <div class="mail-grid-icon text-center">
                    <i class="fas fa-gift"></i>
                  </div>
                  <div class="mail-grid-text-info">
                    <h3>Genuine Product</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur</p>
                  </div>
                </div>
                <div class="col-lg-3 footer-top-w3layouts-grid-sec">
                  <div class="mail-grid-icon text-center">
                    <i class="fas fa-shield-alt"></i>
                  </div>
                  <div class="mail-grid-text-info">
                    <h3>Secure Products</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur</p>
                  </div>
                </div>
                <div class="col-lg-3 footer-top-w3layouts-grid-sec">
                  <div class="mail-grid-icon text-center">
                    <i class="fas fa-dollar-sign"></i>
                  </div>
                  <div class="mail-grid-text-info">
                    <h3>Cash on Delivery</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur</p>
                  </div>
                </div>
                <div class="col-lg-3 footer-top-w3layouts-grid-sec">
                  <div class="mail-grid-icon text-center">
                    <i class="fas fa-truck"></i>
                  </div>
                  <div class="mail-grid-text-info">
                    <h3>Easy Delivery</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      {/* <Footer /> */}
    </div>
  );
}
export default Home;
