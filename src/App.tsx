import Backup from "./Components/Backup/Backup"
import Calender from "./Components/Calender/Calender"
import Charts from "./Components/Charts/Charts"
import Elements from "./Components/Elements/Elements"
import Footer from "./Components/Footer/Footer"
import Forms from "./Components/Forms/Forms"
import Logs from "./Components/Logs/Logs"
import Menue from "./Components/Menue/Menue"
import Navbar from "./Components/Navbar/Navbar"
import Notes from "./Components/Notes/Notes"
import Orders from "./Components/Orders/Orders"
import Posts from "./Components/Posts/Posts"
import Settings from "./Components/Settings/Settings"
import Home from "./Pages/Home/Home"
import Login from "./Pages/Login/Login"
import Product from "./Pages/Product/Product"
import Products from "./Pages/Products/Products"
import User from "./Pages/User/User"
import Users from "./Pages/Users/Users"
import "./styles/global.scss"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"

function App() {

  const Layout = () => {
    return(
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menueContainer">
            <Menue/>
          </div>
          <div className="contentContainer">
            <Outlet/>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout />,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/users",
          element:<Users/>
        },
        {
          path:"/products",
          element:<Products/>
        },
        {
          path:"/products/:id",
          element:<Product/>
        },
        {
          path:"/users/:id",
          element:<User/>
        },
        {
          path:"/notes",
          element:<Notes/>
        },
        {
          path:"/orders",
          element:<Orders/>
        },
        {
          path:"/posts",
          element:<Posts/>
        },
        {
          path:"/elements",
          element:<Elements/>
        },
        {
          path:"/forms",
          element:<Forms/>
        },
        {
          path:"/calender",
          element:<Calender/>
        },
        {
          path:"/Settings",
          element:<Settings/>
        },
        {
          path:"/backup",
          element:<Backup/>
        },
        {
          path:"/charts",
          element:<Charts/>
        },
        {
          path:"/logs",
          element:<Logs/>
        },
        {
          path:'/login',
          element:<Login />
        }
      ]
    }
  ]);


  return (
    <RouterProvider router={router} />

  )
}

export default App
