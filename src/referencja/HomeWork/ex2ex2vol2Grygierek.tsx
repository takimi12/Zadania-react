import {FormEvent, ForwardedRef, MutableRefObject, forwardRef, useImperativeHandle, useRef} from "react"

export type Props = {
    formRef: MutableRefObject<HTMLFormElement | null>
}


export const HomeWorkRef2v2 = ({formRef}:Props) => {





    const handleSubmit = (e:FormEvent<HTMLFormElement>)  => {
        e.preventDefault()

        console.log('form is being sent')
    }

    return (
    <>
    <form onSubmit={(handleSubmit)} ref={formRef}>
        <input type="test" name="login" />
        <input type="password" name="password" />

    </form>

    </>
    )
}