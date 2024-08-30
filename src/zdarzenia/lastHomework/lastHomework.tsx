
export const LastHomeworkZdarzenia = () => {

    const handleClick = (fromWho: string) => {
        console.log(fromWho)
    }

    return (
        <>
    <button onClick={()=> handleClick('click first')} >1</button>
    <button onClick={()=> handleClick('click second')} >2</button> 
    <button onClick={()=> handleClick('click third')} >3</button>
        </>
    );
};
