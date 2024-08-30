import { useRef } from "react";
import { Input } from "./Input";
import { ForwardedInput } from "./ForwardedInput";
import { LimitedForwardedInput, PartialHTMLInputElement } from "./LimitedForwardedRef";

import { CounterRef } from "./CounterRef";
// import { CounterRef } from "./CounterRef";

// referencji nie mozna przekazać jako propsa ref
// mona to zrobić tylko poprzez metodę forwardRef

export const Referencja = () => {
 



    const inputRef = useRef<HTMLInputElement>(null)

    const inputSecondRef = useRef<HTMLInputElement>(null)

    const inputThirdRef = useRef<HTMLInputElement>(null)

    const limitedInputRef = useRef<PartialHTMLInputElement>(null)

    const handleClick = () => {
        // tak sie nie powinno robić
        // document.querySelector('input')?.select()
        limitedInputRef.current?.focus()

    }




    return (
        <>
    <CounterRef />
        {/* <button onClick={handleClick}>Focus</button>
    <input type="text" ref={inputRef} />
    <Input passedRef={inputSecondRef} value="lorem ipsum" />
    <ForwardedInput  value="lorems" ref={inputThirdRef}/>
    <LimitedForwardedInput value="lorem ipsum" ref={limitedInputRef} /> */}
        </>
    );
};