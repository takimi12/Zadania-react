import React, { useState } from "react";

export const StateWithArray = () => {
    const [numbers, setNumbers] = useState<number[]>([]);
    const [user, setUser] = useState<{ name: string; age: number }>({ name: "John", age: 30 });

    const addNewElement = () => {
        const randomValue = Math.round(Math.random() * 10000);
        // numbers.push(randomValue) // bezposrednia mutacja = zle

        // const newArray = numbers; // modyfikacja oryginalnej tablicy i ponowne przekazanie jej do stanu
        // newArray.push(randomValue)
        // setNumbers(newArray)

        // const newArray = [...numbers, randomValue]; // dobrze
        // setNumbers(newArray)

        setNumbers(prevNumbers => [...prevNumbers, randomValue])
    
        // w przypadku obiektów sprawa wygląda podobnie
        // tak samo jak tworzylismy kopie tablicy, tak samo trzeba zrobic kopie obiektu
        // porownanie plytkie w przypadku tablic i obiektow porowna referencje strutkury czyli jej adres
        // porownanie glebokie patrzy na poszczegolne wlasciwosci obiektu czy zawartosc tablicy
    }

    const updateUser = () => {
        const newAge = Math.round(Math.random() * 100);
        // user.age = newAge; // bezposrednia mutacja = zle

        // const newUser = user; // modyfikacja oryginalnego obiektu i ponowne przekazanie go do stanu
        // newUser.age = newAge;
        // setUser(newUser);

        // tworzymy kopię obiektu (płytką kopię)
        const newUser = { ...user, age: newAge }; // dobrze
        setUser(newUser);

        // lub alternatywnie z wykorzystaniem funkcji aktualizującej stan:
        setUser((prevUser) => ({ ...prevUser, age: newAge }));
    };

    return (
        <>
            <button onClick={addNewElement}>Add element</button>
            <ul>
                {numbers.map((element, index) => <li key={index}>{element}</li>)}
            </ul>
            <button onClick={updateUser}>Update User</button>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
        </>
    );
}
