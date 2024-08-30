import {  ChangeEvent, useState } from "react";
import { TextStats } from "./GrygierekComponent";

export const HomeworkForm2Grygierek = () => {
    const [text, setText] = useState('')
    const [stats, setState] = useState('')

    const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value)
    }

    const handleStateChange = (e:ChangeEvent<HTMLInputElement>) => {
setState(e.target.value)
    }

return (
    <>
    <div>
        <label htmlFor="text">Text</label>
        <textarea name='text' id='text' value={text} onChange={handleTextChange} />
    </div>
    <div>
        <label htmlFor="show">Show stats</label>
        <input type='radio' name='stats' id="show" value='show' checked={stats === 'show'} onChange={handleStateChange } />
    </div>
    <div>
        <label htmlFor="hide">Hide stats</label>
        <input type='radio' name='stats' id='hide' value='hide' checked={stats === 'hide'}  onChange={handleStateChange }/>
    </div>
{stats === 'show' && <TextStats text={text} />}




</>
)
};


