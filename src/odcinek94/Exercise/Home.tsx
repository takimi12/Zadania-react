import { Link, Outlet } from "react-router-dom"

export const Home = () => {
    return (
        <main>
            <nav>
                <ul>
                    <li>
                        <Link to="pokemon/pikachu">Pikachu</Link>
                    </li>
                    <li>
                        <Link to="pokemon/chairizard">Charizard</Link>
                    </li>
                    <li>
                        <Link to="pokemon/bulbasaur">Bulbasaur</Link>
                    </li>
                    <li>
                        <Link to="pokemon/unsdfwj">Incorect  name</Link>
                    </li>
                </ul>
            </nav>
            <section>
                <Outlet />
            </section>
        </main>
    )
}