import { Link, Outlet } from "react-router-dom"

export const MainLayout = () => {
    return (
     <main >
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to=".">Home</Link>
                    </li>
                    <li>
                        <Link to="about">About</Link>
                    </li>
                    <li>
                        <Link to="product">Product</Link>
                    </li>
                    <li>
                        <Link to="product/details">Product</Link>
                    </li>
                    <li>
                        <Link to="path-with-loader">Path With loader</Link>
                    </li>
                </ul>
            </nav>
        </header>
        <Outlet />
     </main>
    )
}