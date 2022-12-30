import React from "react";
import moment from "moment";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

import { useState } from "react";
import { useEffect } from "react";
import { getAllUser } from "../../../api/adminApi";
import { Paper } from "@mui/material";
const columns = [
  { field: "id", headerName: "ID", width: 110 },
  { field: "name", headerName: "NAME", width: 170 },
  { field: "email", headerName: "EMAIL", width: 170 },
  {
    field: "city",
    headerName: "CITY",
    sortable: false,
    width: 160,
  },
  { field: "phone_number", headerName: "PHONE NO", width: 180 },
  {
    field: "role",
    headerName: "ROLE",
    sortable: false,
    width: 170,
  },
  {
    field: "createdAt",
    headerName: "Registered Date",
    width: 170,
    valueGetter: (params) =>
      moment(params.row.createdAt).utc().format("YYYY-MM-DD"),
  },
];
function AllUser() {
  const [rows, setRows] = useState([]);
  const fetchData = async () => {
    const response = await getAllUser();
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

export default AllUser;
