import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../Components/DataTable/DataTable"
import "./Users.scss" 
import { userRows } from "../../data";
import { useState } from "react";
import AddModalBox from "../../Components/AddModalBox/AddModalBox";

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
      field:"img", headerName:"Avatar", width:80,
      renderCell:(params)=>{
          return <img src={params.row.img || "/noavatar.png"} alt="" />
      }
  },
  {
    field: 'firstName',
    type:"string",
    headerName: 'First name',
    width: 120,
  },
  {
    field: 'lastName',
    type:"string",
    headerName: 'Last name',
    width: 120,
  },
  {
    field: 'email',
    headerName: 'Email',
    type: 'String',
    width: 250,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: true,
    width: 200, 
    valueGetter: (params) =>
    `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'phone',
    headerName: 'Phone',
    type: 'String',
    width: 180,
  },
  {
    field: 'createdAt',
    headerName: 'Created-At',
    type: 'String',
    width: 180,
  },
  {
    field: 'verified',
    headerName: 'Verified',
    type: "boolean",
    width: 150,
  },
];



const Users = () => {

  const[ open, setOpne] = useState(false)
  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={()=>setOpne(true)}>Add New Users</button>
      </div>
        <DataTable slug="users"  columns={columns} rows={userRows}  />
        {open && <AddModalBox slug="Users" columns={columns} setOpne={setOpne} />}
    </div>
  )
}

export default Users
