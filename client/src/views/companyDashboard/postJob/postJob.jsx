import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import { postJob } from "../../../api/jobApi";
import swal from "sweetalert";
import { useParams } from "react-router-dom";
import "./postJob.css";
import { useState } from "react";
import Footer from "./../../../components/footer/footer";
const PostJob = ({ id }) => {
  const [title, setTitle] = useState("");
  const [pic, setPic] = useState("");
  const [location, setLocation] = useState("");
  const [department, setDepartment] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [lastDate, setLastDate] = useState("");
  const [salary, setSalary] = useState("");
  const [designation, setDesignation] = useState("");
  const [experience, setExperience] = useState("");
  const [vecancies, setVecancies] = useState("");
  const navigate = useNavigate();
  const registerApplication = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("title", title);
    formData.append("picture", pic);
    formData.append("location", location);
    formData.append("department", department);
    formData.append("description", description);
    formData.append("type", type);
    formData.append("lastDate", lastDate);
    formData.append("salary", salary);
    formData.append("designation", designation);
    formData.append("experience", experience);
    formData.append("companyId", Number(id));
    formData.append("noOfVecancies", vecancies);
    const response = await postJob(formData);
    if (response.success) {
      swal({
        title: "Congratulation",
        text: "New job has been posted successfully",
        icon: "success",
      }).then(() => {
        navigate("/company-dashboard");
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
      <div className="row container post-class">
        <div className="col-sm-3"></div>
        <div className="col-sm-6 shadow-lg p-3 mb-5 bg-white rounded">
          <Form className="register-form-class" onSubmit={registerApplication}>
            <div>
              <h4 className="headTitle">Hi, Post New Job</h4>
            </div>
            <hr style={{ marginBottom: "40px" }}></hr>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Title:</Form.Label>
              <Form.Control
                type="text"
                value={title}
                autoComplete="off"
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter job title"
                minLength="3"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Department:</Form.Label>
              <Form.Control
                type="text"
                value={department}
                minLength="3"
                maxLength="20"
                onChange={(e) => setDepartment(e.target.value)}
                placeholder="Enter department"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Experience:</Form.Label>
              <Form.Control
                type="text"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                placeholder="Enter experience"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Description</Form.Label>
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
              <Form.Label>Type:</Form.Label>
              <Form.Control
                type="text"
                value={type}
                onChange={(e) => setType(e.target.value)}
                placeholder="Enter type of job permanent or contract"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Thumbnail</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => setPic(e.target.files[0])}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Salary:</Form.Label>
              <Form.Control
                type="text"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                placeholder="Enter salary"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Last Date:</Form.Label>
              <Form.Control
                type="date"
                value={lastDate}
                onChange={(e) => setLastDate(e.target.value)}
                placeholder="Enter last date"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Location:</Form.Label>
              <Form.Control
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter location"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Designation:</Form.Label>
              <Form.Control
                type="text"
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
                placeholder="Enter designation"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Vecancies:</Form.Label>
              <Form.Control
                type="number"
                value={vecancies}
                onChange={(e) => setVecancies(e.target.value)}
                placeholder="Enter no of vecancies"
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
        <div className="col-sm-3"></div>
      </div>
    </>
  );
};

export default PostJob;
