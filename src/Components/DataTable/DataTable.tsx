import { DataGrid, GridColDef, GridToolbar, GridValueGetterParams } from "@mui/x-data-grid"
import "./DataTable.scss"
import { Link } from "react-router-dom"


type Props = {
    columns:GridColDef[],
    rows:object[],
    slag:string,
}

const DataTable = (props: Props) => {

    const handleDelete = (id:number) =>{
        console.log(id + "data is deleted")
    }

    const actionColumn: GridColDef = {
        field:"action",
        headerName:"Action",
        width:200,
        renderCell:(params) =>{
            return(
                <div className="action">
                    <Link to={`/${props.slag}/${params.row.id}`} >
                        <img src="/view.svg" alt="" />
                    </Link>
                    <div className="delete" onClick={()=>handleDelete(params.row.id)}>
                        <img src="/delete.svg" alt="" />
                    </div>
                </div>
            )
        }
    }
  return (
    <div className="dataTable">
         <DataGrid
         className="dataGrid"
        rows={props.rows}
        columns={[...props.columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{toolbar:GridToolbar}}
        slotProps={{
            toolbar:{
                showQuickFilter:true,
                quickFilterProps:{debounceMs:500},
            }
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
      />
    </div>
  )
}

export default DataTable
