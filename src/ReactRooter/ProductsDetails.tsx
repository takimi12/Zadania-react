import { Link } from "react-router-dom"

export const ProductsDetails = () => {
    return (
        <>
        <h1>Product: id 23232</h1>
        <Link to="/product"> go back to productt overwiev </Link>

        <Link to=".."> go back to productt overwiev </Link>
        <Link reloadDocument relative="path" to=".."> go back to productt overwiev </Link>
        
        </>
    )
}