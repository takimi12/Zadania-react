import { useEffect, useState } from "react";

export const IncorectUseEffectCounter = () => {
    const [people, setPeople] = useState<string[]>(['Tomek', 'Franek']);
    const [firstPerson, setFirstPerson] = useState(people[0])


    useEffect(() =>{

        setFirstPerson(people[0])

    }, [people])



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


 