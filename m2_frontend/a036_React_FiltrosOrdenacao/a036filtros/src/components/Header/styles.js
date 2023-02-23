import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  gap: 16px;
  padding: 16px;
  background-color:#800000;
 width: 100%;
 flex-flow: row wrap;
  top: 0;
  height: 85px;
  justify-content: space-around;

  border-bottom: 1px solid #fff;
  box-shadow: 5px 0 10px rgba(0, 0, 0, .6);
  position: fixed;
  z-index: 11;

  select, option{
    width: 100%;
    max-width: 100px;
    height: 40px;
    border-radius: 15px;
  }
`;

export const Number = styled.input`
 max-width: 50px;
 font-size: 1rem;
  height: 40px;
  text-align: center;
  border-radius: 15px;
 `