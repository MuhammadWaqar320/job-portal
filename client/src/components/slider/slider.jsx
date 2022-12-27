import React from 'react'
import "./slider.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { BsFillHeartFill } from "react-icons/bs";
function Slider() {
  return (
    <div className="slider-section">
      <div className='content-section'>
        <h1>Find a Job you love <BsFillHeartFill style={{color:"red"}} /></h1>
        <Form className="d-flex search-form">
          <Form.Control
            type="search"
            placeholder="Search job by title"
            className="me-2 search-bar"
            aria-label="Search"
          />
          <Button className="btn-search-bar">Search</Button>
        </Form>
      </div>
    </div>
  );
}

export default Slider