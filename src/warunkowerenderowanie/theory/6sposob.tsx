import { useEffect, useState } from "react";

type AgeVerifierProps = {
    age: number;
}

// 1 - warunkowe renderewanie tekstu

// export const AgeVerifier = ({ age }: AgeVerifierProps) => {

//     return (
//         <div>
// <h1>Witaj</h1>
// {age >= 18 && 'Jesteś juz dorosły'}
//         </div>
//     );
// };

// // 2. warunkowe renderowanie calego komponentu
// export const AgeVerifier = ({ age }: AgeVerifierProps) => {

//     if(age < 18) return null;


//     return (
//         <div>
// <h1>Witaj</h1>

//         </div>
//     );
// };

// 2. warunkowe renderowanie calego komponentu
// albo zwraca jsx, albo undefined
export const AgeVerifier = ({ age }: AgeVerifierProps) => {

    if(age < 18){
     return     <div>
        <h1>Witaj</h1>
        Jesteś juz dorosly 

    </div>;
    }
};
