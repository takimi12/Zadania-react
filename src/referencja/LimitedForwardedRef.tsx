import { ForwardedRef, forwardRef, useImperativeHandle, useRef } from "react";

type Props = {
    value:string;
}

export type PartialHTMLInputElement = Pick<HTMLInputElement, 'focus'>


export const LimitedForwardedInput = forwardRef(({value}: Props, ref: ForwardedRef<PartialHTMLInputElement>) => {

    // ten hoook jako 1 parametr przyjmuje reeferencje, ktora bedzie przekazana do komponentu
    // drugi parametr to metoda zwracajaca obiekt, ktory bedzie reprezentowac interfejs, ktory bedziemy widziec
    // z komponentu nadrzednego
    // 3 parametr to tablica zaleznosci

    const inputRef = useRef<HTMLInputElement>(null)

    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current?.focus()
        }
    }),[])

    return <input type="text" value={value}  ref={inputRef} />
})