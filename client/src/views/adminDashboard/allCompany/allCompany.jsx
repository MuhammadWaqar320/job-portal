import React from "react";
import "./allCompany.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useState } from "react";
import { useEffect } from "react";
import { Paper } from "@mui/material";
import { getAllCompanies } from "../../../api/adminApi";
const columns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "name", headerName: "NAME", width: 140 },
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
function AllCompany() {
  const [rows, setRows] = useState([]);
  const fetchData = async () => {
    const response = await getAllCompanies();
    setRows(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
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

export default AllCompany;
