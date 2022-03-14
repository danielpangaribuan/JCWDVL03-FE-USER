import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form } from "react-bootstrap";
import $ from "jquery";
import {
  AuthUserLogin,
  AuthUserLogOut,
  AuthUserRegister,
} from "../../redux/action/auth-action";
import { Navigate, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

function Header() {
  //LOGIN
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [registerForm, setRegisterForm] = useState(false);

  //REGISTER
  const [usernameregister, setUserNameRegister] = useState("");
  const [passwordregister, setPasswordRegister] = useState("");
  const [repasswordregister, setRePasswordRegister] = useState("");
  const [emailregister, setEmailRegister] = useState("");
  const [fullnameregister, setFullNameRegister] = useState("");
  const [dateofbirthregister, setDateOfBirthRegister] = useState("");
  const [genderregister, setGenderRegister] = useState("");

  // Setup
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    $(document).ready(function () {
      $(".button-log a").click(function () {
        $(".overlay-login").fadeToggle(200);
        $(this).toggleClass("btn-open").toggleClass("btn-close");
      });
    });
    $(".overlay-close1").on("click", function () {
      $(".overlay-login").fadeToggle(200);
      $(".button-log a").toggleClass("btn-open").toggleClass("btn-close");
      // open = false;
    });
  }, []);

  const { error, data } = useSelector((state) => {
    return {
      error: state.auth.error, // Coba liat di inspect -> redux kalo mau liat susunan ngambil error nya
      data: state.auth.data,
    };
  });
  console.log("data :", data);
  console.log("error :", error);
  // dispatch(AuthUserLogin);

  const onButtonLogin = () => {
    const body = { username, password }; //Data yang mau dikirim ke API
    dispatch(AuthUserLogin(body));
  };

  const onButtonLogOut = () => {
    dispatch(AuthUserLogOut());
  };

  // if (data) return <Navigate to="/" />;

  const onButtonRegister = () => {
    // Cek Apakah password dan repassword sama
    if (passwordregister !== repasswordregister) return;
    const body = {
      username: usernameregister,
      email: emailregister,
      password: passwordregister,
      fullname: fullnameregister,
      date_of_birth: dateofbirthregister,
      gender: genderregister,
    };
    dispatch(AuthUserRegister(body));

    if (error) return;
    setRegisterForm(false);
  };

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
                <li class="button-log">
                  <a class="btn-open" href="#">
                    <span class="fa fa-user" aria-hidden="true"></span>
                  </a>
                </li>
                <div class="overlay-login text-left">
                  <button type="button" class="overlay-close1">
                    <i class="fa fa-times" aria-hidden="true"></i>
                  </button>

                  {registerForm === false ? (
                    <div class="wrap">
                      <h5 class="text-center mb-4">Login Now</h5>
                      <div class="login p-5 bg-dark mx-auto mw-100">
                        <Form className="form-body">
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label className="modal-title">
                              Username
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Username"
                              onChange={(e) => setUserName(e.target.value)}
                            />
                            <Form.Text className="text-muted">
                              We'll never share your email with anyone else.
                            </Form.Text>
                          </Form.Group>
                          <Form.Group
                            className="form-password"
                            controlId="formBasicPassword"
                          >
                            <Form.Label
                              className="modal-title"
                              autocomplete="on"
                            >
                              Password
                            </Form.Label>
                            <Form.Control
                              type="password"
                              placeholder="password"
                              onChange={(e) => setPassword(e.target.value)}
                            />
                            {error ? (
                              <Form.Text className="error">{error}</Form.Text>
                            ) : null}
                          </Form.Group>

                          <Form.Group
                            className="checkbox"
                            controlId="formBasicCheckbox"
                          >
                            <Form.Check
                              type="checkbox"
                              label="Remember Me"
                              className="text-white"
                            />
                          </Form.Group>
                          <div>
                            <Button
                              className="button-signin"
                              // variant="warning"
                              type="submit"
                              onClick={onButtonLogin}
                            >
                              Login
                            </Button>
                            <p>
                              Don't have an account ?
                              <button
                                className="button-register-now"
                                onClick={() => setRegisterForm(true)}
                              >
                                Register Now
                              </button>
                            </p>
                          </div>
                        </Form>
                      </div>
                    </div>
                  ) : (
                    <div class="wrap">
                      <h5 class="text-center mb-4">Register</h5>
                      <div class="login p-5 bg-dark mx-auto mw-100">
                        <Form className="form-body">
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label className="modal-title">
                              Email
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Email"
                              onChange={(e) => setEmailRegister(e.target.value)}
                            />
                          </Form.Group>
                          <Form.Group
                            className="form-password"
                            controlId="formBasicPassword"
                          >
                            <Form.Label className="modal-title">
                              Password
                            </Form.Label>
                            <Form.Control
                              type="password"
                              placeholder="Password"
                              onChange={(e) =>
                                setPasswordRegister(e.target.value)
                              }
                            />
                          </Form.Group>
                          <Form.Group
                            className="form-password"
                            controlId="formBasicPassword"
                          >
                            <Form.Label
                              className="modal-title"
                              autocomplete="on"
                            >
                              Re-Password
                            </Form.Label>
                            <Form.Control
                              type="password"
                              placeholder="re-password"
                              onChange={(e) =>
                                setRePasswordRegister(e.target.value)
                              }
                            />
                            {/* {error ? (
                              <Form.Text className="error">{error}</Form.Text>
                            ) : null} */}
                          </Form.Group>
                          <Form.Group
                            className="form-password"
                            controlId="formBasicPassword"
                          >
                            <Form.Label className="modal-title">
                              Username
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Username"
                              onChange={(e) =>
                                setUserNameRegister(e.target.value)
                              }
                            />
                          </Form.Group>
                          <Form.Group
                            className="form-password"
                            controlId="formBasicPassword"
                          >
                            <Form.Label className="modal-title">
                              Fullname
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Fullname"
                              onChange={(e) =>
                                setFullNameRegister(e.target.value)
                              }
                            />
                          </Form.Group>
                          <Form.Group
                            className="form-password"
                            controlId="formBasicPassword"
                          >
                            <Form.Label className="modal-title">
                              Date Of Birth
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="1997-08-06"
                              onChange={(e) =>
                                setDateOfBirthRegister(e.target.value)
                              }
                            />
                          </Form.Group>
                          <Form.Group
                            className="form-password"
                            controlId="formBasicPassword"
                          >
                            <Form.Label className="modal-title">
                              Gender
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Laki - laki atau Perempuan"
                              onChange={(e) =>
                                setGenderRegister(e.target.value)
                              }
                            />
                          </Form.Group>
                          <Form.Group
                            className="checkbox"
                            controlId="formBasicCheckbox"
                          >
                            <Form.Check
                              type="checkbox"
                              label="Remember Me"
                              className="text-white"
                            />
                          </Form.Group>
                          <div>
                            <Button
                              className="button-signin"
                              // variant="warning"
                              type="submit"
                              onClick={onButtonRegister}
                            >
                              Register
                            </Button>
                            {error ? (
                              <Form.Text className="error">{error}</Form.Text>
                            ) : null}
                            <p>
                              Already have an account ?
                              <button
                                className="button-register-now"
                                onClick={() => setRegisterForm(false)}
                              >
                                Login Now
                              </button>
                            </p>
                          </div>
                        </Form>
                      </div>
                    </div>
                  )}
                </div>
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
                {data ? (
                  <Button
                    className="logout-button"
                    variant="primary"
                    onClick={onButtonLogOut}
                  >
                    Logout
                  </Button>
                ) : (
                  ""
                )}
              </ul>
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
                <li class="nav-item dropdown">
                  <a class="nav-link" href="about.html">
                    Shop
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
