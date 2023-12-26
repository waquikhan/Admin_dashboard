import Footer from "./Components/Footer/Footer"
import Menue from "./Components/Menue/Menue"
import Navbar from "./Components/Navbar/Navbar"
import Home from "./Pages/Home/Home"
import Products from "./Pages/Products/Products"
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
          path:"users",
          element:<Users/>
        },
        {
          path:"products",
          element:<Products/>
        },
      ]
    }
  ]);


  return (
    <RouterProvider router={router} />

  )
}

export default App
