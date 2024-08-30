import { SyntheticEvent } from "react";

export const GoogleRedirect = () => {
    


    const handleClick = (e:SyntheticEvent) => {

        const random = Math.random();


        if(random < 0.5) e.preventDefault();

    }

    return (
        <>
        <a onClick={handleClick} href="https://www.google.pl">Go to google</a>
         </>
    );
};
