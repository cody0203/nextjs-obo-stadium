import React from 'react';
import { Container, Row } from 'reactstrap';

import {
  Children,
  TitleContainer,
  Title,
  SeeMore
} from './row-showcase.styles';

const RowShowcase = ({ children, title, link }) => {
  return (
    <Container>
      <Row>
        <TitleContainer>
          <Title>{title}</Title>
          <SeeMore href={link}>Xem Thêm</SeeMore>
        </TitleContainer>
      </Row>
      <Children>{children}</Children>
    </Container>
  );
};

export default RowShowcase;
