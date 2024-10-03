import { Link, Outlet } from "react-router-dom"

export const AboutOutletLink = () => {
    return (
        <>
        <h1>About </h1>
        <ul>
            <li>
                <Link to='.'>About us</Link>
            </li>
            <li>
                <Link to="/about/company">About Company</Link>
            </li>
        </ul>
<Outlet />
        </>
    )
}