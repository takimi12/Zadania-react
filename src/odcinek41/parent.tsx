import { HomwewrokButton } from "./Button1"
import {HomwewrokButtonSecondary} from "./Button2"

export const Homework1 = () => {

    const handleClick = (which: string) => {
        console.log(`clicked ${which}`)
    }

    return (
        <>
<button onClick={() => handleClick('frst')}>First</button>
<HomwewrokButton label='First' onClick={handleClick}/> 
<HomwewrokButtonSecondary label="first" onClick={() => handleClick('frst')} />
        </>
    )
}
