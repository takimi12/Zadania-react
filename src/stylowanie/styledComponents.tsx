import { ReactNode, useState } from "react";
import styled, { ThemeProvider, css } from "styled-components";
import { Button } from "./styledComponents/StyledCompontensTheme/Button";
import { Elements } from "./styledComponents/4Elements/Elements";

type StyledWrapperProps = {
    children: ReactNode;
} 

const StyledBox = styled.div<{color:string, highlighted: boolean, shadowColor:string}>`
background-color: ${propsss => propsss.color};
padding: ${props => props.highlighted ? '30px' : '5px'};
${props => props.highlighted ? css<{shadowColor: string}>`
box-shadow: 0px 0px 50px -10px ${props => props.shadowColor};
border: solid 3px red;` : '' }
`


export const StyledWrapper = ({children}: StyledWrapperProps) => {

    const [highlighted, setHighlighted] = useState(false)

    const toggleHighlighted = () => {
        setHighlighted(prevHighlighted => !prevHighlighted)
    }

/// tworzenie schematu przewodniego


const theme = {
    colors: {
        primary: '#0242e4',
        textLight: 'green',
    }
}




return (
    <>
<StyledBox color="ddd" shadowColor="red" highlighted={highlighted}>
    <button onClick={toggleHighlighted}>toggle highlighted</button>
        {children}
        </StyledBox>

        <ThemeProvider theme={theme}>
<Button />
<Elements />
        </ThemeProvider>
        </>
    )
}