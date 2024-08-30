import { useEffect, useState } from "react";

type AgeVerfifierProps = {
    age:number;
}

export const AgeVerifier = ({age}: AgeVerfifierProps) => {

    const getContent = (age : number ) => {

        if(age >= 18) return <h1>Witaj dorosły osobniku!</h1>
        return ' *(X) wstep wzbroniony'
    }



    return (
        <div>
            {getContent(age)}
        </div>
    )


};

