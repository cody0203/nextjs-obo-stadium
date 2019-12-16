import styled from 'styled-components';
import { Row, Col } from 'reactstrap';

export const Children = styled(Row)`
  padding-left: 0.9375rem;
  padding-right: 0.9375rem;
  flex-wrap: nowrap;
  overflow-x: auto;
  display: flex;
  @media (min-width: 768px) {
    justify-content: space-between;
  }
`;

export const TitleContainer = styled(Col)`
  margin-bottom: 3.125rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  text-transform: uppercase;
  font-weight: bold;
`;

export const Title = styled.h2`
  font-size: 1.625rem;
  margin-bottom: 0px;
`;

export const SeeMore = styled.a`
  color: #c1554e;
  font-weight: 400;
`;
