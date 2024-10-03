import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./Home";
import {Pokemon } from "./PokemonBig"
import { pokemonLoader } from "./pokemonLoaders";
import { NoPokemon } from "./NoPokemon";
import { PokemonErrorElement } from "./PokemonErrorElement";


const routes = createBrowserRouter([
    {
        path: 'home',
        element: <Home />,
        children: [
            {
                path: 'pokemon/:name?',
                element: <Pokemon />,
                errorElement: <PokemonErrorElement />,
                loader: pokemonLoader
            },
            {
                path: 'pokemon',
                element: <NoPokemon />,
             }
        ]
    },
    {
        path: '*',
        element: <Navigate to="home" />
    }
])

export const   AppEx1od94 = () => {
    return <RouterProvider router={routes} />;
}