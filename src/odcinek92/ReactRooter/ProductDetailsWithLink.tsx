import { Link } from "react-router-dom"

export const ProductsDetailsWithLink = () => {
    return (
        <>
        <h1>Product: id 23232</h1>
        <Link to="/product"> go back to productt overwiev </Link>
        
        {/* // domyślnie link działa do hierarchi w jakiej jest ustawiony, ale mozemy to zmienic */}
        {/* // ze ścieki na której się znajdujemy zostanie usuniety jeden segment */}
        <Link relative="path" to=".."> go back to productt overwiev </Link>

        {/* <Link to=".."> go back to productt overwiev </Link>
        <Link reloadDocument relative="path" to=".."> go back to productt overwiev </Link>
         */}

         {/* // MONA DODAĆ reloadDocument, zeby przeladowac strone */}

         <Link reloadDocument relative="path" to=".."> go back to productt overwiev </Link>
        </>
    )
}