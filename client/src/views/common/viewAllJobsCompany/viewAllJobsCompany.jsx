import React from 'react'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from 'react';
import { useEffect } from 'react';
import { getAllJob } from '../../../api/jobApi';
function ViewAllJobsCompany() {
  const [rows, setRows] = useState([]);
  const fetchData = async () => {
    const response = await getAllJob();
    setRows(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">TITLE</TableCell>
            <TableCell align="center">DESIGNATION</TableCell>
            <TableCell align="center">EXPERIENCE</TableCell>
            <TableCell align="center">LAST DATE</TableCell>
            <TableCell align="center">DEPARTMENT</TableCell>
            <TableCell align="center">EDIT</TableCell>
            <TableCell align="center">DELETE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                {row.id}
              </TableCell>
              <TableCell align="center">{row.title}</TableCell>
              <TableCell align="center">{row.designation}</TableCell>
              <TableCell align="center">{row.experience}</TableCell>
              <TableCell align="center">{row.lastDate}</TableCell>
              <TableCell align="center">{row.department}</TableCell>
              <TableCell align="center"><EditIcon /></TableCell>
              <TableCell align="center"><DeleteIcon/></TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ViewAllJobsCompany;