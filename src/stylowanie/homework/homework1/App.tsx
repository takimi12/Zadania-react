import { WrapperEx1 } from "./Wrapper"
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { Button } from "./Button";
import { Text } from "./Paragraph";
import { useState } from "react";

const GlobalStyle = createGlobalStyle`
body {
    background-color: ${props => props.theme.colors.background}
}
`
export const StyledHomework1 = () => {

    const [islight, setLight] = useState(true)

    const light = {
        colors:{
            primary: '#0333EE',
            textPrimary: '#fff',
            background: '#eee',
            textBackground: '#333',
        }
    }

    const dark = {
        colors:{
            primary: '#9ca5df',
            textPrimary: '#222',
            background: '#333',
            textBackground: '#eee',
        }
    }

    const toggleTheme = () => {
        setLight(prevLight => !prevLight)
    }



return (
    <>
    <ThemeProvider theme={ islight ? light : dark}>
        <GlobalStyle />
   <WrapperEx1>
    <Button onClick={toggleTheme} label="label"/>
    <Text> lorem</Text>
    </WrapperEx1>

        </ThemeProvider>
        </>
    )
}