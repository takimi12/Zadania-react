import {memo, useMemo} from 'react'

type ChildProps = {
    value:number[];
    counter:number;
}
const heavyCalculations = () => {
    console.log('Heavy calculation start');
    for(let i=0; i < 1000000 ; i++);
    return 100;
}


export const Child = memo( ({value,counter}: ChildProps) => {
    const calculatedValue = useMemo(()=>heavyCalculations(), []);
return <h1>Hello world! {value} {calculatedValue}</h1>
})