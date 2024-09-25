import { SyntheticEvent } from "react";
import { Child } from "./childsposb2";

type Props = {
    callback: () => void;
}


export const Parent= () => {

    const handleClick = (fromWho:string) => {
        console.log('Clicked from child', fromWho)
    }

    return (
        <>
        <button
        onClick={() =>handleClick('dd')}>Click</button>
        <Child callback={handleClick} />
        </>
    )
}

