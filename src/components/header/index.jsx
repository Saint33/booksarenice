import React from 'react';
import styled from 'styled-components';

const Container = styled.header`
  position: sticky;
  top: 0;
  background-color: #75098e;
  height: 50px;
`

const Header = () => (
  <Container>
    header
  </Container>
)

export default Header;