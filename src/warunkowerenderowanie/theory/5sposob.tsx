import { useEffect, useState } from "react";

type AgeVerifierProps = {
    age: number;
}

export const AgeVerifier = ({ age }: AgeVerifierProps) => {

    let content:React.ReactNode = '(x) wstęĻ wzbroniony'

    if(age >= 18) {
        content = <h1>Witaj w swiecie doroslych</h1>
    }
    return (
        <div>
            {content}
        </div>
    );
};
