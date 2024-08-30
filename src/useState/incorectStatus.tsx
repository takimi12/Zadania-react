import React, { useState } from 'react';

function IncorrectStatusUse() {
    let [counter, setCounter] = useState(0);
    const [counter2,setCounter2] = useState(0)

    const handleClick1 = () => {
        counter++;
        setCounter2(prevCounter2 => prevCounter2 + 1)
    };
    const handleClick = () => {
      counter =counter2;
        setCounter2(prevCounter2 => prevCounter2 + 1)
    };

    return (
        <>
            <h1>Counter1:{counter}</h1>
            <h1>Counter2:{counter2}</h1>
            <button onClick={handleClick}>Click me</button>
        </>
    );
}

export default IncorrectStatusUse;
