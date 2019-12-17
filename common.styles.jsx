import { css } from 'styled-components';

export const RedButton = css`
  background-color: #f04e40;
  border-color: #f04e40;
  color: white;

  :hover,
  :focus {
    background-color: #ce2e2f;
    border-color: #ce2e2f;
  }

  :active {
    background-color: #f04e40;
  }
`;

export const TextButton = css`
  cursor: pointer;
  color: #f04e40;
`;
