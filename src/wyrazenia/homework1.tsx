


export const Wyrazenia = () => {

    let el1= 10
    let el2 = 11;

    function Name (name:string) {

        return <h1>{name}</h1>;
    }


    let name =prompt("Podaj swoje imię")


    return (
        <>
            <div>
         {el1+ el2}
         {Name("Tomasz")}
        <h1>{name}</h1>
                     </div>
        </>
    );
};
