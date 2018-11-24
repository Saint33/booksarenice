// @flow
import * as React from 'react';
import styled from 'styled-components';
import Header from '../components/header';
import Footer from '../components/footer';

type Props = {
  children?: React.Node; 
}

const Container = styled.div`
  position: relative;
  height: 100%;
`

const Layout = ({ children } : Props) => {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  )
}

export default Layout;