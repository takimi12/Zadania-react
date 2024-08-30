
type Props ={
    callback: (fromWho:string) => void;
}

export const ChildEx1 = ({callback}:Props) => {
    const handleClick = () => {
        callback('Child')
    }

    return (
        <>
        <button onClick={handleClick}>dd</button>
 
        </>
    );
};
