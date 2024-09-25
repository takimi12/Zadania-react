import { SyntheticEvent } from "react";

type Props = {
    callback: (fromWho:string) => void;
}


export const Child = ({callback}:Props) => {



    return (
        <>
        <button
        onClick={()=> callback('parent')}>Click</button>
        </>
    )
}

