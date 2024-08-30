


export const ZdarzeniaEx1 = () => {

    const handleEx1 = () => {

        console.log('look at me')
    }

    const handleEx2 = () => {
        console.log('loot at him')
    }

    return (
        <>
            <div>
                <button onClick={handleEx1}>Click me</button>
                <button onMouseEnter={handleEx2}>Mouse me</button>
                

                     </div>
        </>
    );
};
