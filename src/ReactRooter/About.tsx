import { Link, Outlet } from "react-router-dom"

export const About = () => {
    return (
        <>
        <h1>About </h1>
        {/* <ul>
            <li>
                <Link  to="/about">Abouts us </Link>
            </li>
            <li>
                <Link  to="/about/company">About Company</Link>
            </li>
        </ul>


        <ul>
            <li>
                <Link  to=".">Abouts us </Link>
            </li>
            <li>
                <Link  to="company">About Company</Link>
            </li>
        </ul>
        <ul>
            <li>
                <Link  to="..">Abouts us </Link>
            </li>
            <li>
                <Link  to="company">About Company</Link>
            </li>
        </ul> */}
        <Outlet />
        </>
    )
}