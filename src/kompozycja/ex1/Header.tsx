import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
children:React.ReactNode;
title:string ;
}>


export const Header = ({children,title}:Props) => {
    return (
        <>
        <div >
<h1>{title}</h1>
{children}
        </div>
        </>
    );
};
