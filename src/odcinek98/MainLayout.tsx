import { Link, Outlet } from "react-router-dom"

export const MainLayout = () => {
    return (
        <main>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Infos</Link>
                    </li>
                    <li>
                        <Link to="/add">Infos</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </main>
    )
}