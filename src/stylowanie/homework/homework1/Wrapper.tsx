import { ReactNode } from "react";
import styled, { ThemeProvider } from "styled-components";


type WrapperProps = {
    children: ReactNode;
}


const StyledWrapper = styled.div`
padding: 30px;
background-color: ${props=> props.theme.colors.background};`

export const WrapperEx1 = ({children} : WrapperProps) => {

return (
    <>
    <StyledWrapper>
 {children}
    </StyledWrapper>
        </>
    )
}