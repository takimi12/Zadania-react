import { Outlet, useNavigation } from "react-router-dom";
import { AppLink } from "../odcinek92/ReactRooter/AppLink";

export const MainLayoutWithNew = () => {
    const { state } = useNavigation();

    console.log(state, 'state')
    return (
        <main>
            <header>
                <nav>
                    <ul>
                        <li><AppLink to=".">Home</AppLink></li>
                        <li><AppLink to="about">About</AppLink></li>
                        <li><AppLink to="product">Product</AppLink></li>
                        <li><AppLink to="product/details">Product Details</AppLink></li>
                        <li><AppLink to="dashboard">Dashboard</AppLink></li>
                        <li><AppLink to="path-with-loader">Path with loader</AppLink></li>
                        <li><AppLink to="ip-adress">My-ip</AppLink></li>
                    </ul>
                </nav>
            </header>
            {/* Conditionally render loading state */}
            {state === 'loading' ? <p>Loading...</p> : <Outlet />}
        </main>
    );
};
 