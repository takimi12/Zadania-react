import { useEffect, useState } from "react";

export const CorectUseEffectCounter = () => {
    const [people, setPeople] = useState<string[]>(['Tomek', 'Franek']);




const firstPerson = people[0]




    const addPerson = () => {

        setPeople(prevPeople => [`Lorem Ipsum ${Math.round(Math.random() * 100000)}`, ...prevPeople])
    }

    return (
        <>

         <button onClick={addPerson }> Add person</button>
         <p>Pierwsza osoba: {firstPerson}</p>
            <ul>
                {   
                people.map((person, index) => <li key={index}>{person}</li>)

                }
            </ul>

        </>
    );
};


 