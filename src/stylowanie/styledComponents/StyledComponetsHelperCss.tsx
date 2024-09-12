import { ReactNode, useState } from "react";
import styled, { css } from "styled-components";


type StyledWrapperProps = {
    children: ReactNode;
} 

const StyledBox = styled.div<{color:string, highlighted: boolean, shadowColor: string}>`
background-color: ${props => props.color};
padding: ${props => props.highlighted ? '30px' : '5px'};
${props => props.highlighted ? css<{shadowColor:string}> 
`box-shadow: 0px 0px 10px -10px ${props => props.shadowColor};
border: 2px solid red
` : ''}`



export const StyledWrapper = ({children}: StyledWrapperProps) => {

    const [highlighted, setHighlighted]= useState(false)


    const toggleHighlighted = () => {
        setHighlighted(prevHiglighted => !prevHiglighted)
    }
    


return (
    <>
    <StyledBox color="#ddd" shadowColor="red" highlighted={highlighted}>
    <button onClick={toggleHighlighted} >toggle highlighted</button>
        {children}
        </StyledBox>
        </>
    )
}