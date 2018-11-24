// @flow
import * as React from 'react';
import styled from 'styled-components';

const Container = styled.button`
  display: inline-block;
  border-radius: 15px;
  width: 200px;
  height: 40px;
  background-color: #0B92E7;
  color: white;
  font-family: 'Open-Sans', sans-serif;
  font-weight: normal;
  font-size: 18px;
  border: none;
  &:focus {
    outline: none;
  }
  &:hover {
    
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