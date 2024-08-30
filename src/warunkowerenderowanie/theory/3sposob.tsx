import { useEffect, useState } from "react";

type AgeVerifierProps = {
    age: number;
}

export const AgeVerifier = ({ age }: AgeVerifierProps) => {
    return (
        <div>
            {age >= 18 
                ? <h1>Witaj dorosły osobniku!</h1> 
                : <span>*(X) wstęp wzbroniony</span>}
        </div>
    );
};
