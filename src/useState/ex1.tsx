import React, { useState } from "react";

    export const EmptyString = () => {
        const [emptyString, setEmptyString] = useState(''); // Zmienna stanu dla tekstu
        const [clickCount, setClickCount] = useState(0); // Zmienna stanu dla liczby kliknięć
        const [clic, setClick] = useState(0); // Zmienna stanu dla liczby kliknięć
    
        const handleAddLetter = () => {
            setClickCount(clickCount + 1);
    
            const letters = ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd'];
    
            // Jeśli liczba kliknięć mieści się w zakresie, dodaj literę do tekstu
            if (clickCount < letters.length) {
                setEmptyString(emptyString + letters[clickCount]);
            }
        };





    return (
        <>
            <button onClick={handleAddLetter}>Add lettersss</button>
            <h1>{emptyString}</h1>

        </>
    );
};
