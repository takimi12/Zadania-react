import { WrapperEx1 } from "./Wrapper"
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { Button } from "./Button";
import { Text } from "./Paragraph";

const GlobalStyle = createGlobalStyle`
body {
    background-color: ${props => props.theme.colors.background}
}
`
export const StyledHomework = () => {

    const light = {
        colors:{
            primary: '#0333EE',
            textPrimary: '#fff',
            background: '#eee',
            textBackground: '#333',
        }
    }
return (
    <>
    <ThemeProvider theme={light}>
        <GlobalStyle />
   <WrapperEx1>
    <Button  label="label"/>
    <Text> lorem</Text>
    </WrapperEx1>

        </ThemeProvider>
        </>
    )
}