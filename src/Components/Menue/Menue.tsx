import { Link } from "react-router-dom"
import "./Menue.scss"
import { menu } from "../../data"

const Menue = () => {
  return (
    <div className="menue">
      {/* Menue item fetch with the map method. data is present insude the data file in the ./src */}
        {menu.map(item=>(
          <div className="item" key={item.id}>
          <span className="title"> {item.title}</span>

           {/* This is the sub Heading of menue come from the same array */}
          {item.listItems.map(listItem=>(
            <Link to={listItem.url  } className="listItem" key={listItem.id}>
            <img src={listItem.icon} alt="" />
            <span className="listItemTitle">{listItem.title}</span>
          </Link>
        ))}
        </div>
        ))}
    </div>
  )
}

export default Menue
