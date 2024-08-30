import { useRef } from "react"
import { HomeWorkRef2, PartialHTMLFormElement } from "./ex2ex2Grygierek"
import { HomeWorkRef2v2 } from "./ex2ex2vol2Grygierek"

export const HomeWorkRef2Parent = () => {

    const formRef = useRef<HTMLFormElement>(null)

    const handleClick = () => {
        formRef.current?.requestSubmit()
    }


    return (
    <>
 <button onClick={handleClick}>send form</button>
{/* <HomeWorkRef2 ref={formRef}/> */}
<HomeWorkRef2v2 formRef={formRef} />
    </>
    )
}