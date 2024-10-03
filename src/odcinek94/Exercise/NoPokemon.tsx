import { Link } from "react-router-dom"

export const NoPokemon = () => {
    return (
        <div>
            Please select a pokemon or use this <link rel="alternate" href="atom.xml" type="application/atom+xml" title="Atom" />
            <Link to="pikachu">Pikachu</Link>
        </div>
    )
}