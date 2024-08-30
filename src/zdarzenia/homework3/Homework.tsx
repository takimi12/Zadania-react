
interface listArray{
    id:number;
    name:string;
}

type listArray1 ={
    id:number;
    name:string;
}

export const Homework3 = () => {
const listArray:listArray[] = [
    {id:1, name:'A'},
    {id:2, name:'B'},
    {id:3, name:'C'},
    {id:4, name:'D'},
    {id:5, name:'E'},
    {id:6, name:'F'},

]
const handleClick = (id:number) => {
    console.log(`kliknięto element ${id}`)
}


    return (
        <> 
        <div>
            <ul>
                {
                    listArray.map((el) => 
                    <li onClick={() => handleClick(el.id)} key={el.id}> {el.name}</li>
                    )
                }

            </ul>

        </div>
        </>
    );
};
