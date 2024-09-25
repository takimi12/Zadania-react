import { ReactNode } from "react";

type Prop = {
    title:string;
    children: ReactNode;
}

export const Header = ({title, children}:Prop) =>{

    return (
        <>
        {title}
        {children}
         </>
    )
}