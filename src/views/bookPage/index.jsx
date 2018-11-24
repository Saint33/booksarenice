// @flow

import React from 'react';
import styled from 'styled-components';

import BookCover from '../../components/bookCover';

const Container = styled.div`

`

const Header = styled.div`
  height: 400px;
  background: linear-gradient(to right, #44BACA, #2573C3);
  padding: 0 100px;
`

const BookPage = () => {
  return (
    <Container>
      <Header>
        <BookCover 
          image="https://senselesscrutiny.files.wordpress.com/2015/07/a-thousand-nights1.jpg" 
          title="A thousand nights"/>
      </Header>
    </Container>
  )
}

export default BookPage;