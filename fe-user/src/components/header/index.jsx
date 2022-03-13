import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form } from "react-bootstrap";
import $ from 'jquery';
import { AuthUserLogin } from "../../redux/action/auth-action";
import { Navigate, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

function Header(props) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [registerForm, setRegisterForm] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error, data } = useSelector((state) => {
    return {
      error: state.auth.error, // Coba liat di inspect -> redux kalo mau liat susunan ngambil error nya
      data: state.auth.data,
    };
  });
  dispatch(AuthUserLogin);

  const onButtonLogin = () => {
    const body = { username, password }; //Data yang mau dikirim ke API
    dispatch(AuthUserLogin(body));

    navigate("/");
  };

  useEffect(() => {
    $(".button-log a").on('click', function () {
      $(".overlay-login").fadeToggle(200);
      $(this).toggleClass('btn-open').toggleClass('btn-close');
    });
		$('.overlay-close1').on('click', function () {
			$(".overlay-login").fadeToggle(200);
			$(".button-log a").toggleClass('btn-open').toggleClass('btn-close');
			// open = false;
		});
  }, [])

  return (
    <div>
      {/* ==================== HEADER ====================*/}
      <div className="banner-top container-fluid" id="home">
        <header>
          <div className="row">
            <div className="col-md-3 top-info text-left mt-lg-4">
              <h6>Need Help</h6>
              <ul>
                <li>
                  <i className="fas fa-phone"></i> Call
                </li>
                <li className="number-phone mt-3">12345678099</li>
              </ul>
            </div>
            <div className="col-md-6 logo-w3layouts text-center">
              <h1 className="logo-w3layouts">
                <a className="navbar-brand" href="index.html">
                  {" "}
                  Goggles{" "}
                </a>
              </h1>
            </div>

            <div className=" flex col-md-3 top-info-cart text-right mt-lg-4">
              <ul className="cart-inner-info">
                <div>
                  {data ? (
                    <li className="button-login">
                      <button onClick={() => navigate("/login")} href="#">
                        Logout
                      </button>
                    </li>
                  ) : (
                    <li className="button-log">
                      <a href="#" className="btn-open" >
                        <span className="fa fa-user" aria-hidden="true"></span>
                      </a>
                    </li>
                      /* <li className="button-logout">
                        <button onClick={() => navigate("/login")} href="#">
                          Logout
                        </button>
                      </li> */
                  )}
                </div>
                {/* <li className="new-button-login">
                  <button onClick={() => navigate("/login")} href="#">
                    Login
                  </button>
                </li> */}
                <li className="galssescart galssescart2 cart cart box_1">
                  <form action="#" method="post" className="last">
                    <input type="hidden" name="cmd" value="_cart" />
                    <input type="hidden" name="display" value="1" />
                    <button
                      className="top_googles_cart"
                      type="submit"
                      name="submit"
                      value=""
                    >
                      My Cart
                      <i className="fas fa-cart-arrow-down"></i>
                    </button>
                  </form>
                </li>
              </ul>
              <div className="overlay-login text-left">
                <button type="button" className="overlay-close1">
                  <i className="fa fa-times" aria-hidden="true"></i>
                </button>
                  {
                    registerForm === false ?
                    <div className="wrap">
                      <h5 className="text-center mb-4">Login Now</h5>
                      <div className="login p-5 bg-dark mx-auto mw-100">
                        <Form className="form-body">
                          <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="modal-title">Username</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Username"
                              onChange={(e) => setUserName(e.target.value)}
                            />
                            <Form.Text className="text-muted">
                              We'll never share your email with anyone else.
                            </Form.Text>
                          </Form.Group>
                          <Form.Group className="form-password" controlId="formBasicPassword">
                            <Form.Label className="modal-title">Password</Form.Label>
                            <Form.Control
                              type="password"
                              placeholder="Password"
                              onChange={(e) => setPassword(e.target.value)}
                            />
                            {error ? <Form.Text className="error">{error}</Form.Text> : null}
                          </Form.Group>
                          <Form.Group className="checkbox" controlId="formBasicCheckbox">
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
                              <button onClick={() => setRegisterForm(true)}>
                                Register Now
                              </button>
                            </p>
                          </div>
                        </Form>
                      </div>
                    </div>
                    :
                    <div className="wrap">
                      <h5 className="text-center mb-4">Login Now</h5>
                      <div className="login p-5 bg-dark mx-auto mw-100">
                        <Form className="form-body">
                          <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="modal-title">Username</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Username"
                              onChange={(e) => setUserName(e.target.value)}
                            />
                            <Form.Text className="text-muted">
                              We'll never share your email with anyone else.
                            </Form.Text>
                          </Form.Group>
                          <Form.Group className="form-password" controlId="formBasicPassword">
                            <Form.Label className="modal-title">Password</Form.Label>
                            <Form.Control
                              type="password"
                              placeholder="Password"
                              onChange={(e) => setPassword(e.target.value)}
                            />
                            {error ? <Form.Text className="error">{error}</Form.Text> : null}
                          </Form.Group>
                          <Form.Group className="checkbox" controlId="formBasicCheckbox">
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
                              Register
                            </Button>
                            <p>
                              Already have an account ?
                              <button onClick={() => setRegisterForm(false)}>
                                Login Now
                              </button>
                            </p>
                          </div>
                        </Form>
                      </div>
                    </div>
                  }
              </div>
            </div>
          </div>
          <div className="search">
            <div className="mobile-nav-button">
              <button id="trigger-overlay" type="button">
                <i className="fas fa-search"></i>
              </button>
            </div>
            {/*<!-- open/close -->*/}
            <div className="overlay overlay-door">
              <button type="button" className="overlay-close">
                <i className="fa fa-times" aria-hidden="true"></i>
              </button>
              <form action="#" method="post" className="d-flex">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search here..."
                  required=""
                />
                <button type="submit" className="btn btn-primary submit">
                  <i className="fas fa-search"></i>
                </button>
              </form>
            </div>
            {/*<!-- open/close -->*/}
          </div>
          <label className="top-log mx-auto"></label>
          <nav className="navbar navbar-expand-lg navbar-light bg-light top-header mb-2">
            <button
              className="navbar-toggler mx-auto"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"> </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav nav-mega mx-auto">
                <li className="nav-item active">
                  <a className="nav-link ml-lg-0" href="index.html">
                    Home
                    <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link" onClick={() => navigate('/product')}>
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
