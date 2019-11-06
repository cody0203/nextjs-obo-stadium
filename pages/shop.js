import React from "react";
import Layout from "../components/layout";
import Link from "next/link";
import Head from "next/head";
import { connect } from "react-redux";
import { FormattedNumber } from "react-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../components/fontawesome";


import FilterBar from "../components/filter-bar"

function mapStateToProps(state) {
  return {
    products: state.productReducer.products
  };
}

const ConnectedShop = props => {

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
            <FilterBar />
            <div className="product-showing col-lg-9 col-12">
              <div className="sort">
                <div className="sort-content">
                  Sắp xếp theo <span className="sort-name">Hàng mới</span>
                  <FontAwesomeIcon icon="chevron-down" />
                  <div className="sort-dropdown">
                    <div className="sort-item new-arrival active">Hàng mới</div>
                    <div className="sort-item best-seller">Bán chạy</div>
                    <div className="sort-item low-to-high-price">
                      Giá thấp đến cao
                    </div>
                    <div className="sort-item high-to-low-price">
                      Giá cao đến thấp
                    </div>
                  </div>
                </div>
                <div
                  className="filter-icon"
                  data-toggle="modal"
                  data-target="#filterModal"
                >
                  <i className="fas fa-filter" />
                </div>
              </div>
              <div className="product-row">{product}</div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="filterModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="filterModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="filterModalLabel">
                  Lọc sản phẩm
                </h5>
                <button
                  className="close"
                  type="button"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="filter-bar small-size">
                  <div className="brand content">
                    <div
                      className="title"
                      data-toggle="collapse"
                      href="#brand-collapse"
                      role="button"
                      aria-expanded="false"
                      aria-controls="brand-collapse"
                    >
                      <div className="text">Thương hiệu</div>
                      <i className="fas fa-chevron-up" />
                    </div>
                    <div
                      className="select-filter collapse show"
                      id="brand-collapse"
                    >
                      <div className="item">
                        <div className="pretty p-svg p-curve">
                          <input
                            className="filter-checkbox"
                            type="checkbox"
                            name="nike"
                            id="nike"
                            data-id="Nike"
                          />
                          <div className="state p-success">
                            <svg className="svg svg-icon" viewBox="0 0 20 20">
                              <path
                                d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                                style={{ stroke: "white", fill: "white" }}
                              />
                            </svg>
                            <label className="checkbox-label" htmlFor="nike">
                              Nike
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="pretty p-svg p-curve">
                          <input
                            className="filter-checkbox"
                            type="checkbox"
                            name="air-jordan"
                            id="air-jordan"
                            data-id="Air Jordan"
                          />
                          <div className="state p-success">
                            <svg className="svg svg-icon" viewBox="0 0 20 20">
                              <path
                                d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                                style={{ stroke: "white", fill: "white" }}
                              />
                            </svg>
                            <label
                              className="checkbox-label"
                              htmlFor="air-jordan"
                            >
                              Air Jordan
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="pretty p-svg p-curve">
                          <input
                            className="filter-checkbox"
                            type="checkbox"
                            name="adidas"
                            id="adidas"
                            data-id="Adidas"
                          />
                          <div className="state p-success">
                            <svg className="svg svg-icon" viewBox="0 0 20 20">
                              <path
                                d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                                style={{ stroke: "white", fill: "white" }}
                              />
                            </svg>
                            <label className="checkbox-label" htmlFor="adidas">
                              Adidas
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="pretty p-svg p-curve">
                          <input
                            className="filter-checkbox"
                            type="checkbox"
                            name="converse"
                            id="converse"
                            data-id="Converse"
                          />
                          <div className="state p-success">
                            <svg className="svg svg-icon" viewBox="0 0 20 20">
                              <path
                                d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                                style={{ stroke: "white", fill: "white" }}
                              />
                            </svg>
                            <label
                              className="checkbox-label"
                              htmlFor="converse"
                            >
                              Converse
                            </label>
                          </div>
                        </div>
                      </div>
                      <div id="see-more-dropdown">
                        <div className="item">
                          <div className="pretty p-svg p-curve">
                            <input
                              className="filter-checkbox"
                              type="checkbox"
                              name="asics"
                              id="asics"
                              data-id="Asics"
                            />
                            <div className="state p-success">
                              <svg className="svg svg-icon" viewBox="0 0 20 20">
                                <path
                                  d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                                  style={{ stroke: "white", fill: "white" }}
                                />
                              </svg>
                              <label className="checkbox-label" htmlFor="asics">
                                Asics
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="pretty p-svg p-curve">
                            <input
                              className="filter-checkbox"
                              type="checkbox"
                              name="vans"
                              id="vans"
                              data-id="Vans"
                            />
                            <div className="state p-success">
                              <svg className="svg svg-icon" viewBox="0 0 20 20">
                                <path
                                  d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                                  style={{ stroke: "white", fill: "white" }}
                                />
                              </svg>
                              <label className="checkbox-label" htmlFor="vans">
                                Vans
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="see-more" id="see-more-brand">
                        Xem thêm
                      </div>
                    </div>
                  </div>
                  <div className="break-line" />
                  <div className="category content">
                    <div
                      className="title"
                      data-toggle="collapse"
                      href="#categories-collapse"
                      role="button"
                      aria-expanded="false"
                      aria-controls="categories-collapse"
                    >
                      <div className="text">Danh mục</div>
                      <i className="fas fa-chevron-up" />
                    </div>
                    <div
                      className="select-filter collapse show"
                      id="categories-collapse"
                    >
                      <div className="item">
                        <div className="pretty p-svg p-curve">
                          <input
                            className="filter-checkbox"
                            type="checkbox"
                            name="male"
                            id="male"
                            data-id="Male"
                          />
                          <div className="state p-success">
                            <svg className="svg svg-icon" viewBox="0 0 20 20">
                              <path
                                d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                                style={{ stroke: "white", fill: "white" }}
                              />
                            </svg>
                            <label className="checkbox-label" htmlFor="male">
                              Nam
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="pretty p-svg p-curve">
                          <input
                            className="filter-checkbox"
                            type="checkbox"
                            name="female"
                            id="female"
                            data-id="Female"
                          />
                          <div className="state p-success">
                            <svg className="svg svg-icon" viewBox="0 0 20 20">
                              <path
                                d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                                style={{ stroke: "white", fill: "white" }}
                              />
                            </svg>
                            <label className="checkbox-label" htmlFor="female">
                              Nữ
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="pretty p-svg p-curve">
                          <input
                            className="filter-checkbox"
                            type="checkbox"
                            name="youth"
                            id="youth"
                            data-id="Youth"
                          />
                          <div className="state p-success">
                            <svg className="svg svg-icon" viewBox="0 0 20 20">
                              <path
                                d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                                style={{ stroke: "white", fill: "white" }}
                              />
                            </svg>
                            <label className="checkbox-label" htmlFor="youth">
                              Thiếu niên
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="pretty p-svg p-curve">
                          <input
                            className="filter-checkbox"
                            type="checkbox"
                            name="toddler"
                            id="toddler"
                            data-id="Toddler"
                          />
                          <div className="state p-success">
                            <svg className="svg svg-icon" viewBox="0 0 20 20">
                              <path
                                d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                                style={{ stroke: "white", fill: "white" }}
                              />
                            </svg>
                            <label className="checkbox-label" htmlFor="toddler">
                              Sơ sinh
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="break-line" />
                  <div className="size content">
                    <div
                      className="title"
                      data-toggle="collapse"
                      href="#size-collapse"
                      role="button"
                      aria-expanded="false"
                      aria-controls="size-collapse"
                    >
                      <div className="text">Size</div>
                      <i className="fas fa-chevron-up" />
                    </div>
                    <div
                      className="select-filter collapse show"
                      id="size-collapse"
                    />
                  </div>
                  <div className="break-line" />
                  <div className="price-range content">
                    <div className="title">
                      <div className="text">Khoảng giá</div>
                    </div>
                    <input
                      className="form-control price-input"
                      id="from-price-small"
                      type="text"
                      placeholder="Từ"
                    />
                    <input
                      className="form-control price-input"
                      id="to-price-small"
                      type="text"
                      placeholder="Đến"
                      pattern="[0-9]"
                    />
                  </div>
                  <div className="break-line" />
                  <div className="release-date content">
                    <div
                      className="title"
                      data-toggle="collapse"
                      href="#collapseExample"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      <div className="text">Năm ra mắt</div>
                      <i className="fas fa-chevron-up" />
                    </div>
                    <div
                      className="select-filter collapse show"
                      id="collapseExample"
                    >
                      <div className="date-row">
                        <div className="item">
                          <div className="pretty p-svg p-curve">
                            <input
                              className="filter-checkbox"
                              type="checkbox"
                              name="under-2010"
                              id="under-2010"
                              data-id={2010}
                            />
                            <div className="state p-success">
                              <svg className="svg svg-icon" viewBox="0 0 20 20">
                                <path
                                  d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                                  style={{ stroke: "white", fill: "white" }}
                                />
                              </svg>
                              <label
                                className="checkbox-label"
                                htmlFor="under-2010"
                              >
                                &lt; 2010
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="pretty p-svg p-curve">
                            <input
                              className="filter-checkbox"
                              type="checkbox"
                              name={2011}
                              id={2011}
                              data-id={2011}
                            />
                            <div className="state p-success">
                              <svg className="svg svg-icon" viewBox="0 0 20 20">
                                <path
                                  d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                                  style={{ stroke: "white", fill: "white" }}
                                />
                              </svg>
                              <label className="checkbox-label" htmlFor={2011}>
                                2011
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="date-row">
                        <div className="item">
                          <div className="pretty p-svg p-curve">
                            <input
                              className="filter-checkbox"
                              type="checkbox"
                              name={2012}
                              id={2012}
                              data-id={2012}
                            />
                            <div className="state p-success">
                              <svg className="svg svg-icon" viewBox="0 0 20 20">
                                <path
                                  d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                                  style={{ stroke: "white", fill: "white" }}
                                />
                              </svg>
                              <label className="checkbox-label" htmlFor={2012}>
                                2012
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="pretty p-svg p-curve">
                            <input
                              className="filter-checkbox"
                              type="checkbox"
                              name={2013}
                              id={2013}
                              data-id={2013}
                            />
                            <div className="state p-success">
                              <svg className="svg svg-icon" viewBox="0 0 20 20">
                                <path
                                  d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                                  style={{ stroke: "white", fill: "white" }}
                                />
                              </svg>
                              <label className="checkbox-label" htmlFor={2013}>
                                2013
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="date-row">
                        <div className="item">
                          <div className="pretty p-svg p-curve">
                            <input
                              className="filter-checkbox"
                              type="checkbox"
                              name={2014}
                              id={2014}
                              data-id={2014}
                            />
                            <div className="state p-success">
                              <svg className="svg svg-icon" viewBox="0 0 20 20">
                                <path
                                  d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                                  style={{ stroke: "white", fill: "white" }}
                                />
                              </svg>
                              <label className="checkbox-label" htmlFor={2014}>
                                2014
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="pretty p-svg p-curve">
                            <input
                              className="filter-checkbox"
                              type="checkbox"
                              name={2015}
                              id={2015}
                              data-id={2015}
                            />
                            <div className="state p-success">
                              <svg className="svg svg-icon" viewBox="0 0 20 20">
                                <path
                                  d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                                  style={{ stroke: "white", fill: "white" }}
                                />
                              </svg>
                              <label className="checkbox-label" htmlFor={2015}>
                                2015
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="date-row">
                        <div className="item">
                          <div className="pretty p-svg p-curve">
                            <input
                              className="filter-checkbox"
                              type="checkbox"
                              name={2016}
                              id={2016}
                              data-id={2016}
                            />
                            <div className="state p-success">
                              <svg className="svg svg-icon" viewBox="0 0 20 20">
                                <path
                                  d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                                  style={{ stroke: "white", fill: "white" }}
                                />
                              </svg>
                              <label className="checkbox-label" htmlFor={2016}>
                                2016
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="pretty p-svg p-curve">
                            <input
                              className="filter-checkbox"
                              type="checkbox"
                              name={2017}
                              id={2017}
                              data-id={2017}
                            />
                            <div className="state p-success">
                              <svg className="svg svg-icon" viewBox="0 0 20 20">
                                <path
                                  d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                                  style={{ stroke: "white", fill: "white" }}
                                />
                              </svg>
                              <label className="checkbox-label" htmlFor={2017}>
                                2017
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="date-row">
                        <div className="item">
                          <div className="pretty p-svg p-curve">
                            <input
                              className="filter-checkbox"
                              type="checkbox"
                              name={2018}
                              id={2018}
                              data-id={2018}
                            />
                            <div className="state p-success">
                              <svg className="svg svg-icon" viewBox="0 0 20 20">
                                <path
                                  d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                                  style={{ stroke: "white", fill: "white" }}
                                />
                              </svg>
                              <label className="checkbox-label" htmlFor={2018}>
                                2018
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="pretty p-svg p-curve">
                            <input
                              className="filter-checkbox"
                              type="checkbox"
                              name={2019}
                              id={2019}
                              data-id={2019}
                            />
                            <div className="state p-success">
                              <svg className="svg svg-icon" viewBox="0 0 20 20">
                                <path
                                  d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
                                  style={{ stroke: "white", fill: "white" }}
                                />
                              </svg>
                              <label className="checkbox-label" htmlFor={2019}>
                                2019
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  className="clear-filter btn btn-primary"
                  data-dismiss="modal"
                  aria-label="Close"
                  style={{ lineHeight: 24, padding: ".375rem .75rem" }}
                >
                  Bỏ lọc
                </button>
                <button className="btn btn-primary apply-price small red-btn">
                  Áp dụng
                </button>
              </div>
            </div>
          </div>
        </div>{" "}
        `{/* Modals*/}
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

      {/* <style jsx>
        {`
          @import "/css/components/shop/filter-bar.css";
          @import "/css/components/shop/product-showing.css";
          @import "/css/components/shop/filter-bar-small.css";
          @import "/css/except-home-page.css";
        `}
      </style> */}
    </Layout>
  );
};

const Shop = connect(mapStateToProps)(ConnectedShop);

export default Shop;
