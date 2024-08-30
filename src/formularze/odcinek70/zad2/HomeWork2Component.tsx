import {  ChangeEvent, useState } from "react";



export const HomeworkFormComponent = ({text}:{text:string} ) => {

let textLength = text.length
let textletter = text.replace(/\s/g, '');
let textletterLength = textletter.length







return (
    <>

<p>Długość znaków to {textLength} </p>
<p>Ilość liter to {textletterLength}</p>
</>
)
};


