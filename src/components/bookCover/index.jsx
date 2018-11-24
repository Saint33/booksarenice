// @flow
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`

`;

const Cover = styled.img`
  height: 250px;
  width: auto;
  display: inline-block;
  box-shadow: 7px 8px 18px rgba(5,0,25,0.7);
`

type Props = {
  image: string;
  title: string;
}

const BookCover = ({ image, title }: Props) => (
  <Cover src={image} alt={title}/>
)

export default BookCover;