import {ChildEx1} from "./Child"


export const ParentEx1 = () => {

    const handleClick = (fromWho: string) => {
    console.log(`Hello from ${fromWho}`)
    }

    return (
        <>
        <button onClick={()=> handleClick('Parent')}></button>
        <ChildEx1  callback={handleClick} />

        </>
    );
};
