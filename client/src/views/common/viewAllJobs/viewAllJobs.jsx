import React from 'react'
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useState } from 'react';
import { useEffect } from 'react';
import { getAllJob } from '../../../api/jobApi';
import { Paper } from '@mui/material';
const columns = [
  { field: "id", headerName: "ID", width: 50 },
  { field: "title", headerName: "TITLE", width: 110 },
  { field: "salary", headerName: "SALARY", width: 110 },
  { field: "designation", headerName: "DESIGNATION", sortable: false, width: 130 },
  { field: "experience", headerName: "EXPERIENCE", width: 120 },
  { field: "noOfVecancies", headerName: "VECANCIES", width: 130 },
  { field: "department", headerName: "DEPARTMENT", sortable: false, width: 130 },
  { field: "lastDate", headerName: "LAST DATE", width: 130 },
  {
    field: "location",
    headerName: "LOCATION",
    width: 90,
  },
  {
    field: "type",
    headerName: "TYPE",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.type || ""} ${params.row.type || ""}`,
  },
];
function ViewAllJobs() {

  const [rows, setRows] = useState([])
  const fetchData = async () => {
      const response = await getAllJob();
      setRows(response.data);
  }
  useEffect( () => {
    fetchData();
  },[])
  return (
    <Paper elevation={10} style={{ background: "#edf4f7" }}>
      <div style={{ height: 500, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[8]}
          checkboxSelection
          components={{ Toolbar: GridToolbar }}
        />
      </div>
    </Paper>
  );
}

export default ViewAllJobs