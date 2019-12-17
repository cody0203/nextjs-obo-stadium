import styled, { css } from 'styled-components';
import { RedButton } from '../../common.styles';

import {
  Collapse,
  Navbar,
  Container,
  Form,
  Input,
  NavbarToggler,
  Button
} from 'reactstrap';

const InputStyles = css`
  color: #333;
  height: auto;
  max-width: 100%;
`;

export const HeaderContainer = styled(Container)`
  background-color: #333;
  padding: 1.25rem 0px;
  background: ${props =>
    props.img ? `url(${props.img}) no-repeat center top;` : ''}
  margin-bottom: 3.125rem;
`;

export const NavbarContainer = styled(Navbar, Container)`
  padding-top: 0px;
  padding-bottom: 0px;

  @media (min-width: 992px) {
    flex-flow: row nowrap;
    justify-content: flex-start;
  }
`;

export const FormContainer = styled(Form)`
  margin: 0px 1.5rem;
  width: calc((100% - 557.016px) - 50px);

  @media (max-width: 992px) {
    width: 50%;
  }

  @media (max-width: 767.8px) {
    display: none;
  }
`;

export const Search = styled(Input)`
  ${InputStyles}
`;

export const NavLink = styled.a`
  padding: 0px 0.9375rem 0.9375rem 0.9375rem;
  margin: 0px 0.625rem;
  transition: all 0.3s ease;
  border-bottom: 3px solid transparent;
  display: block;
  ${props =>
    props.active
      ? `    border-bottom: 3px solid white;
  `
      : ''}
  color: #fff !important;

  :hover {
    border-bottom: 3px solid white;
  }

  @media (max-width: 768px) {
    border-bottom: transparent !important;
  }
`;

export const Toggler = styled(NavbarToggler)`
  border-color: #fff;

  > span {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='white' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
    color: white;
  }
`;

export const CollapseStyles = styled(Collapse)`
  text-align: center;
  @media (min-width: 768px) {
    -ms-flex-pack: end !important;
    justify-content: flex-end !important;
  }
`;

export const SearchFormSmall = styled(Form)`
  display: none;
  margin: auto;

  @media (max-width: 767.8px) {
    display: flex;
  }
`;

export const SmallSearch = styled(Input)`
  ${InputStyles}
  flex: auto;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

export const SearchButton = styled(Button)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  ${RedButton}
`;
