import { SyntheticEvent } from "react";

type Props = {
    callback: () => void;
}


export const Child = ({callback}:Props) => {

    const handleClick = (e:SyntheticEvent) => {
        console.log('Clicked from child', e)
    }

    return (
        <>
        <button
        onClick={handleClick}>Click</button>
        </>
    )
}

