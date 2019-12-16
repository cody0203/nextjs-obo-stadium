import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Button
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../components/fontawesome";

const Header = props => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const menu = [
    { title: "Sản phẩm", href: "/shop" },
    { title: "Tin tức", href: "/news" },
    { title: "Tài khoản", href: "/account" }
  ];

  const menuItems = menu.map(item => {
    return (
      <NavItem className="nav-item" key={item.href}>
        <Link href={item.href}>
          <a
            className={
              item.href === router.pathname ? "nav-link active-nav" : "nav-link"
            }
            id="shop"
          >
            {item.title}
          </a>
        </Link>
      </NavItem>
    );
  });

  return (
    <header className="container-fluid">
      <Navbar className="navbar navbar-expand-lg navbar-light container">
        <Link href="/">
          <a style={{ cursor: "pointer" }}>
            <img
              className="navbar-brand"
              className="img-fluid"
              src="/assets/images/logo-white.png"
              alt="logo"
            />
          </a>
        </Link>

        <div className="search-form">
          <input
            className="form-control search-input col-sm-5"
            type="text"
            placeholder="Bạn cần tìm gì..."
          />
          {/* <Button className="btn btn-primary text-uppercase red-btn search-button">
            <FontAwesomeIcon icon="search" style={{ width: "16px" }} />
          </Button> */}
          <div className="search-result" />
        </div>

        <NavbarToggler onClick={toggle} />
        <Collapse
          isOpen={isOpen}
          navbar
          className="justify-content-md-end text-center"
        >
          <Nav className="navbar-nav">{menuItems}</Nav>
        </Collapse>
      </Navbar>
      {props.title}

      <div className="search-form-small">
        <input
          className="form-control search-input col-sm-5"
          type="text"
          placeholder="Bạn cần tìm gì..."
        />
        <Button className="btn btn-primary text-uppercase red-btn search-button">
          <FontAwesomeIcon icon="search" style={{ width: "16px" }} />
        </Button>
        <div className="search-result" />
      </div>
    </header>
  );
};

export default Header;
