import { useState } from "react"
import AddModalBox from "../../Components/AddModalBox/AddModalBox"
import DataTable from "../../Components/DataTable/DataTable"
import "./Products.scss" 
import { GridColDef } from "@mui/x-data-grid";
import { product } from "../../data";

const columns: GridColDef [] = [
  {field:"id", headerName:"ID", width:90},
  {field:"img", headerName:"Image", width:100,
    renderCell: (params)=>{
      return <img src={params.row.img} alt="" />
    },
  },
  {
    field:"title",
    type:"string",
    headerName:"Title",
    width:400
  },
  {
    field:"color",
    type:"string",
    headerName:"Color",
    width:150
  },
  {
    field:"price",
    type:"string",
    headerName:"Price",
    width:150
  },
  {
    field:"producer",
    type:"string",
    headerName:"Producer",
    width:150
  },
  {
    field:"createAt",
    type:"string",
    headerName:"Create-At",
    width:150
  },
  {
    field:"inStock",
    type:"boolean",
    headerName:"In-Stock",
    width:150
  },
];


const Products = () => {
  const[ open, setOpne] = useState(false)
  return (
    <div className="products">
      <div className="info">
        <h1>Products</h1>
        <button onClick={()=>setOpne(true)}>Add New Products</button>
      </div>
        <DataTable slug="products"  columns={columns} rows={product}  />
        {open && <AddModalBox slug="Product" columns={columns} setOpne={setOpne} />}
    </div>
  )
}

export default Products
