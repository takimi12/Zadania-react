import { NavLink } from "react-router-dom";

export type AppLinkProps = {
    to:string;
    children: React.ReactNode;
}

export const Applink = ({to, children}:AppLinkProps) => {
    return (
        <>
        {/*  atrybut end dodawane w przypadku  ścieki products i /product i /product/details*/}
    <NavLink end to={to}  style={({isActive}) => ({
        fontWeight: isActive ? 700 : 300
    })}>
        </NavLink>     
        </>
    )
}