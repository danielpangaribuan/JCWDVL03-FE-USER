import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AuthUserLogin } from "../../redux/action/auth-action";
import { useNavigate } from "react-router-dom";
import "./style.css";

function Login(props) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  // initialize navigation & redux
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, data } = useSelector((state) => {
    return {
      error: state.auth.error, // Coba liat di inspect -> redux kalo mau liat susunan ngambil error nya
      data: state.auth.data,
    };
  });
  console.log("data :", data);
  console.log("error :", error);

  const onButtonLogin = () => {
    const body = { username, password }; //Data yang mau dikirim ke API
    dispatch(AuthUserLogin(body));

    navigate("/");
  };

  // if (data) return navigate("register");

  return (
    <div>
      <div className="container">
        <h1 className="titlelogin">Login</h1>
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
              <a href="" onClick={() => navigate("register")}>
                Register Now
              </a>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
