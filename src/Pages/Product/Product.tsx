import Single from "../../Components/Single/Single"
import { singleProduct } from "../../data"
import "./Product.scss"

const Product = () => {

  // Fetch data and send to ./Single Component
  return (
    <div className='product'>
      {/* pass the Props from the data for the Product */}
      <Single {...singleProduct} />
    </div>
  )
}

export default Product
