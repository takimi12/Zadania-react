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
const getColoredValues = (first:string, second:string) => css`
background=color: ${first};
border: 1px solid ${second}`


const First = styled.div<{size:number, firstColor:string, secondColor:string}>`
${common}
${props => getColoredValues(props.firstColor, props.secondColor)}
`;

const Second = styled.div<{size:number, firstColor:string, secondColor:string}>`
${common}
${props => getColoredValues(props.firstColor, props.secondColor)}
`;






export const Elements = () => {
  return (
    <>
      <First size={250} firstColor="red" secondColor="green" >lorem ipsum</First>
      <Second size={100} firstColor="blue" secondColor="yellow" >Dolor Sit amet</Second>
    </>
  );
};
