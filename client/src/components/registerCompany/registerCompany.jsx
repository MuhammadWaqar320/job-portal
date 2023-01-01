import React from "react";
import "./registerCompany.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Header from "../header/header";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import { registerCompanyIntoDb } from "../../api/companyApi";
import Footer from "../footer/footer";
import swal from "sweetalert";
import { useState } from "react";
const RegisterCompany = () => {
  const [name, setName] = useState("");
  const [logo, setLogo] = useState("");
  const [noOfDepartment, setNoOFDepartment] = useState("");
  const [description, setDescription] = useState("");
  const [registeredNo, setRegisteredNo] = useState("");
  const [address, setAddress] = useState("");
  const [website, setWebsite] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const registerCompany = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("name", name);
    formData.append("logo", logo);
    formData.append("email", email);
    formData.append("phoneNo", phoneNo);
    formData.append("website", website);
    formData.append("address", address);
    formData.append("password", password);
    formData.append("no_of_department", noOfDepartment);
    formData.append("registeredNo", registeredNo);
    formData.append("description", description);
    const response = await registerCompanyIntoDb(formData);
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
        text: "This company is already exist",
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
          <Form className="register-form-class" onSubmit={registerCompany}>
            <div>
              <h4 className="headTitle">Hi, Company Register Here</h4>
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
              <Form.Label>Website:</Form.Label>
              <Form.Control
                type="text"
                value={website}
                minLength="3"
                maxLength="20"
                onChange={(e) => setWebsite(e.target.value)}
                placeholder="Enter your website name"
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
                value={phoneNo}
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
                value={password}
                autoComplete="new-password"
                minLength="6"
                maxLength="20"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Logo</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => setLogo(e.target.files[0])}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Description:</Form.Label>
              <Form.Control
                type="text"
                value={description}
                minLength="3"
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter description"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Address:</Form.Label>
              <Form.Control
                type="text"
                value={address}
                minLength="3"
                maxLength="20"
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter your address"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Registered No:</Form.Label>
              <Form.Control
                type="text"
                value={registeredNo}
                minLength="3"
                maxLength="20"
                onChange={(e) => setRegisteredNo(e.target.value)}
                placeholder="Enter your registered no"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>No. of department:</Form.Label>
              <Form.Control
                type="number"
                value={noOfDepartment}
                pattern="[0-9]+"
                title="Only number are allowed"
                onChange={(e) => setNoOFDepartment(e.target.value)}
                placeholder="Enter no. of department"
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

export default RegisterCompany;
