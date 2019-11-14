// Modules
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import { Collapse } from "reactstrap";
import { connect } from "react-redux";
import { FormattedNumber } from "react-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Router, { useRouter } from "next/router";
import Pagination from "react-js-pagination";

// Components
import FilterBar from "components/filter-bar";
import Layout from "components/layout";
import Aux from "components/hoc/aux";
import "components/fontawesome";
import FilterBarSmall from "components/modals/filter-bar-small";

// Redux
import { getProducts, setProductInfo } from "/redux/actions/product";

function mapDispatchToProps(dispatch) {
  return {
    getProducts: page => dispatch(getProducts(page)),
    setProductInfo: info => dispatch(setProductInfo(info))
  };
}

function mapStateToProps(state) {
  return {
    products: state.productReducer.products
  };
}

const Shop = props => {
  // Props
  const {
    setProductInfo,
    products,
    order,
    limit,
    sort,
    totalItems,
    currentPage
  } = props;

  const getCurrentSort = () => {
    const { sort, order } = router.query;
    let currentSort = "Hàng mới";
    if (sort === "total_sold" && order === "desc") {
      currentSort = "Bán chạy";
    } else if (sort === "release_date" && order === "desc") {
      currentSort = "Hàng mới";
    } else if (sort === "sell_price" && order === "asc") {
      currentSort = "Giá thấp đến cao";
    } else if (sort === "sell_price" && order === "desc") {
      currentSort = "Giá cao đến thấp";
    }
    return currentSort;
  };

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
    chose: getCurrentSort()
  });

  const [filterModal, setFilterModal] = useState(false);

  // Life cycles
  useEffect(() => {
    window.scrollTo(0, 0);
    document.addEventListener("click", toggleSort);
    return () => {
      document.removeEventListener("click", toggleSort);
    };
  });

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
    let sort = "";
    let order = "";
    switch (condition) {
      case "Bán chạy":
        sort = "total_sold";
        order = "desc";
        break;
      case "Hàng mới":
        sort = "release_date";
        order = "desc";
        break;
      case "Giá thấp đến cao":
        sort = "sell_price";
        order = "asc";
        break;
      case "Giá cao đến thấp":
        sort = "sell_price";
        order = "desc";
        break;
    }
    router.push({
      pathname: "/shop",
      query: { ...router.query, page: 1, sort, order }
    });
  };

  const handlePageChange = pageNumber => {
    router.push({
      pathname: "/shop",
      query: {
        ...router.query,
        page: pageNumber,
        sort,
        order
      }
    });
  };

  // Save product details by filter

  const saveDetails = () => {
    const size = Number(router.query["available_size_like"]);
    if (size) {
      setProductInfo({ size });
    }
  };

  // Renderes

  // Render products
  const productsRender = products.map(product => {
    return (
      <Link href="/shop/[id]" as={`/shop/${product.id}`} key={product.id}>
        <a
          className="product-link"
          data-brand="${data[i]['brand']}"
          onClick={saveDetails}
        >
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
            <FilterBar />
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
              {products.length !== 0 ? (
                <Aux>
                  <div className="product-row">{productsRender}</div>
                  <div className="pagination-wrapper">
                    <Pagination
                      activePage={Number(currentPage)}
                      itemsCountPerPage={limit}
                      totalItemsCount={totalItems}
                      pageRangeDisplayed={3}
                      onChange={handlePageChange}
                    />
                  </div>
                </Aux>
              ) : (
                <div key="not found">Không tìm thấy sản phẩm phù hợp.</div>
              )}
            </div>
          </div>
        </div>
        <FilterBarSmall
          filterModal={filterModal}
          toggleFilterModal={toggleFilterModal}
        />

        <a className="back-to-top" href="#">
          <img src="/images/back-to-top.png" alt="back-to-top" />
        </a>
      </main>

      <style jsx global>
        {`
          .pagination {
            display: inline-block;
            padding-left: 0;
            margin: 20px 0;
            border-radius: 4px;
          }
          .pagination > li {
            display: inline;
          }
          .pagination > li > a,
          .pagination > li > span {
            position: relative;
            float: left;
            padding: 6px 12px;
            line-height: 1.42857143;
            text-decoration: none;
            color: #333;
            background-color: #fff;
            border: 1px solid #ddd;
            margin-left: -1px;
          }
          .pagination > .disabled > a,
          .pagination > .disabled > a:focus,
          .pagination > .disabled > a:hover,
          .pagination > .disabled > span,
          .pagination > .disabled > span:focus,
          .pagination > .disabled > span:hover {
            color: #bbb;
            background-color: #fff;
            border-color: #ddd;
            cursor: not-allowed;
          }
          .pagination > li:first-child > a,
          .pagination > li:first-child > span {
            margin-left: 0;
            border-bottom-left-radius: 4px;
            border-top-left-radius: 4px;
          }

          .pagination > .active > a,
          .pagination > .active > a:focus,
          .pagination > .active > a:hover,
          .pagination > .active > span,
          .pagination > .active > span:focus,
          .pagination > .active > span:hover {
            background-color: #f04d40;
            border-color: #f04d40;
            color: white;
            pointer-events: none;
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
  const page = query.page || 1;
  const limit = 16;
  const sort = query.sort || "id";
  const order = query.order || "desc";
  await store.dispatch(getProducts(page, limit, sort, order, query));

  const storeData = store.getState();
  const totalItems = storeData.productReducer.headers["x-total-count"];
  const totalPages = Math.ceil(totalItems / limit);

  return {
    isServer,
    asPath,
    totalItems: totalItems,
    currentPage: page,
    limit: limit,
    sort: sort,
    totalPages: totalPages,
    order: order
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
