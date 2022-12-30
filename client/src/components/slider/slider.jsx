import React from "react";
import "./slider.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { BsFillHeartFill } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router-dom";
function Slider() {
  const [title, setTitle] = useState("");
  return (
    <div className="slider-section">
      <div className="content-section">
        <h1>
          Find a Job you love <BsFillHeartFill style={{ color: "red" }} />
        </h1>
        <Form className="d-flex search-form">
          <Form.Control
            type="search"
            placeholder="Search job by title"
            className="me-2 search-bar"
            aria-label="Search"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Link to={`/search/${title}`}>
            <Button className="btn-search-bar">Search</Button>
          </Link>
        </Form>
      </div>
    </div>
  );
}

export default Slider;
