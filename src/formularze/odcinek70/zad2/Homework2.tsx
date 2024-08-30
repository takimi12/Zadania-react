import {  ChangeEvent, useState } from "react";
import { HomeworkFormComponent } from "./HomeWork2Component";


export const HomeworkForm222 = () => {
const [text, setText] = useState('')

const [show,setShow] = useState('')


let textLength = text.length

let textletter = text.replace(/\s/g, '');
let textletterLength = textletter.length


const handleChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
setText(e.target.value)
}

const handleShow = (e:ChangeEvent<HTMLInputElement>) => {
setShow(e.target.value)
}



return (
    <>
<label htmlFor="show">Pokaz</label>
<input id="show" name="show" type="radio" value='show' onChange={handleShow}  checked={show === 'show'}/>
<label htmlFor="hide">Ukryj</label>
<input id="hide" name="hide" type="radio" value='hide' onChange={handleShow} checked={show === 'hide'} />
<textarea value={text} onChange={handleChange}></textarea>


<div style={{ display: show === 'show' ? 'block' : 'none' }}>
<HomeworkFormComponent text={text} />
</div>
</>
)
};


