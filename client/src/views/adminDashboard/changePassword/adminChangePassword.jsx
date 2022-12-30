import { Paper } from "@mui/material";
import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { changePasswordAdmin } from "../../../api/adminApi";
function AdminChangePassword({ id }) {
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const successMessage = (content) => {
    toast.success(content, {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  const errorMessage = (content) => {
    toast.error(content, {
      position: toast.POSITION.TOP_LEFT,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      old_password: oldPass,
      new_password: newPass,
    };

    const response = await changePasswordAdmin(payload, id);
    if (response.data.success) {
      successMessage("Password has been updated");
    } else if (!response.data.success) {
      errorMessage("Please enter correct old password");
    } else {
      errorMessage("Something is wrong");
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "50px 0px",
      }}
    >
      <Paper
        elevation={10}
        style={{ width: "360px", padding: "20px", background: "#edf4f7" }}
      >
        <Form onSubmit={handleSubmit}>
          <div style={{ textAlign: "center", marginBottom: "30px" }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/97/Avast_Passwords_logo.png"
              height="70px"
              style={{ marginBottom: "10px" }}
            />
            <p
              style={{
                fontFamily: "initial",
                fontWeight: "bold",
                fontSize: "24px",
              }}
            >
              Change Password
            </p>
          </div>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Old Password</Form.Label>
            <Form.Control
              type="password"
              value={oldPass}
              onChange={(e) => setOldPass(e.target.value)}
              placeholder="Enter old password"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>New Password</Form.Label>
            <Form.Control
              type="password"
              value={newPass}
              onChange={(e) => setNewPass(e.target.value)}
              placeholder="Enter new password"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Change
          </Button>
        </Form>
        <ToastContainer />
      </Paper>
    </div>
  );
}

export default AdminChangePassword;
