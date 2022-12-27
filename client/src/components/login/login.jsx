import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import LoginForm from "../loginForm/loginForm";
const Login = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          style={{ fontFamily: "initial" }}
        >
            <span>Login Here</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <LoginForm hideModal={props.onHide} />
      </Modal.Body>
      <Modal.Footer>
      </Modal.Footer>
    </Modal>
  );
};
export default Login;
