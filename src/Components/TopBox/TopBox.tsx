import "./TopBox.scss"
import { topDealUsers } from "../../data"

const TopBox = () => {
  return (
    <div className="topBox">
      <h1>Top Deals</h1>
      <div className="list">
        {/* Top Deals item fetch with the map method. data is present insude the data file in the ./src */}
        {topDealUsers.map(user=>(
            <div className="listItem" key={user.id}>
                <div className="user">
                    <img src={user.img} alt="" />
                    <div className="userText">
                        <span className="username">{user.username}</span>
                        <span className="email">{user.email}</span>
                    </div>
                </div>
                <span className="amount">${user.amount}</span>
            </div>
        ))}
      </div>
    </div>
  )
}

export default TopBox
