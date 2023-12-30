import Single from "../../Components/Single/Single"
import { singleUser } from "../../data"
import "./User.scss"

const User = () => {

  // Fetch data and send to ./Single Component
  return (
    <div className="user">
      {/* pass the Props from the data for the User */}
      <Single {...singleUser} />
    </div>
  )
}

export default User
