import { Suspense } from "react"
import { Link, Outlet } from "react-router-dom"

export const MainLayout = () => {
    return (
        <main>
            <nav>
                <ul>
                    <li>
                        <Link to="account">Account </Link>
                   </li>
                   <li>
                        <Link to="about">About </Link>
                   </li>
                   <li>
                    <Link to='await'>Awaited data</Link>
                   </li>
                </ul>
            </nav>
            {/* <Suspense fallback="Loading..."> */}
            <Outlet/>
            {/* </Suspense> */}
        </main>
    )
}