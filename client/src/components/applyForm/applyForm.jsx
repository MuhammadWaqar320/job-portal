import React from "react";
import "./applyForm.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import { applyForJobIntoDb } from "../../api/jobApi";
import Footer from "../footer/footer";
import swal from "sweetalert";
import { useParams } from "react-router-dom";
import { useState } from "react";
const ApplyForm = () => {
  const [education, setEducation] = useState("");
  const [cv, setCv] = useState("");
  const [experience, setExperience] = useState("");
  const [expectedSalary, setExpectedSalary] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [address, setAddress] = useState("");
  const [comment, setComment] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [postcode, setPostcode] = useState("");
  const [cnic, setCnic] = useState("");
  const { jobId, jobSeekerId } = useParams();
  const [email, setEmail ] = useState("");
  const navigate = useNavigate();
  const registerApplication = async (e) => {
    console.log("job id", jobSeekerId);
    e.preventDefault();
    let formData = new FormData();
    formData.append("education", education);
    formData.append("cv", cv);
    formData.append("experience", experience);
    formData.append("expectedSalary", expectedSalary);
    formData.append("specialization", specialization);
    formData.append("address", address);
    formData.append("comment", comment);
    formData.append("dob", dob);
    formData.append("gender", gender);
    formData.append("postcode", postcode);
    formData.append("id", jobSeekerId);
    formData.append("jobId", jobId);
    formData.append("cnic", cnic);
    formData.append("email", email);

    const response = await applyForJobIntoDb(formData);
    if (response.success) {
      swal({
        title: "Congratulation",
        text: "You have been applied successfully",
        icon: "success",
      }).then(() => {
        // navigate("/");
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
      <div className="row register-class">
        <div className="col-sm-4"></div>
        <div className="col-sm-4 shadow-lg p-3 mb-5 bg-white rounded">
          <Form className="register-form-class" onSubmit={registerApplication}>
            <div>
              <h4 className="headTitle">Hi, Apply For Job</h4>
            </div>
            <hr style={{ marginBottom: "40px" }}></hr>
            <Form.Group className="mb-3" controlId="formGridAddress234324">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                value={email}
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter company email where you will apply"
                minLength="3"
                maxLength="200"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address:</Form.Label>
              <Form.Control
                type="text"
                value={address}
                autoComplete="off"
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter your address"
                minLength="3"
                maxLength="20"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Education:</Form.Label>
              <Form.Control
                type="text"
                value={education}
                minLength="3"
                maxLength="20"
                onChange={(e) => setEducation(e.target.value)}
                placeholder="Enter your education name"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Experience:</Form.Label>
              <Form.Control
                type="text"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                placeholder="Enter your experience"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Specialization</Form.Label>
              <Form.Control
                type="text"
                value={specialization}
                minLength="3"
                onChange={(e) => setSpecialization(e.target.value)}
                placeholder="Enter your specialization"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Expected Salary:</Form.Label>
              <Form.Control
                type="text"
                value={expectedSalary}
                onChange={(e) => setExpectedSalary(e.target.value)}
                placeholder="Enter your expected salary"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>CV/Resume</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => setCv(e.target.files[0])}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Comment:</Form.Label>
              <Form.Control
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Enter comment"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Date of birth:</Form.Label>
              <Form.Control
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                placeholder="Enter your date of birth"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Gender:</Form.Label>
              <Form.Select
                aria-label="Default select example"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option>Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Postcode:</Form.Label>
              <Form.Control
                type="text"
                value={postcode}
                onChange={(e) => setPostcode(e.target.value)}
                placeholder="Enter your postcode"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>CNIC:</Form.Label>
              <Form.Control
                type="text"
                value={cnic}
                onChange={(e) => setCnic(e.target.value)}
                placeholder="Enter your cnic"
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
    </>
  );
};

export default ApplyForm;
