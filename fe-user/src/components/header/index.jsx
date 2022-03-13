import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form } from "react-bootstrap";
import { AuthUserLogin } from "../../redux/action/auth-action";
import { Navigate, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

// import component
import MyModal from "../modal/index.jsx";
import { render } from "react-dom";

function Header(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error, data } = useSelector((state) => {
    return {
      // error: state.auth.error,
      data: state.auth.data,
    };
  });
  dispatch(AuthUserLogin);

  // ====================== MODAL LoGIN ====================
  // const [showModalLogin, setShowModalLogin] = useState(false);
  // const handleClose_modalLogin = () => setShowModalLogin(false);
  // const handleShow_modalLogin = () => setShowModalLogin(true);

  // const ModalLogin = () => {
  //   const [username, setUserName] = useState("");
  //   const [password, setPassword] = useState("");

  //   // initialize navigation & redux
  //   const dispatch = useDispatch();
  //   const { error, data } = useSelector((state) => {
  //     return {
  //       error: state.auth.error, // Coba liat di inspect -> redux kalo mau liat susunan ngambil error nya
  //       data: state.auth.data,
  //     };
  //   });
  //   console.log("data :", data);
  //   console.log("error :", error);

  //   const onButtonLogin = () => {
  //     const body = { username, password }; //Data yang mau dikirim ke API
  //     dispatch(AuthUserLogin(body));
  //   };

  //   // if (data) {
  //   //   return <Navigate to="/" />;
  //   // }

  //   // if (data) return navigate("register");
  //   return (
  //     <Form className="form-body">
  //       <Form.Group className="mb-3" controlId="formBasicEmail">
  //         <Form.Label className="modal-title">Username</Form.Label>
  //         <Form.Control
  //           type="text"
  //           placeholder="Username"
  //           onChange={(e) => setUserName(e.target.value)}
  //         />
  //         <Form.Text className="text-muted">
  //           We'll never share your email with anyone else.
  //         </Form.Text>
  //       </Form.Group>
  //       <Form.Group className="form-password" controlId="formBasicPassword">
  //         <Form.Label className="modal-title">Password</Form.Label>
  //         <Form.Control
  //           type="password"
  //           placeholder="Password"
  //           onChange={(e) => setPassword(e.target.value)}
  //         />
  //         {error ? <Form.Text className="error">{error}</Form.Text> : null}
  //       </Form.Group>
  //       <Form.Group className="checkbox" controlId="formBasicCheckbox">
  //         <Form.Check
  //           type="checkbox"
  //           label="Remember Me"
  //           className="text-white"
  //         />
  //       </Form.Group>
  //       <div>
  //         <Button
  //           className="button-signin"
  //           // variant="warning"
  //           type="submit"
  //           onClick={onButtonLogin}
  //         >
  //           Login
  //         </Button>
  //         <p>
  //           Don't have an account ?
  //           <a href="" onClick={() => navigate("register")}>
  //             Register Now
  //           </a>
  //         </p>
  //       </div>
  //     </Form>
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
                <a className="navbar-brand" href="index.html">
                  {" "}
                  Goggles{" "}
                </a>
              </h1>
            </div>

            <div class=" flex col-md-3 top-info-cart text-right mt-lg-4">
              <ul class="cart-inner-info">
                {/* <li class="button-log">
                  <a
                    onClick={() => navigate("/login")}
                    href="#"
                    // class="btn-open"
                  >
                    <span class="fa fa-user" aria-hidden="true"></span>
                  </a>
                </li> */}
                <div>
                  <li>
                    {data ? (
                      <li className="button-login">
                        <button onClick={() => navigate("/login")} href="#">
                          Logout
                        </button>
                      </li>
                    ) : (
                      <div className="login-logout">
                        <li className="button-login">
                          <button
                            className="login"
                            onClick={() => navigate("/login")}
                            href="#"
                          >
                            Login
                          </button>
                        </li>
                        {/* <li className="button-logout">
                          <button onClick={() => navigate("/login")} href="#">
                            Logout
                          </button>
                        </li> */}
                      </div>
                    )}
                  </li>
                </div>
                {/* <li className="new-button-login">
                  <button onClick={() => navigate("/login")} href="#">
                    Login
                  </button>
                </li> */}
                <li class="galssescart galssescart2 cart cart box_1">
                  <form action="#" method="post" class="last">
                    <input type="hidden" name="cmd" value="_cart" />
                    <input type="hidden" name="display" value="1" />
                    <button
                      className="top_googles_cart"
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
      {/* <MyModal
        size="lg"
        show={showModalLogin}
        modalTitle="Login Now"
        modalBody={ModalLogin()}
        handleClose={() => handleClose_modalLogin()}
      /> */}
    </div>
  );
}

export default Header;
