import React from "react";
import "./registerUser.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Header from "../header/header";
import Row from "react-bootstrap/Row";
import { registerUserIntoDb } from "../../api/userApi";
import Footer from "../footer/footer";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const RegisterUser = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhoneNo] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const registerUser = async (e) => {
    e.preventDefault();
    const payload = {
      name: name,
      email: email,
      phone_number: phone_number,
      password: password,
      city: city,
      role: "seeker",
    };
    const response = await registerUserIntoDb(payload);
    if (response.success) {
      swal({
        title: "Congratulation",
        text: "You have been registerd successfully",
        icon: "success",
      }).then(() => {
        navigate("/");
      });
    } else if (!response.success) {
      swal({
        title: "Sorry",
        text: "This user is already exist",
        icon: "error",
        dangerMode: true,
      });
    } else {
      swal({
        title: "Sorry ",
        text: "Something is wrong try again later",
        icon: "error",
        dangerMode: true,
      });
    }
  };
  return (
    <>
      <Header />
      <div className="row register-class">
        <div className="col-sm-4"></div>
        <div className="col-sm-4 shadow-lg p-3 mb-5 bg-white rounded">
          <Form className="register-form-class" onSubmit={registerUser}>
            <div>
              <h4 className="headTitle">Hi, User Register Here</h4>
            </div>
            <hr style={{ marginBottom: "40px" }}></hr>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                value={name}
                autoComplete="off"
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                minLength="3"
                maxLength="20"
                pattern="[A-Z a-z]+"
                title="Only alphabets are allowed"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Phone No.</Form.Label>
              <Form.Control
                type="tel"
                value={phone_number}
                minLength="10"
                maxLength="12"
                pattern="[0-9-]+"
                title="Only numbers are allowed(0-9) "
                onChange={(e) => setPhoneNo(e.target.value)}
                placeholder="Enter your phone number"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                autoComplete="new-password"
                value={password}
                minLength="6"
                maxLength="20"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>City:</Form.Label>
              <Form.Control
                type="city"
                value={city}
                minLength="3"
                maxLength="20"
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter your city"
                pattern="[A-Z a-z]+"
                title="Only alphabets are allowed"
                required
              />
            </Form.Group>
            <Button
              style={{ background: "#0162a2", color: "white" }}
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </div>
        <div className="col-sm-4"></div>
      </div>
      <Footer />
    </>
  );
};

export default RegisterUser;
