
import styled,  {css, ThemeProvider } from "styled-components";



// const Element = styled.div`
// width:200px;
// height:200px;
// padding:30px;
// border-radius: 10px;
// background: #eee;
// color:#111;
// display:flex;
// text-align:center;
// justify-content:center;
// align-items:center;

// &:hover {
//     box-shadow: 0 0 50px -10px red;
// }
// `


const shadow = css<{color:string}>`
&:hover {
    box-shadow: 0 0 50px -10px ${props => props.color}
}`


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






export const Foo = () => {

return (
    <>


    <Element color="red">
        Lorem ipsum
    </Element>
        </>
    )
}
