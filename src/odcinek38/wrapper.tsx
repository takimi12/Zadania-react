import { Child } from "./child"

export const Wrapper = () => {

    const handleClick = () => {
        console.log('Clicked')
    }


    return (
        <>
<Child callback={handleClick} />        
        </>
    )
}
