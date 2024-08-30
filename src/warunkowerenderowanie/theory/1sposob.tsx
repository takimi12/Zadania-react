import { useEffect, useState } from "react";

type AgeVerfifierProps = {
    age:number;
}

export const AgeVerifier = ({age}: AgeVerfifierProps) => {

    if(age >= 18) return (
        <div>
            <h1>Witaj dorosly osobniku!</h1>
        </div>
    )

    return (<div>
        (x) wstęp wzbroniony
    </div>
    )


};

