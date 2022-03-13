import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function Register() {
  // Local state
  const [username, setUserName] = useState(``);
  const [email, setEmail] = useState(``);
  const [pass, setPass] = useState(``);
  const [repass, setRePass] = useState(``);
  const [loading, setLoading] = useState(false);

  return (
    <div className="register-container">
      <div className="register-form">
        <h1>Register</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="@john"
              //   value={username}
              //   onChange={onHandleUserName}
              //   isInvalid={errorUserName}
            />
            {/* {errorUserName ? (
              <Form.Text className="text-muted">
                username min 6 char & include number
              </Form.Text>
            ) : null} */}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="john@xxx.com"
              //   value={email}
              //   onChange={onHandleEmail}
              //   isInvalid={errorEmail}
            />
            {/* {errorEmail ? (
              <Form.Text className="text-muted">email doesn't valid</Form.Text>
            ) : null} */}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              //   value={pass}
              //   onChange={onHandlePass}
              //   isInvalid={errorPass}
            />
            {/* {errorPass ? (
              <Form.Text className="text-muted">
                password minimal 6 char, include number & special char !@#%$_^;
              </Form.Text>
            ) : null} */}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Re-password</Form.Label>
            <Form.Control
              type="password"
              //   value={repass}
              //   onChange={(e) => setRePass(e.target.value)}
              //   isInvalid={errorRePass}
            />
            {/* {errorRePass ? (
              <Form.Text className="text-muted">
                password doesnt match
              </Form.Text>
            ) : null} */}
          </Form.Group>

          {/* // TODO : tampilkan error if user already exist or data is empty */}

          <Button
            variant="primary"
            // onClick={onButtonRegister}
            // disabled={loading}
          >
            {/* {loading ? (
              <Spinner animation="border" variant="light" />
            ) : (
              "Register"
            )} */}
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Register;
