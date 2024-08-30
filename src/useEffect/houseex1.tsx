import React, { useEffect, useState } from "react";




const HouseWorkUseEffect = () => {

    useEffect(() => {
    console.log('Hello world')
    }, []);


return (
    <>
    <p>useEffect</p>
    </>
);
};


export default HouseWorkUseEffect;