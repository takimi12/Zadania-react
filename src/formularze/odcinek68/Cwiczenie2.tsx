import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm";

type FormValues = {
    wheels:number;
    cabrio: boolean;
    twinExhaust:boolean;
    electricWindows: boolean;
    paint: string;
}

export const Exercise269 = () => {

const [cost, setCost] = useState(0)
const [form, handleChange] = useForm<FormValues>({
    wheels:4,
    cabrio:false,
    twinExhaust:false,
    electricWindows:true,
    paint:''
})


const getCost = ({wheels, cabrio, twinExhaust, electricWindows, paint}: FormValues) => {
    let amount =0;
    amount += wheels * 150;
    amount += cabrio ? 1000 : 0;
    amount += twinExhaust ? 3000 : 0;
    amount += electricWindows ? 0 : 5000;


    switch(paint) {
        case 'metalic' : {
            amount +=100;
            break;
        }
        case 'pearl': {
            amount +=10000;
            break;
        }
        case 'mat': {
            amount += 1000;
            break;
        }
        default: break;
    }

return amount;
}

useEffect(() => {
    setCost(getCost(form))
},[form])

    return (

        <>
                <p style={{marginTop:'200px'}}> Sumaryczny koszt: {cost}</p>
        <form>
            <div>
                <label htmlFor="wheels">Ilość kół</label>
                <input id="wheels" name="wheels" type="number" value={form.wheels} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="cabrio">Otwierany dach</label>
                <input id="cabrio" name="cabrio" type="checkbox" checked={form.cabrio} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="twinExhaust">Podwójny wydech</label>
                <input id="twinExhaust" name="twinExhaust" type="checkbox" checked={form.twinExhaust} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="electricWindows">Elektryczne szyby</label>
                <input id="electricWindows" name="eleectricWindows" type="checkbox" checked={form.electricWindows} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="paint">Rodzaj lakieru</label>
                <select id="paint" name="paint" value={form.paint} onChange={handleChange} >
                   {!form.paint && <option value=""> Wybierz lakier</option>}
                    <option value="perlowy">Perłowy</option>
                    <option value="metalik">Metalik</option>
                    <option value="matowy">Matowy</option>
                 </select>
            </div>
        </form>
        </>
    )
}