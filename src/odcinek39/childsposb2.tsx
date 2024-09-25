import { SyntheticEvent } from "react";

type Props = {
    callback: (fromWho:string) => void;
}


export const Child = ({callback}:Props) => {
    const handleClick = () => {
        callback('Child')
    }



    return (
        <>
        <button
        onClick={handleClick}>Click</button>
        </>
    )
}

