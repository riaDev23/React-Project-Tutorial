import * as React from "react";
/* CSS IMPORT */
import "./App.css";

/* MUI TABLE IMPORT */
import { DataGrid } from "@mui/x-data-grid";
import { Paper } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "image",
    headerName: "이미지",
    width: 100,
    renderCell: (params) => (
      <img
        src={params.value}
        alt="Profile Image"
        style={{
          height: "70%",
          borderRadius: "50%",
          border: "3px solid #888",
        }}
      />
    ),
  },
  { field: "name", headerName: "이름", width: 130 },
  {
    field: "birthday",
    headerName: "생년월일",
    type: "number",
    width: 150,
  },
  { field: "gender", headerName: "성별", width: 150 },
  { field: "job", headerName: "직업", width: 150 },
];

function App() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch("/api/customers")
      .then((response) => response.json())
      .then((data) => {
        setCustomers(data.CUSTOMERS);
      })
      .catch((error) => {
        console.error("Error fetching customers:", error);
      });
  }, []);

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <DataGrid
        rows={customers}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10, 20]}
        checkboxSelection
      ></DataGrid>
    </Paper>
  );
}

export default App;
