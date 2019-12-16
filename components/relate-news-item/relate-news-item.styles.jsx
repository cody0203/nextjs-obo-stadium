import styled from 'styled-components';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

export const News = styled(Card)`
  border: none;
`;

export const Image = styled(CardImg)`
  padding: 0px;
`;

export const Details = styled(CardBody)`
  padding: 1rem 1.25rem 1.25rem 0.625rem;
  background-color: #fafafa;
`;

export const Title = styled(CardTitle)`
  margin-bottom: 1rem;
  line-height: 1.1875rem;
  font-size: 1.25rem;
  font-size: 1rem;
  font-weight: bold;
`;

export const Description = styled(CardText)`
  color: #333;
  line-height: 1.1875rem;
`;

export const AuthorContainer = styled(CardText)`
  color: #333;
  font-size: 0.75rem;
`;

export const AuthorName = styled.span`
  color: #333;
  font-size: 0.75rem;
  font-weight: bold;
`;

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

export const NewsContainer = styled.a`
  width: 285px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex: 0 0 auto;
  margin-left: 10px;
  margin-right: 10px;
  position: relative;
  margin-bottom: 1rem;

  :hover ${Shadow} {
    opacity: 1;
  }
`;
