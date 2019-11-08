// Modules
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import { Collapse } from "reactstrap";
import { connect } from "react-redux";
import { FormattedNumber } from "react-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Router, { useRouter } from "next/router";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

// Components
import FilterBar from "../components/filter-bar";
import Layout from "../components/layout";
import Aux from "../components/hoc/aux";
import "../components/fontawesome";
// import FilterBarSmall from "../components/filter-bar-small";

// Redux
import { clearFilter } from "../redux/actions/filter";
import { getProducts, setProducts } from "../redux/actions/product";

function mapDispatchToProps(dispatch) {
  return {
    clearFilter: () => dispatch(clearFilter()),
    getProducts: page => dispatch(getProducts(page)),
    setProducts: payload => dispatch(setProducts(payload))
  };
}

function mapStateToProps(state) {
  return {
    products: state.productReducer.products,
    headers: state.productReducer.headers
  };
}

const Shop = props => {
  // Router
  const router = useRouter();

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

  const [pagination, setPagination] = useState({
    totalItems: Number(props.headers["x-total-count"]),
    pageNumbers: [],
    perPage: 16,
    totalPage: Math.ceil(Number(props.headers["x-total-count"]) / 16),
    currentPage: Number(props.query.page) || 1
  });

  // Life cycles
  useEffect(() => {
    window.scrollTo(0, 0);
    document.addEventListener("click", toggleSort);
    return () => {
      document.removeEventListener("click", toggleSort);
    };
  });

  useEffect(() => {
      const pageNumbers = [];
      const currentPage = Number(props.query.page) || 1;

      for (let i = 0; i < pagination.totalPage; i++) {
        pageNumbers.push(i + 1);
      }

      setPagination({
        ...pagination,
        pageNumbers,
        currentPage
      });
    
    return () => {
      props.getProducts(1);
    };
  }, []);

  // Methods

  const toggleFilterModal = () => {
    setFilterModal(!filterModal);
  };

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
    let url;
    let slug;
    switch (condition) {
      case "Bán chạy":
        slug = `_page=1&_limit=16&_sort=total_sold&_order=desc`;
        url = `https://cody-json-server.herokuapp.com/products?${slug}`;
        sortRequest(url, slug);
        break;
      case "Hàng mới":
        slug = `_page=1&_limit=16&_sort=release_date&_order=desc`;
        url = `https://cody-json-server.herokuapp.com/products?${slug}`;
        sortRequest(url, slug);
        break;
      case "Giá thấp đến cao":
        slug = `_page=1&_limit=16&_sort=sell_price&_order=asc`;
        url = `https://cody-json-server.herokuapp.com/products?${slug}`;
        sortRequest(url, slug);
        break;
      case "Giá cao đến thấp":
        slug = `_page=1&_limit=16&_sort=sell_price&_order=desc`;
        url = `https://cody-json-server.herokuapp.com/products?${slug}`;
        sortRequest(url, slug);
        break;
    }
  };

  const sortRequest = (url, slug) => {
    axios
      .get(url)
      .then(response => {
        return {
          data: response.data,
          headers: response.headers
        };
      })
      .then(json => {
        props.setProducts(json.data);
      });
    router.push(`${Router.pathname}?${slug}`);
  };

  // Pagination

  const handlePagination = number => {
    props.getProducts(number);

    setPagination({ ...pagination, currentPage: number });
    router.push({ pathname: "/shop", query: { page: number } });
  };

  const handleNavPagination = type => {
    const currentPage = Number(router.query.page) || 1;
    const lastPage = pagination.pageNumbers.slice(-1)[0]
    switch (type) {
      case "next":
        setPagination({ ...pagination, currentPage: currentPage + 1 });
        router.push({ pathname: "/shop", query: { page: currentPage + 1 } });
        break;
      case "previous":
        setPagination({ ...pagination, currentPage: currentPage - 1 });
        router.push({ pathname: "/shop", query: { page: currentPage - 1 } });
        break;
      case "first":
        setPagination({ ...pagination, currentPage: 1 });
        router.push({ pathname: "/shop", query: { page: 1 } });
        break;
      case "last":
        setPagination({ ...pagination, currentPage: lastPage });
        router.push({ pathname: "/shop", query: { page: lastPage } });
        break;
    }
  };

  // Renderes

  // Render products
  const product = props.products.map(product => {
    if (product) {
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
    } else {
      return <div key="not found">Không tìm thấy lựa chọn</div>;
    }
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

  //Render pagination

  const renderPagination = pagination.pageNumbers.map(number => (
    <PaginationItem
      active={number === pagination.currentPage}
      key={number}
      onClick={handlePagination.bind(null, number)}
    >
      <PaginationLink>{number}</PaginationLink>
    </PaginationItem>
  ));

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
              <Pagination className="pagination-wrapper">
                <PaginationItem
                  disabled={pagination.currentPage === 1}
                  onClick={handleNavPagination.bind(null, "first")}
                  style={{pointerEvents : pagination.currentPage === 1 ? 'none' : 'auto'}}
                >
                  <PaginationLink first />
                </PaginationItem>
                <PaginationItem
                  disabled={pagination.currentPage === 1}
                  onClick={handleNavPagination.bind(null, "previous")}
                  style={{pointerEvents : pagination.currentPage === 1 ? 'none' : 'auto'}}
                >
                  <PaginationLink previous />
                </PaginationItem>

                {renderPagination}
                <PaginationItem
                  disabled={pagination.currentPage === pagination.pageNumbers.slice(-1)[0]}
                  onClick={handleNavPagination.bind(null, "next")}
                  style={{pointerEvents : pagination.currentPage === pagination.pageNumbers.slice(-1)[0] ? 'none' : 'auto'}}
                >
                  <PaginationLink next />
                </PaginationItem>
                <PaginationItem
                  disabled={pagination.currentPage === pagination.pageNumbers.slice(-1)[0]}
                  onClick={handleNavPagination.bind(null, "last")}
                  style={{pointerEvents : pagination.currentPage === pagination.pageNumbers.slice(-1)[0] ? 'none' : 'auto'}}
                >
                  <PaginationLink last />
                </PaginationItem>
              </Pagination>
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

      <style jsx global>
        {`
          .page-item.active .page-link {
            background-color: #f04d40;
            border-color: #f04d40;
          }

          .page-link {
            color: #333;
          }

          .page-item.disabled .page-link {
            opacity: 0.7;
          }
        `}
      </style>
    </Layout>
  );
};

Shop.getInitialProps = async ctx => {
  const { store, isServer, asPath, query } = ctx;
  const storeData = store.getState();

  if (storeData.productReducer.products.length === 0) {
    await store.dispatch(getProducts(1));
  }
  if (query.page !== undefined) {
    await store.dispatch(getProducts(query.page));
  }

  return { isServer, asPath, query };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shop);
