import React, {useEffect} from "react";
import Layout from "../components/layout";
import LastestNews from "../components/lastest-news";
import Head from "next/head";
import Link from "next/link";

import { FormattedNumber } from "react-intl";
import { connect } from 'react-redux';
import store from "../redux/store/index"
import getProducts from "../redux/actions/product";

function mapStateToProps(state) {
  return {
    products: state.productReducer.products
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     getProducts: dispatch(getProducts())
//   }
// }

const Home = props => {
  const title = (
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
  );
  console.log(props)
  const findBestSeller = props.products
    .filter(products => {
      return products.status === "Best Seller";
    })
    .slice(0, 5);

  const findStaffChoose = props.products
    .filter(products => {
      return products.status === "Staff Choose";
    })
    .slice(0, 5);

  const findUnderRetails = props.products
    .filter(products => {
      return products.status === "Under Retails";
    })
    .slice(0, 5);

  function productCategoriesRender(category) {
    return category.map(product => {
      return (
        <Link href="/shop/[id]" as={`/shop/${product.id}`} key={product.id}>
          <a className="product position-relative">
            <div className="card">
              <img
                className="card-img-top"
                src={product.thumbnail}
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
          </a>
        </Link>
      );
    });
  }

  return (
    <Layout title={title}>
      <Head>
        <title>Trang chủ</title>
        <link
          rel="stylesheet"
          type="text/css"
          href="/css/components/products.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/css/components/lastest-news.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/css/components/index/index-newsletter.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/css/components/index/index-category.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/css/components/index/product-showcase.css"
        />
        <link rel="stylesheet" type="text/css" href="/css/index.css" />
      </Head>
      <main>
        <section className="products-showcase best-seller container">
          <div className="row">
            <div className="title col-12">
              <h2 className="h2">Sản phẩm bán chạy</h2>
              <a
                className="see-more-btn-text text-uppercase"
                href="./shop.html"
              >
                Xem Thêm
              </a>
            </div>
          </div>
          <div className="row product-row d-flex justify-content-md-between">
            {productCategoriesRender(findBestSeller)}
          </div>
        </section>
        {/* Break Banner*/}
        <section className="break-banner">
          <a href="./product-details.html">
            <img
              className="img-fluid"
              id="promo-banner-1"
              src="/images/banner/promo-banner-1-lg.png"
              alt="promo-banner-1"
            />
          </a>
        </section>
        {/* Staff Selects*/}
        <section className="products-showcase staffs-choose container">
          <div className="row">
            <div className="title col-12">
              <h2 className="h2">OBO LỰA CHỌN</h2>
              <a
                className="see-more-btn-text text-uppercase"
                href="./shop.html"
              >
                Xem Thêm
              </a>
            </div>
          </div>
          <div className="row product-row d-flex justify-content-md-between">
            {productCategoriesRender(findStaffChoose)}
          </div>
        </section>
        {/* Break Banner*/}
        <section className="break-banner">
          <a href="./product-details.html">
            <img
              className="img-fluid"
              id="promo-banner-2"
              src="/images/banner/promo-banner-2-lg.png"
              alt="promo-banner-2"
            />
          </a>
        </section>
        {/* Under retails*/}
        <section className="products-showcase under-retail container">
          <div className="row">
            <div className="title col-12">
              <h2 className="h2">THẤP HƠN “GIÁ HÃNG”</h2>
              <a
                className="see-more-btn-text text-uppercase"
                href="./shop.html"
              >
                Xem Thêm
              </a>
            </div>
          </div>
          <div className="row product-row d-flex justify-content-md-between">
            {productCategoriesRender(findUnderRetails)}
          </div>
        </section>
        {/* Break Banner*/}
        <section className="break-banner">
          <a href="./product-details.html">
            <img
              className="img-fluid"
              id="promo-banner-3"
              src="/images/banner/promo-banner-3-lg.png"
              alt="promo-banner-3"
            />
          </a>
        </section>
        {/* Category Section*/}
        <section className="categories-showcase container">
          <div className="row">
            <div className="title col-12">
              <h2 className="h2">Bộ Sưu Tập</h2>
            </div>
          </div>
          <div className="row categories-row d-flex justify-content-md-between">
            <div className="category col-sm-4">
              <a className="category-wrap" href="./shop.html">
                <img
                  className="img-fluid"
                  src="/images/categories/category-1.png"
                  alt="category-1"
                />
                <div className="tag">TECH PERFORMANCE</div>
              </a>
            </div>
            <div className="category col-sm-4">
              <a className="category-wrap" href="./shop.html">
                <img
                  className="img-fluid"
                  src=" /images/categories/category-2.png"
                  alt="category-2"
                />
                <div className="tag">OFF-WHITE</div>
              </a>
            </div>
            <div className="category col-sm-4">
              <a className="category-wrap" href="./shop.html">
                <img
                  className="img-fluid"
                  src=" /images/categories/category-3.png"
                  alt="category-3"
                />
                <div className="tag">SUPREME</div>
              </a>
            </div>
            <div className="category col-sm-4">
              <a className="category-wrap" href="./shop.html">
                <img
                  className="img-fluid"
                  src=" /images/categories/category-4.png"
                  alt="category-4"
                />
                <div className="tag">NBA</div>
              </a>
            </div>
            <div className="category col-sm-4">
              <a className="category-wrap" href="./shop.html">
                <img
                  className="img-fluid"
                  src=" /images/categories/category-5.png"
                  alt="category-5"
                />
                <div className="tag">YEEZY</div>
              </a>
            </div>
            <div className="category col-sm-4" id="last-category">
              <a className="category-wrap" href="./shop.html">
                <img
                  className="img-fluid"
                  src=" /images/categories/category-6.png"
                  alt="category-6"
                />
                <div className="tag">Comme Des Garçons</div>
              </a>
            </div>
          </div>
        </section>
        {/* Newsletter Section*/}
        <section className="newsletter container-fluid d-flex justify-content-center">
          <div className="newsletter-form-wrapper">
            <div className="title">Đăng ký nhận bản tin OBO Stadium</div>
            <div className="sub-title">
              Hãy đăng ký để nhận tin mới nhanh nhất qua email
            </div>
            <div className="newsletter-form d-flex">
              <form className="d-flex w-100 justify-content-between flex-column flex-md-row">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Nhập địa chỉ email của bạn"
                />
                <button
                  className="btn btn-primary text-uppercase red-btn"
                  type="submit"
                >
                  đăng ký
                </button>
              </form>
            </div>
          </div>
        </section>
        {/* Lastest News Section*/}
        <section className="latest-news container">
          <div className="row">
            <div className="title col-12">
              <h2 className="h2">Bài viết mới</h2>
              <a
                className="see-more-btn-text text-uppercase"
                href="./news.html"
              >
                Xem Thêm
              </a>
            </div>
          </div>
          <LastestNews />
        </section>
        {/* Modals*/}
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

Home.getInitialProps = async ({ store, isServer }) => {
  if (isServer) {
    await store.dispatch(getProducts())
  }
  return {isServer}
}

export default connect(mapStateToProps)(Home);
