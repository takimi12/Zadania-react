import { ReactNode, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Button } from "./Button";

type StyledWrapperProps = {
    children: ReactNode;
} 

const StyledBox = styled.div<{color:string, highlighted: boolean}>`
background-color: ${props => props.color};
padding: ${props => props.highlighted ? '30px' : '5px'};
`



export const StyledWrapper = ({children}: StyledWrapperProps) => {

    const theme = {
        colors:{
            primary: '#0242',
            textLight: 'green'
        }
    }



    const [highlighted, setHighlighted]= useState(false)


    const toggleHighlighted = () => {
        setHighlighted(prevHiglighted => !prevHiglighted)
    }
    


return (
    <>
    <ThemeProvider theme={theme}>
    <StyledBox color="#ddd" highlighted={highlighted}>
    <button onClick={toggleHighlighted} >toggle highlighted</button>
        {children}
        </StyledBox>
        <Button />
        </ThemeProvider>
        </>
    )
}