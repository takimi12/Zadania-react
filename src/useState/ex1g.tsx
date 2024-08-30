import React, { useState } from "react";

export const EmptyString1 = () => {
    const [text, setText] = useState('');
    const originalText = 'hello world';

    const addLetter = () => {
        const letterCount = text.length;
            console.log(letterCount, 'letter count')

        if (letterCount >= originalText.length) return;

        setText(prevText => `${prevText}${originalText[text.length]}`);
    };



    return (
        <>
            <button onClick={addLetter}>Add Letters</button>
            <h1>{text}</h1>
        </>
    );
};
