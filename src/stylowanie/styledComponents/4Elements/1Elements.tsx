import styled, { css } from "styled-components";


const First = styled.div`
  border-radius: 10px;
  width: 250px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Second = styled.div`
  border-radius: 10px;
  width: 250px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;






export const Elements = () => {
  return (
    <>
      <First >lorem ipsum</First>
      <Second >Dolor Sit amet</Second>
    </>
  );
};
