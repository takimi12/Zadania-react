import {shadow} from "./helper"
import styled,  {css, ThemeProvider } from "styled-components";



const Element = styled.div<{color:string}>`
width:200px;
height:200px;
padding:30px;
border-radius: 10px;
background: #eee;
color:#111;
display:flex;
text-align:center;
justify-content:center;
align-items:center;
${shadow}

`






export const Bar = () => {

return (
    <>


    <Element color="blue">
        Lorem ipsum
    </Element>
        </>
    )
}
