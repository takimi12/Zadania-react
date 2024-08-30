import {FormEvent, ForwardedRef, forwardRef, useImperativeHandle, useRef} from "react"

export type PartialHTMLFormElement = {
    submit: ()=> void
}


export const HomeWorkRef2 = forwardRef((_, ref:ForwardedRef<PartialHTMLFormElement>) => {

    const formRef = useRef<HTMLFormElement>(null)

    useImperativeHandle(ref, () => {
        return {
            submit: () => {
            
                formRef.current?.requestSubmit()
            }
        }

    }, [])



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
})