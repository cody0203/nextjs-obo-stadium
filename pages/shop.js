import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import {
  Collapse,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import { connect } from "react-redux";
import { FormattedNumber } from "react-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../components/fontawesome";

import FilterBar from "../components/filter-bar";
// import FilterBarSmall from "../components/filter-bar-small";
import Layout from "../components/layout";
import Aux from "../components/hoc/aux";
import { clearFilter } from "../redux/actions/filter";

function mapDispatchToProps(dispatch) {
  return {
    clearFilter: () => dispatch(clearFilter())
  };
}

// function mapStateToProps(state) {
//   return {
//     products: state.productReducer.products
//   };
// }

const ConnectedShop = props => {
  // States
  const [isOpen, setIsOpen] = useState(false);

  const [sortBy, setSortBy] = useState({
    conditions: [
      "Hàng mới",
      "Bán chạy",
      "Giá thấp đến cao",
      "Giá cao đến thấp"
    ],
    chose: "Hàng mới"
  });

  const [filterModal, setFilterModal] = useState(false);

  const toggleFilterModal = () => {
    setFilterModal(!filterModal);
  };

  // Life cycles
  useEffect(() => {
    document.addEventListener("click", toggleSort);
    return () => {
      document.removeEventListener("click", toggleSort);
    };
  });

  // Methods

  // Toggle Sort
  const toggleSort = event => {
    if (event.target.classList.contains("sorting")) {
      setIsOpen(!isOpen);
    } else {
      setIsOpen(false);
    }
  };

  // choose Sort
  const chooseSort = condition => {
    setSortBy({
      ...sortBy,
      chose: condition
    });
  };

  // Renderes

  // Render products
  const product = props.products.map(product => {
    return (
      <Link href="/shop/[id]" as={`/shop/${product.id}`} key={product.id}>
        <a className="product-link" data-brand="${data[i]['brand']}">
          <div className="product position-relative">
            <div className="card">
              <img
                src={product.thumbnail}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text price-desc">Giá thấp nhất hiện tại</p>
                <p className="price">
                  <FormattedNumber
                    style="currency"
                    currency="VND"
                    value={product.sell_price}
                  />
                </p>
                <p className="card-text sold">
                  Đã bán {product.total_sold} đôi
                </p>
              </div>
            </div>
            <div className="shadow mx-auto position-absolute" />
          </div>
        </a>
      </Link>
    );
  });

  // Render sort by

  const sortByItems = sortBy.conditions.map(condition => {
    if (condition === sortBy.chose) {
      return (
        <Aux key={condition}>
          <div
            className="sort-item active"
            onClick={chooseSort.bind(null, condition)}
          >
            {condition}
          </div>
        </Aux>
      );
    } else {
      return (
        <Aux key={condition}>
          <div className="sort-item" onClick={chooseSort.bind(null, condition)}>
            {condition}
          </div>
        </Aux>
      );
    }
  });

  return (
    <Layout>
      <Head>
        <title>Cửa hàng</title>
        <link
          rel="stylesheet"
          type="text/css"
          href="/css/components/products.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/css/components/shop/filter-bar.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/css/components/shop/product-showing.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/css/components/shop/filter-bar-small.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/css/except-home-page.css"
        />
      </Head>
      <main>
        <div className="breadcrumb container">
          <Link href="/index">
            <a className="previous-page">Trang chủ</a>
          </Link>
          <FontAwesomeIcon icon="chevron-right" className="arrow" />
          <span className="current-page">Sản phẩm</span>
        </div>
        <div className="shop-content-wrapper container">
          <div className="row">
            <FilterBar a={props} />
            <div className="product-showing col-lg-9 col-12">
              <div className="sort">
                <div className="sort-content sorting">
                  Sắp xếp theo
                  <span className="sorting sort-name">{sortBy.chose}</span>
                  <FontAwesomeIcon icon="chevron-down" className="sorting" />
                </div>
                <Collapse timeout={0} isOpen={isOpen}>
                  <div className="sort-dropdown">{sortByItems}</div>
                </Collapse>
                <div className="filter-icon" onClick={toggleFilterModal}>
                  <FontAwesomeIcon icon="filter" />
                </div>
              </div>
              <div className="product-row">{product}</div>
            </div>
          </div>
        </div>
        {/* <FilterBarSmall
          filterModal={filterModal}
          toggleFilterModal={toggleFilterModal}
        /> */}
        <div
          className="modal fade"
          id="signInSignUp"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="signInSignUpLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <ul className="nav nav-pills" id="pills-tab" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="signIn-tab"
                      data-toggle="pill"
                      href="#signIn"
                      role="tab"
                      aria-controls="signIn"
                      aria-selected="true"
                    >
                      Đăng nhập
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="signUp-tab"
                      data-toggle="pill"
                      href="#signUp"
                      role="tab"
                      aria-controls="signUp"
                      aria-selected="false"
                    >
                      Đăng ký
                    </a>
                  </li>
                </ul>
              </div>
              <div className="modal-body">
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="signIn"
                    role="tabpanel"
                    aria-labelledby="signIn-tab"
                  >
                    <form>
                      <input
                        className="form-control sign-in-email"
                        placeholder="Email"
                        autoComplete="autocomplete"
                      />
                      <div className="invalid-feedback"> </div>
                      <input
                        className="form-control sign-in-password"
                        type="password"
                        placeholder="Mật khẩu"
                        autoComplete="autocomplete"
                      />
                      <div className="invalid-feedback"> </div>
                      <div className="forgot-password-wrapper" />
                      Quên mật khẩu? Nhấn vào{" "}
                      <span className="text-btn">đây</span>
                      <div className="btn btn-primary red-btn sign-in-btn">
                        Đăng nhập
                      </div>
                    </form>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="signUp"
                    role="tabpanel"
                    aria-labelledby="signUp-tab"
                  >
                    <form>
                      <input
                        className="form-control sign-up-full-name"
                        placeholder="Họ và tên *"
                        autoComplete="autocomplete"
                      />
                      <div className="invalid-feedback"> </div>
                      <input
                        className="form-control sign-up-phone"
                        placeholder="Số điện thoại *"
                        autoComplete="autocomplete"
                      />
                      <div className="invalid-feedback"> </div>
                      <input
                        className="form-control sign-up-email"
                        placeholder="Email *"
                        autoComplete="autocomplete"
                      />
                      <div className="invalid-feedback"> </div>
                      <input
                        className="form-control sign-up-password"
                        type="password"
                        placeholder="Mật khẩu *"
                        autoComplete="autocomplete"
                      />
                      <div className="invalid-feedback"> </div>
                      <input
                        className="form-control sign-up-confirm-password"
                        type="password"
                        placeholder="Xác nhận mật khẩu *"
                        autoComplete="autocomplete"
                      />
                      <div className="invalid-feedback"> </div>
                      <div className="privacy-confirm" />
                      Khi bạn nhấn Đăng ký, bạn đã đồng ý thực hiện mọi giao
                      dịch mua bán theo{" "}
                      <span className="text-btn">
                        điều kiện sử dụng và chính sách của OBO Stadium.
                      </span>
                      <div className="btn btn-primary red-btn sign-up-btn">
                        Đăng kí
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a className="back-to-top" href="#">
          <img src="/images/back-to-top.png" alt="back-to-top" />
        </a>
      </main>
    </Layout>
  );
};

const Shop = connect(
  null,
  mapDispatchToProps
)(ConnectedShop);

export default Shop;
