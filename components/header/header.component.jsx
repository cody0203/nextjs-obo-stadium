import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Collapse, Nav, NavItem, Button, Container } from 'reactstrap';

import {
  HeaderContainer,
  NavbarContainer,
  FormContainer,
  Search,
  NavLink,
  Toggler,
  CollapseStyles,
  SearchFormSmall,
  SmallSearch,
  SearchButton
} from './header.styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../fontawesome';

const Header = ({ currentPage, title }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const menu = [
    { title: 'Sản phẩm', href: '/shop' },
    { title: 'Tin tức', href: '/news' },
    { title: 'Tài khoản', href: '/account' }
  ];

  const menuItems = menu.map(item => {
    return (
      <NavItem key={item.href}>
        <Link href={item.href}>
          <NavLink active={item.href === router.pathname ? true : false}>
            {item.title}
          </NavLink>
        </Link>
      </NavItem>
    );
  });

  const bgImg = page => {
    switch (page) {
      case '/':
        return '/assets/images/header-banner.png';
      case '/news':
        return '/assets/images/banner/news-banner.png';
      case '/shop':
      case '/account':
        return null;
      default:
        return null;
    }
  };

  return (
    <HeaderContainer img={bgImg(currentPage)} fluid={true}>
      <Container>
        <NavbarContainer expand="lg">
          <Link href="/">
            <a style={{ cursor: 'pointer' }}>
              <img
                className="img-fluid"
                src="/assets/images/logo-white.png"
                alt="logo"
              />
            </a>
          </Link>

          <FormContainer>
            <Search type="text" placeholder="Bạn cần tìm gì..." />
          </FormContainer>

          <Toggler onClick={toggle} />
          <CollapseStyles isOpen={isOpen} navbar>
            <Nav className="navbar-nav">{menuItems}</Nav>
          </CollapseStyles>
        </NavbarContainer>
      </Container>
      {title}

      <Container>
        <SearchFormSmall>
          <SmallSearch type="text" placeholder="Bạn cần tìm gì..." />
          <SearchButton>
            <FontAwesomeIcon icon="search" />
          </SearchButton>
        </SearchFormSmall>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
