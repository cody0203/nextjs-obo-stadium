import styled from 'styled-components';
import { Container, Input, Button } from 'reactstrap';

export const ContainerStyles = styled(Container)`
  margin: auto;
  margin-top: 1rem;
  margin-bottom: 3.125rem;
  background-color: #2f4858;
  color: #ffffff;
  display: flex;
  justify-content: center;
  max-width: 1920px;
`;

export const Title = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  padding-top: 3.125rem;
  line-height: 2.9375rem;
  text-align: center;
  color: #ffffff;
`;

export const SubTitle = styled.div`
  margin: 1.25rem 0px;
  text-align: center;
  color: #ffffff;
`;

export const FormContainer = styled.div`
  display: flex;
  margin-bottom: 3.125rem;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const InputStyles = styled(Input)`
  width: calc(100% - 160px);
  margin-right: 1.25rem;
  color: #333;
  height: auto;
  max-width: 100%;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 1.25rem;
  }
`;

export const ButtonStyles = styled(Button)`
  padding: 0.625rem 1.875rem;
  text-transform: uppercase !important;
  background-color: #f04e40 !important;
  border-color: #f04e40 !important;
  color: #fff !important;
`;
