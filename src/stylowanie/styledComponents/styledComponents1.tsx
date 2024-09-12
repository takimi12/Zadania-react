import { ReactNode, useState } from "react";
import styled from "styled-components";
import { Button } from "./StyledCompontensTheme/Button";

type StyledWrapperProps = {
    children: ReactNode;
} 

const StyledBox = styled.div<{color:string, highlighted: boolean}>`
background-color: ${props => props.color};
padding: ${props => props.highlighted ? '30px' : '5px'};
`



export const StyledWrapper = ({children}: StyledWrapperProps) => {

    const [highlighted, setHighlighted]= useState(false)


    const toggleHighlighted = () => {
        setHighlighted(prevHiglighted => !prevHiglighted)
    }
    


return (
    <>
    <StyledBox color="#ddd" highlighted={highlighted}>
    <button onClick={toggleHighlighted} >toggle highlighted</button>
        {children}
        </StyledBox>
        <Button />
        </>
    )
}