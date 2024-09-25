import { useEffect, useState } from "react";

type AgeVerifierProps = {
    age: number;
}

export const SimpleAgeVerifier = ({ age }: AgeVerifierProps) => {

        if(age < 18) return null;

    return (
        <div>
            <h1>Witaj</h1>
            Jesteś ju dorosły
        </div>
    );
};
