import styled, { css } from "styled-components";


const common = css<{ size: number }>`
  border-radius: 10px;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;


const getColorsValues = (first: string, second: string) => `
  background-color: ${first};
  border: 1px solid ${second};
`;


const First = styled.div<{ size: number; firstColor: string; secondColor: string }>`
  ${common}
  ${props => getColorsValues(props.firstColor, props.secondColor)}
`;


const Second = styled.div<{ size: number; firstColor: string; secondColor: string }>`
  ${common}
  ${props => getColorsValues(props.firstColor, props.secondColor)}
`;


export const Elements = () => {
  return (
    <>
      <First size={250} firstColor="red" secondColor="green">lorem ipsum</First>
      <Second size={100} firstColor="green" secondColor="red">Dolor Sit amet</Second>
    </>
  );
};
