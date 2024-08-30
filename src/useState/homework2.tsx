import React, { useState } from 'react';

const NumberList: React.FC = () => {
    // Explicitly define the type of the state as number[]
    const [numbers, setNumbers] = useState<number[]>([]);

    const addNumber = () => {
        const max = 10; // Example max value
        const newNumber = Math.floor(Math.random() * max);
        
        // Update the state with the new number
        setNumbers(prevNumbers => [...prevNumbers, newNumber]);
    };

    return (
        <div>
            <button onClick={addNumber}>Add Number</button>
            <ul>
                {numbers.map((number, index) => (
                    <li key={index}>{number}</li>
                ))}
            </ul>
        </div>
    );
};

export default NumberList;
