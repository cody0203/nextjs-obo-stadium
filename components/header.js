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
          <img
            className="navbar-brand"
            className="img-fluid"
            src="static/images/logo-white.png"
            alt="logo"
          />
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

      <div className="content text-center">
        <h1 className="slogan main-heading text-uppercase">
          BEST THINGS WITH BEST OFFERS
        </h1>
        <div className="search-form justify-content-md-center d-flex">
          <div className="container">
            <div className="row justify-content-center"></div>
          </div>
        </div>
      </div>

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
