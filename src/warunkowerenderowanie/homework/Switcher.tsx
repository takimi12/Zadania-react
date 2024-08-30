import { useEffect, useState } from "react";
import { Dark } from "./Dark";
import { Light } from "./Light";
export const Switcher = () => {
    const [text, setText] = useState('Turn On')
    const [isTurnedOn, setisTurnedOn] = useState(false)

    const handleClick =() =>{

        setisTurnedOn(prevTurnedOn => !prevTurnedOn)

 
    }


    return (
        <div>
            <button onClick={handleClick}>{isTurnedOn ? 'Turn off' : 'Turn On'}</button>
        {isTurnedOn === false ?
        <Light  />
        :
        <Dark  />
        
}
        </div>
    )

};
