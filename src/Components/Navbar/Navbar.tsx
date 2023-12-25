import "./Navbar.scss"

const Navbar = () => {
  return (
    <div className="navbar">
      {/* This is for logo and Name */}
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>Waqui-Admin</span>
      </div>
      
      {/* This is fr Right side Icons and Functionality */}
      <div className="icons">
        <img src="/search.svg" alt="" className="icon" />
        <img src="/app.svg" alt="" className="icon" />
        <img src="/expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img src="https://avatars.githubusercontent.com/u/103071047?v=4" alt="" />
          <span>Waqui Khan</span>
        </div>
        <img src="/setting.svg" alt="" className="icon" />
      </div>

    </div>
  )
}

export default Navbar
