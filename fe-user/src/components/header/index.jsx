import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./style.css";

// import component
import MyModal from "../modal/index.jsx";

function Header() {
  // ====================== MODAL LoGIN ====================
  const [showModalLogin, setShowModalLogin] = useState(false);
  const handleClose_modalLogin = () => setShowModalLogin(false);
  const handleShow_modalLogin = () => setShowModalLogin(true);

  // initialize navigation & redux
  // const navigate = useNavigate();

  const modalLogin = () => {
    return (
      <Form className="form-body">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="modal-title">Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="form-password" controlId="formBasicPassword">
          <Form.Label className="modal-title">Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="checkbox" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Remember Me"
            className="text-white"
          />
        </Form.Group>
        <div>
          <Button className="button-signin" variant="warning" type="submit">
            Sign In
          </Button>
          <p>
            "Don't have an account ?"
            <Link to="../pages/register">Register Now</Link>
          </p>
        </div>
      </Form>
    );
  };

  // const modalUserLogin = () => {
  //   return (
  //     <div class="overlay-login text-left">
  //       <button type="button" class="overlay-close1">
  //         <i class="fa fa-times" aria-hidden="true"></i>
  //       </button>
  //       <div class="wrap">
  //         <h5 class="text-center mb-4">Login Now</h5>
  //         <div class="login p-5 bg-dark mx-auto mw-100">
  //           <form action="#" method="post">
  //             <div class="form-group">
  //               <label class="mb-2">Email address</label>
  //               <input
  //                 type="email"
  //                 class="form-control"
  //                 id="exampleInputEmail1"
  //                 aria-describedby="emailHelp"
  //                 placeholder=""
  //                 required=""
  //               />
  //               <small id="emailHelp" class="form-text text-muted">
  //                 We'll never share your email with anyone else.
  //               </small>
  //             </div>
  //             <div class="form-group">
  //               <label class="mb-2">Password</label>
  //               <input
  //                 type="password"
  //                 class="form-control"
  //                 id="exampleInputPassword1"
  //                 placeholder=""
  //                 required=""
  //               />
  //             </div>
  //             <div class="form-check mb-2">
  //               <input
  //                 type="checkbox"
  //                 class="form-check-input"
  //                 id="exampleCheck1"
  //               />
  //               <label class="form-check-label" for="exampleCheck1">
  //                 Check me out
  //               </label>
  //             </div>
  //             <button type="submit" class="btn btn-primary submit mb-4">
  //               Sign In
  //             </button>
  //           </form>
  //         </div>
  //         {/*<!---->*/}
  //       </div>
  //     </div>
  //   );
  // };

  return (
    <div>
      {/* ==================== HEADER ====================*/}
      <div class="banner-top container-fluid" id="home">
        <header>
          <div class="row">
            <div class="col-md-3 top-info text-left mt-lg-4">
              <h6>Need Help</h6>
              <ul>
                <li>
                  <i class="fas fa-phone"></i> Call
                </li>
                <li class="number-phone mt-3">12345678099</li>
              </ul>
            </div>
            <div class="col-md-6 logo-w3layouts text-center">
              <h1 class="logo-w3layouts">
                <a class="navbar-brand" href="index.html">
                  {" "}
                  Goggles{" "}
                </a>
              </h1>
            </div>

            <div class="col-md-3 top-info-cart text-right mt-lg-4">
              <ul class="cart-inner-info">
                <li class="button-log">
                  <a
                    onClick={() => handleShow_modalLogin()}
                    // class="btn-open"
                    href="#"
                  >
                    <span class="fa fa-user" aria-hidden="true"></span>
                  </a>
                </li>
                <li class="galssescart galssescart2 cart cart box_1">
                  <form action="#" method="post" class="last">
                    <input type="hidden" name="cmd" value="_cart" />
                    <input type="hidden" name="display" value="1" />
                    <button
                      class="top_googles_cart"
                      type="submit"
                      name="submit"
                      value=""
                    >
                      My Cart
                      <i class="fas fa-cart-arrow-down"></i>
                    </button>
                  </form>
                </li>
              </ul>
              {/*<!---->*/}
              <div class="overlay-login text-left">
                <button type="button" class="overlay-close1">
                  <i class="fa fa-times" aria-hidden="true"></i>
                </button>
                <div class="wrap">
                  <h5 class="text-center mb-4">Login Now</h5>
                  <div class="login p-5 bg-dark mx-auto mw-100">
                    <form action="#" method="post">
                      <div class="form-group">
                        <label class="mb-2">Email address</label>
                        <input
                          type="email"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder=""
                          required=""
                        />
                        <small id="emailHelp" class="form-text text-muted">
                          We'll never share your email with anyone else.
                        </small>
                      </div>
                      <div class="form-group">
                        <label class="mb-2">Password</label>
                        <input
                          type="password"
                          class="form-control"
                          id="exampleInputPassword1"
                          placeholder=""
                          required=""
                        />
                      </div>
                      <div class="form-check mb-2">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="exampleCheck1"
                        />
                        <label class="form-check-label" for="exampleCheck1">
                          Check me out
                        </label>
                      </div>
                      <button type="submit" class="btn btn-primary submit mb-4">
                        Sign In
                      </button>
                    </form>
                  </div>
                  {/*<!---->*/}
                </div>
              </div>
              {/*<!---->*/}
            </div>
          </div>
          <div class="search">
            <div class="mobile-nav-button">
              <button id="trigger-overlay" type="button">
                <i class="fas fa-search"></i>
              </button>
            </div>
            {/*<!-- open/close -->*/}
            <div class="overlay overlay-door">
              <button type="button" class="overlay-close">
                <i class="fa fa-times" aria-hidden="true"></i>
              </button>
              <form action="#" method="post" class="d-flex">
                <input
                  class="form-control"
                  type="search"
                  placeholder="Search here..."
                  required=""
                />
                <button type="submit" class="btn btn-primary submit">
                  <i class="fas fa-search"></i>
                </button>
              </form>
            </div>
            {/*<!-- open/close -->*/}
          </div>
          <label class="top-log mx-auto"></label>
          <nav class="navbar navbar-expand-lg navbar-light bg-light top-header mb-2">
            <button
              class="navbar-toggler mx-auto"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"> </span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav nav-mega mx-auto">
                <li class="nav-item active">
                  <a class="nav-link ml-lg-0" href="index.html">
                    Home
                    <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="about.html">
                    About
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    // href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Features
                  </a>
                  <ul class="dropdown-menu mega-menu">
                    <li>
                      <div class="row">
                        <div class="col-md-4 media-list span4 text-left">
                          <h5 class="tittle-w3layouts-sub">Tittle goes here</h5>
                          <ul>
                            <li class="media-mini mt-3">
                              <a href="shop.html">Designer Glasses</a>
                            </li>
                            <li class="">
                              <a href="shop.html"> Ray-Ban</a>
                            </li>
                            <li>
                              <a href="shop.html">Prescription Glasses</a>
                            </li>
                            <li class="mt-3">
                              <h5>View more pages</h5>
                            </li>
                            <li class="mt-2">
                              <a href="about.html">About</a>
                            </li>
                            <li>
                              <a href="customer.html">Customers</a>
                            </li>
                          </ul>
                        </div>
                        <div class="col-md-4 media-list span4 text-left">
                          <h5 class="tittle-w3layouts-sub">Tittle goes here</h5>
                          <div class="media-mini mt-3">
                            <a href="shop.html">
                              <img
                                src="images/g2.jpg"
                                class="img-fluid"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                        <div class="col-md-4 media-list span4 text-left">
                          <h5 class="tittle-w3layouts-sub">Tittle goes here</h5>
                          <div class="media-mini mt-3">
                            <a href="shop.html">
                              <img
                                src="images/g3.jpg"
                                class="img-fluid"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <hr />
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    // href="#"
                    id="navbarDropdown1"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Shop
                  </a>
                  <ul class="dropdown-menu mega-menu">
                    <li>
                      <div class="row">
                        <div class="col-md-4 media-list span4 text-left">
                          <h5 class="tittle-w3layouts-sub">Tittle goes here</h5>
                          <ul>
                            <li class="media-mini mt-3">
                              <a href="shop.html">Designer Glasses</a>
                            </li>
                            <li class="">
                              <a href="shop.html"> Ray-Ban</a>
                            </li>
                            <li>
                              <a href="shop.html">Prescription Glasses</a>
                            </li>
                            <li>
                              <a href="shop.html">Rx Sunglasses</a>
                            </li>
                            <li>
                              <a href="shop.html">Contact Lenses</a>
                            </li>
                            <li>
                              <a href="shop.html">Multifocal Glasses</a>
                            </li>
                            <li>
                              <a href="shop.html">Kids Glasses</a>
                            </li>
                            <li>
                              <a href="shop.html">Lightweight Glasses</a>
                            </li>
                            <li>
                              <a href="shop.html">Sports Glasses</a>
                            </li>
                          </ul>
                        </div>
                        <div class="col-md-4 media-list span4 text-left">
                          <h5 class="tittle-w3layouts-sub">Tittle goes here</h5>
                          <ul>
                            <li class="media-mini mt-3">
                              <a href="shop.html">Brooks Brothers</a>
                            </li>
                            <li>
                              <a href="shop.html">Persol</a>
                            </li>
                            <li>
                              <a href="shop.html">Polo Ralph Lauren</a>
                            </li>
                            <li>
                              <a href="shop.html">Prada</a>
                            </li>
                            <li>
                              <a href="shop.html">Ray-Ban Jr</a>
                            </li>
                            <li>
                              <a href="shop.html">Sferoflex</a>
                            </li>
                          </ul>
                          <ul class="sub-in text-left">
                            <li>
                              <a href="shop.html">Polo Ralph Lauren</a>
                            </li>
                            <li>
                              <a href="shop.html">Prada</a>
                            </li>
                            <li>
                              <a href="shop.html">Ray-Ban Jr</a>
                            </li>
                          </ul>
                        </div>
                        <div class="col-md-4 media-list span4 text-left">
                          <h5 class="tittle-w3layouts-sub-nav">
                            Tittle goes here
                          </h5>
                          <div class="media-mini mt-3">
                            <a href="shop.html">
                              <img
                                src="images/g1.jpg"
                                class="img-fluid"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <hr />
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="contact.html">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
      <MyModal
        size="lg"
        show={showModalLogin}
        modalTitle="Login Now"
        modalBody={modalLogin()}
        handleClose={() => handleClose_modalLogin()}
      />
    </div>
  );
}

export default Header;
