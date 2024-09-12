import styled, { css } from "styled-components";

const common = css<{size:number}>`
border-radius: 10px;
width: ${props => props.size}px;
height: ${props => props.size}px;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
`


const First = styled.div<{size:number}>`
${common}
background-color:red;
border: 1px solid green;
`;

const Second = styled.div <{size:number}>`
${common}
background-color:red;
border: 1px solid green;
`;






export const Elements = () => {
  return (
    <>
      <First size={250} >lorem ipsum</First>
      <Second size={100} >Dolor Sit amet</Second>
    </>
  );
};
