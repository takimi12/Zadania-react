import {memo, useEffect, useMemo} from 'react'

type ChildProps = {
 callback: (value:number) => void;
}

export const ChildWithFunctionProps = memo(({callback}: ChildProps) => {
 
    useEffect(() => {
        callback(Math.round(Math.random() * 10))
    }, [callback])


return(
    <p>lorem ipsum</p>
)
})