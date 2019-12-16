import styled from 'styled-components';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
} from 'reactstrap';

export const Shadow = styled.div`
  width: 90%;
  height: 1.5rem;
  z-index: -1;
  background: #c4c4c4;
  box-shadow: 0px 0.25rem 0.625rem rgba(0, 0, 0, 0.13) !important;
  opacity: 0;
  transition: opacity 0.3s ease;
  margin: auto;
  position: absolute;
`;

export const Sold = styled(CardText)`
  margin-bottom: 0px;
`;

export const Price = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 0.3125rem;
`;

export const PriceTextIntroduce = styled(CardText)`
  color: #767676;
  margin-bottom: 0.375rem;
`;

export const Name = styled(CardTitle)`
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25rem;
  color: #333;
  margin-bottom: 0.6875rem;
  height: 2.5rem;
  overflow: hidden;
`;

export const Body = styled(CardBody)`
  padding: 0.6875rem 1.5625rem 0.6875rem 0.6875rem;
  background-color: #fafafa;
`;

export const Image = styled(CardImg)`
  padding: 0px 0.6875rem 0px 0.6875rem;
`;

export const Product = styled(Card)`
  border: 2px solid #fafafa;
`;

export const ProductContainer = styled.a`
  position: relative;
  max-width: 230px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex: 0 0 auto;
  margin-right: 0.9375rem;
  margin-bottom: 0.625rem;

  :hover ${Shadow} {
    opacity: 1;
  }
`;
