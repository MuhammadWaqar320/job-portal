import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./loginForm.css";
import swal from "sweetalert";
import loginPic from "../../assets/images/loginPic.png";
import { LoginApi } from "../../api/authApi";
import { isAuthenticated } from "../../utils/functions";
const LoginForm = ({ hideModal }) => {
  const login_type = [
    { type: "Job Seeker/Admin", key: 1 },
    { type: "Company", key: 2 },
  ];
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [type, setType] = React.useState(1);
  const onSubmitHandle = async (e) => {
    e.preventDefault();
    const payload = {
      email: email,
      password: password,
      type: type,
    };
    const response = await LoginApi(payload);
    if (response.success) {
      hideModal();
    } else if (!response.success) {
      swal({
        title: "Sorry",
        text: "Invalid credentials please try again",
        icon: "error",
        dangerMode: true,
      });
    }
  };
  return (
    <>
      <div className="row" style={{ padding: "30px" }}>
        <div className="col-sm-5 img-class">
          <img src={loginPic}></img>
        </div>
        <div className="col-sm-7">
          <Form onSubmit={onSubmitHandle}>
            <Form.Group className="mb-1" controlId="formBasicEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                minLength="6"
                maxLength="50"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                minLength="4"
                maxLength="20"
              />
            </Form.Group>
            <Form.Text>
              <Form.Label> Login as a:</Form.Label>
            </Form.Text>
            <Form.Select
              size="sm"
              className="mb-4"
              onChange={(e) => setType(e.target.value)}
            >
              {login_type.map((item) => {
                return (
                  <option key={item.key} value={item.key}>
                    {item.type}{" "}
                  </option>
                );
              })}
            </Form.Select>

            <Button
              variant="primary"
              type="submit"
              style={{ marginRight: "10px", background: "#0162a2" }}
            >
              Login
            </Button>
            <Button style={{background:"red"}} onClick={hideModal}>Cancel</Button>
          </Form>
        </div>
      </div>
    </>
  );
};
export default LoginForm;
