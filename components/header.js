import React, { useState, useEffect } from "react";
import Link from "next/link";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Button,
  Input
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = props => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <header className="container-fluid">
      <Navbar className="navbar navbar-expand-lg navbar-light container">
        <Link href="/">
          <a style={{ cursor: "pointer" }}>
            <img
              className="navbar-brand"
              className="img-fluid"
              src="/images/logo-white.png"
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
          <Nav className="navbar-nav">
            <NavItem className="nav-item">
              <Link href="/shop">
                <a className="nav-link" id="shop">
                  Sản phẩm
                </a>
              </Link>
            </NavItem>
            <NavItem className="nav-item">
              <Link href="/news">
                <a className="nav-link" id="news">
                  Tin tức
                </a>
              </Link>
            </NavItem>
            <NavItem className="nav-item">
              <Link href="/account">
                <a
                  className="nav-link account-setting"
                  id="account"
                  data-toggle="modal"
                  data-target="#signInSignUp"
                >
                  Tài khoản
                </a>
              </Link>
            </NavItem>
          </Nav>
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
