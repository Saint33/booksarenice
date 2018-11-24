// @flow
import * as React from 'react';
import styled from 'styled-components';

const Container = styled.button`
  display: inline-block;
  border-radius: 100px;
  width: 200px;
  height: 40px;
  background-color: rgb(0, 118, 255, 0.9);
  color: white;
  font-family: 'Open-Sans', sans-serif;
  font-weight: normal;
  font-size: 18px;
  border: none;
  box-shadow: 0 4px 10px rgba(135, 167, 171, 0.5);
  transition: 0.2s;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: rgb(0, 118, 255, 1);
  }
`

type Props = {
  text: string;
  handler?: Function;
}

const Button = ({ text, handler } : Props) => (
  <Container>
    {text}
  </Container>
)

export default Button;