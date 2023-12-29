import { GridColDef } from "@mui/x-data-grid";
import "./AddModalBox.scss"


type Props = {
  slug:string;
  columns:GridColDef[];
  setOpne: React.Dispatch<React.SetStateAction<boolean>>
}

const AddModalBox = (props: Props) => {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();

    // add new item.
    // axios.post(`/api/$(slug)s` {})
    
  }
  return (
    <div className="addModalBox">
       <div className="modal">
        <span className="close" onClick={()=>props.setOpne(false)}>X</span>
        <h1>Add New {props.slug}</h1>
        <form onSubmit={handleSubmit}>
        {
          props.columns.filter(item=>item.field !== "id" && item.field !== "img" && item.field !== "fullName")
          .map(columns=>(
            <div className="item">
              <label>{columns.headerName}</label>
              <input type={columns.type} placeholder={columns.field} />
            </div>
          ))}
          <button>Send</button>
          </form>
       </div>
    </div>
  )
}

export default AddModalBox
