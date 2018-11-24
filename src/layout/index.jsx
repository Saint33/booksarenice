// @flow
import * as React from 'react';
import styled from 'styled-components';

type Props = {
  children?: React.Node; 
}

const Container = styled.div`

`

const Layout = ({ children } : Props) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default Layout;