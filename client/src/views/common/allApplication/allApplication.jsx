import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useState } from "react";
import { useEffect } from "react";
import { allApplication } from "../../../api/jobApi";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "react-bootstrap/esm/Button";
const columns = [
  { field: "jobId", headerName: "JOB ID", width: 90 },
  { field: "jobSeekerId", headerName: "JOB SEEKER ID", width: 140 },
  { field: "no_of_department", headerName: "DEPARTMENT", width: 140 },
  {
    field: "registeredNo",
    headerName: "REGISTERED NO.",
    sortable: false,
    width: 150,
  },
  { field: "address", headerName: "ADDRESS", width: 170 },
  { field: "website", headerName: "WEBSITE", width: 160 },
  {
    field: "email",
    headerName: "EMAIL",
    sortable: false,
    width: 160,
  },
  { field: "phoneNo", headerName: "PHONE NO", width: 150 },
];
function AllApplication() {
  const [rows, setRows] = useState([]);
  const fetchData = async () => {
    const response = await allApplication();
    console.log("--------------", response);
    setRows(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Paper elevation={10} style={{ background: "#edf4f7" }}>
      <TableContainer component={Paper} style={{ background: "#edf4f7" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center"> JOB ID</TableCell>
              <TableCell align="center">JOB SEEKER ID</TableCell>
              <TableCell align="center">EDUCATION</TableCell>
              <TableCell align="center">EXPERIENCE</TableCell>
              <TableCell align="center">EXPECTED SALARY</TableCell>
              <TableCell align="center">SPECIALIZATION</TableCell>
              <TableCell align="center">DATE OF BIRTH</TableCell>
              <TableCell align="center">CNIC</TableCell>
              <TableCell align="center">POSTCODE</TableCell>
              <TableCell align="center">CV/RESUME</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={`${row.jobId}+${row.jobSeekerId}`}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" align="center" scope="row">
                  {row.jobId}
                </TableCell>
                <TableCell align="center">{row.jobSeekerId}</TableCell>
                <TableCell align="center">{row.education}</TableCell>
                <TableCell align="center">{row.experience}</TableCell>
                <TableCell align="center">{row.expectedSalary}</TableCell>
                <TableCell align="center">{row.specialization}</TableCell>
                <TableCell align="center">{row.dob}</TableCell>
                <TableCell align="center">{row.cnic}</TableCell>
                <TableCell align="center">{row.postcode}</TableCell>
                <TableCell align="center">
                  {" "}
                  <a href={row.cv} download="myFile">
                    <Button variant="outline-primary" size="sm">
                      Download
                    </Button>
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default AllApplication;
