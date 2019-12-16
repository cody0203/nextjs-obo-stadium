// Modules
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

// Components
import Layout from 'components/layout';
import LastestNews from 'components/lastest-news';
import ProductItem from 'components/product-item/product-item.component';
import RowShowcase from 'components/row-showcase/row-showcase.component';
import NewsLetter from 'components/newsletter/newsletter.component';

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
  const findBestSeller = props.products
    .filter(products => {
      return products.status === 'Best Seller';
    })
    .slice(0, 5);

  const findStaffChoose = props.products
    .filter(products => {
      return products.status === 'Staff Choose';
    })
    .slice(0, 5);

  const findUnderRetails = props.products
    .filter(products => {
      return products.status === 'Under Retails';
    })
    .slice(0, 5);

  function productCategoriesRender(category) {
    return category.map(product => {
      return <ProductItem product={product} key={product.id} />;
    });
  }

  return (
    <Layout title={title}>
      <Head>
        <title>Trang chủ</title>
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
        <link rel="stylesheet" type="text/css" href="/css/index.css" />
      </Head>
      <main>
        <RowShowcase title="Sản phẩm bán chạy" link="./shop.html">
          {productCategoriesRender(findBestSeller)}
        </RowShowcase>
        {/* Break Banner*/}
        <section className="break-banner">
          <a href="./product-details.html">
            <img
              className="img-fluid"
              id="promo-banner-1"
              src="/assets/images/banner/promo-banner-1-lg.png"
              alt="promo-banner-1"
            />
          </a>
        </section>
        {/* Staff Selects*/}
        <RowShowcase title="OBO LỰA CHỌN" link="./shop.html">
          {productCategoriesRender(findStaffChoose)}
        </RowShowcase>
        {/* Break Banner*/}
        <section className="break-banner">
          <a href="./product-details.html">
            <img
              className="img-fluid"
              id="promo-banner-2"
              src="/assets/images/banner/promo-banner-2-lg.png"
              alt="promo-banner-2"
            />
          </a>
        </section>
        {/* Under retails*/}
        <RowShowcase title="THẤP HƠN “GIÁ HÃNG”" link="./shop.html">
          {productCategoriesRender(findUnderRetails)}
        </RowShowcase>
        {/* Break Banner*/}
        <section className="break-banner">
          <a href="./product-details.html">
            <img
              className="img-fluid"
              id="promo-banner-3"
              src="/assets/images/banner/promo-banner-3-lg.png"
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
                  src="/assets/images/categories/category-1.png"
                  alt="category-1"
                />
                <div className="tag">TECH PERFORMANCE</div>
              </a>
            </div>
            <div className="category col-sm-4">
              <a className="category-wrap" href="./shop.html">
                <img
                  className="img-fluid"
                  src=" /assets/images/categories/category-2.png"
                  alt="category-2"
                />
                <div className="tag">OFF-WHITE</div>
              </a>
            </div>
            <div className="category col-sm-4">
              <a className="category-wrap" href="./shop.html">
                <img
                  className="img-fluid"
                  src=" /assets/images/categories/category-3.png"
                  alt="category-3"
                />
                <div className="tag">SUPREME</div>
              </a>
            </div>
            <div className="category col-sm-4">
              <a className="category-wrap" href="./shop.html">
                <img
                  className="img-fluid"
                  src=" /assets/images/categories/category-4.png"
                  alt="category-4"
                />
                <div className="tag">NBA</div>
              </a>
            </div>
            <div className="category col-sm-4">
              <a className="category-wrap" href="./shop.html">
                <img
                  className="img-fluid"
                  src=" /assets/images/categories/category-5.png"
                  alt="category-5"
                />
                <div className="tag">YEEZY</div>
              </a>
            </div>
            <div className="category col-sm-4" id="last-category">
              <a className="category-wrap" href="./shop.html">
                <img
                  className="img-fluid"
                  src=" /assets/images/categories/category-6.png"
                  alt="category-6"
                />
                <div className="tag">Comme Des Garçons</div>
              </a>
            </div>
          </div>
        </section>
        {/* Newsletter Section*/}
        <NewsLetter />
        {/* Lastest News Section*/}

        <RowShowcase title="Bài viết mới" link="./news.html">
          <LastestNews />
        </RowShowcase>
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
                      Quên mật khẩu? Nhấn vào{' '}
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
                      dịch mua bán theo{' '}
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
          <img src="/assets/images/back-to-top.png" alt="back-to-top" />
        </a>
      </main>
    </Layout>
  );
};

export default Home;
