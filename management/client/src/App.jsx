import * as React from "react";
/* CSS IMPORT */
import "./App.css";

/* COMPONENTS IMPORT */


/* MUI TABLE IMPORT */
import { DataGrid } from "@mui/x-data-grid";
import { Paper } from "@mui/material";

const CUSTOMERS = [
  {
    id: 1,
    image: "https://picsum.photos/150/150",
    name: "강리아",
    birthday: "901014",
    gender: "남",
    job: "백수",
  },
  {
    id: 2,
    image: "https://picsum.photos/151/151",
    name: "쇼째즈",
    birthday: "910201",
    gender: "남",
    job: "백수",
  },
  {
    id: 3,
    image: "https://picsum.photos/152/152",
    name: "홍길동",
    birthday: "950102",
    gender: "남",
    job: "도적",
  },
  {
    id: 4,
    image: "https://picsum.photos/152/152",
    name: "홍길동",
    birthday: "950102",
    gender: "남",
    job: "도적",
  },
  {
    id: 5,
    image: "https://picsum.photos/152/152",
    name: "홍길동",
    birthday: "950102",
    gender: "남",
    job: "도적",
  },
  {
    id: 6,
    image: "https://picsum.photos/152/152",
    name: "홍길동",
    birthday: "950102",
    gender: "남",
    job: "도적",
  },
  {
    id: 7,
    image: "https://picsum.photos/152/152",
    name: "홍길동",
    birthday: "950102",
    gender: "남",
    job: "도적",
  },
  {
    id: 8,
    image: "https://picsum.photos/152/152",
    name: "홍길동",
    birthday: "950102",
    gender: "남",
    job: "도적",
  },
  {
    id: 9,
    image: "https://picsum.photos/152/152",
    name: "홍길동",
    birthday: "950102",
    gender: "남",
    job: "도적",
  },
  {
    id: 10,
    image: "https://picsum.photos/152/152",
    name: "홍길동",
    birthday: "950102",
    gender: "남",
    job: "도적",
  },
  {
    id: 11,
    image: "https://picsum.photos/152/152",
    name: "홍길동",
    birthday: "950102",
    gender: "남",
    job: "도적",
  },
  {
    id: 12,
    image: "https://picsum.photos/152/152",
    name: "홍길동",
    birthday: "950102",
    gender: "남",
    job: "도적",
  },
  {
    id: 13,
    image: "https://picsum.photos/152/152",
    name: "홍길동",
    birthday: "950102",
    gender: "남",
    job: "도적",
  },
];

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
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <DataGrid
        rows={CUSTOMERS}
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
