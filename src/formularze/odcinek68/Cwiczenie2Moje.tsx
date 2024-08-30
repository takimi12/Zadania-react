import {  useState } from "react";


export const Exercise1169 = () => {

const [number, setNumber] = useState(0)
const [roof, setRoof] = useState(false)
const [single, setSingle] = useState(false)
const [select, setSelect] = useState("")

const handleWheelChange = (e:React.ChangeEvent<HTMLInputElement>) => {
setNumber(Number(e.target.value))

}
const handleRoofChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setRoof(e.target.checked)
}
const handleSingleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setSingle(e.target.checked)
}
const handleSelectChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
setSelect(e.target.value)
}


const summary =() => {

    const WheelsValue = number * 10;
    const OpenRoof = roof === true ? 10 : 0; 
    const Single = single === true ? 10 : 0; 
    const Selects =  select === "szary"? 10: 0 ||  select === "perlowy"? 20: 0||    select === "metalik"? 30: 0

    return WheelsValue + OpenRoof + Single + Selects
}

return (
<>
<div style={{marginTop:'200px'}}></div>
<label >
    Wybierz liczbę kół
    <input type="number" value={number} onChange={handleWheelChange} />
    </label>
    <div>
    Otwierany dach?
    <input type="checkbox" checked={roof} onChange={handleRoofChange} />
  </div>
  <div>
 Podwójny wydech
     <input type="checkbox" checked={single} onChange={handleSingleChange} />
  </div>
  <select value={select} onChange={handleSelectChange} >
    <option>   {!select && 'Wybierz kolor'}</option>
    <option value="szary">szary</option>
    <option value="perlowy">perlowy</option>
    <option value="metalik">metalik</option>
  </select>
    <p> Wartość zamówienia to :{summary()}</p>
</>
)
};