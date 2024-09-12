import { useState } from "react"

export const useCutomLogger = (prefix:string) => {

    const [logCount, setLogCount] = useState<number>(0)

    const log = (what:string) => {
        console.log(`${prefix} - ${what}`)
        setLogCount(prevCount => prevCount + 1 )
    }

    return {
         logCount,       
         log,

    }
}