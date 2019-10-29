import React from "react";
import Layout from "../components/layout";
import LastestNews from "../components/lastest-news";

const Home = () => {
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
  return (
    <Layout title={title}>
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
            <a
              className="product position-relative"
              href="./product-details.html"
            >
              <div className="card">
                <img
                  className="card-img-top"
                  src="/images/product/adidas-Yeezy-Boost-350-V2-Lundmark-Product.png"
                  alt="adidas-Yeezy-Boost-350-V2-Lundmark"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Adidas Yeezy Boost 350 V2 Lundmark (Non
                  </h5>
                  <p className="card-text price-desc">Giá thấp nhất hiện tại</p>
                  <p className="price">7.200.000 ₫</p>
                  <p className="card-text sold">Đã bán 1963 đôi</p>
                </div>
              </div>
              <div className="shadow mx-auto position-absolute" />
            </a>
            <div className="product position-relative">
              <div className="card">
                <img
                  className="card-img-top"
                  src="/images/product/adidas-Yeezy-Boost-350-V2-Lundmark-Product.png"
                  alt="adidas-Yeezy-Boost-350-V2-Lundmark"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Jordan 4 Retro Cool Grey (2019)
                  </h5>
                  <p className="card-text price-desc">Giá thấp nhất hiện tại</p>
                  <p className="price">4.810.000 ₫</p>
                  <p className="card-text sold">Đã bán 1312 đôi</p>
                </div>
              </div>
              <div className="shadow mx-auto position-absolute" />
            </div>
            <div className="product position-relative">
              <div className="card">
                <img
                  className="card-img-top"
                  src="/images/product/adidas-Yeezy-Boost-350-V2-Lundmark-Product.png"
                  alt="adidas-Yeezy-Boost-350-V2-Lundmark"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Jordan 1 Retro Low OG SP Travis Scott
                  </h5>
                  <p className="card-text price-desc">Giá thấp nhất hiện tại</p>
                  <p className="price">20.790.000 ₫</p>
                  <p className="card-text sold">Đã bán 2246 đôi</p>
                </div>
              </div>
              <div className="shadow mx-auto position-absolute" />
            </div>
            <div className="product position-relative">
              <div className="card">
                <img
                  className="card-img-top"
                  src="/images/product/adidas-Yeezy-Boost-350-V2-Lundmark-Product.png"
                  alt="adidas-Yeezy-Boost-350-V2-Lundmark"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Air Jordan 1 Mid Yellow Toe Black
                  </h5>
                  <p className="card-text price-desc">Giá thấp nhất hiện tại</p>
                  <p className="price">3.740.000 ₫</p>
                  <p className="card-text sold">Đã bán 564 đôi</p>
                </div>
              </div>
              <div className="shadow mx-auto position-absolute" />
            </div>
            <div className="product position-relative">
              <div className="card">
                <img
                  className="card-img-top"
                  src="/images/product/adidas-Yeezy-Boost-350-V2-Lundmark-Product.png"
                  alt="adidas-Yeezy-Boost-350-V2-Lundmark"
                />
                <div className="card-body">
                  <h5 className="card-title">Nike SB Dunk Low Parra</h5>
                  <p className="card-text price-desc">Giá thấp nhất hiện tại</p>
                  <p className="price">6.620.000 ₫</p>
                  <p className="card-text sold">Đã bán 1456 đôi</p>
                </div>
              </div>
              <div className="shadow mx-auto position-absolute" />
            </div>
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
            <div className="product position-relative">
              <div className="card">
                <img
                  className="card-img-top"
                  src="/images/product/adidas-Yeezy-Boost-350-V2-Lundmark-Product.png"
                  alt="adidas-Yeezy-Boost-350-V2-Lundmark"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Adidas Yeezy Boost 350 V2 Lundmark (Non
                  </h5>
                  <p className="card-text price-desc">Giá thấp nhất hiện tại</p>
                  <p className="price">7.200.000 ₫</p>
                  <p className="card-text sold">Đã bán 1963 đôi</p>
                </div>
              </div>
              <div className="shadow mx-auto position-absolute" />
            </div>
            <div className="product position-relative">
              <div className="card">
                <img
                  className="card-img-top"
                  src="/images/product/adidas-Yeezy-Boost-350-V2-Lundmark-Product.png"
                  alt="adidas-Yeezy-Boost-350-V2-Lundmark"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Jordan 4 Retro Cool Grey (2019)
                  </h5>
                  <p className="card-text price-desc">Giá thấp nhất hiện tại</p>
                  <p className="price">4.810.000 ₫</p>
                  <p className="card-text sold">Đã bán 1312 đôi</p>
                </div>
              </div>
              <div className="shadow mx-auto position-absolute" />
            </div>
            <div className="product position-relative">
              <div className="card">
                <img
                  className="card-img-top"
                  src="/images/product/adidas-Yeezy-Boost-350-V2-Lundmark-Product.png"
                  alt="adidas-Yeezy-Boost-350-V2-Lundmark"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Jordan 1 Retro Low OG SP Travis Scott
                  </h5>
                  <p className="card-text price-desc">Giá thấp nhất hiện tại</p>
                  <p className="price">20.790.000 ₫</p>
                  <p className="card-text sold">Đã bán 2246 đôi</p>
                </div>
              </div>
              <div className="shadow mx-auto position-absolute" />
            </div>
            <div className="product position-relative">
              <div className="card">
                <img
                  className="card-img-top"
                  src="/images/product/adidas-Yeezy-Boost-350-V2-Lundmark-Product.png"
                  alt="adidas-Yeezy-Boost-350-V2-Lundmark"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Air Jordan 1 Mid Yellow Toe Black
                  </h5>
                  <p className="card-text price-desc">Giá thấp nhất hiện tại</p>
                  <p className="price">3.740.000 ₫</p>
                  <p className="card-text sold">Đã bán 564 đôi</p>
                </div>
              </div>
              <div className="shadow mx-auto position-absolute" />
            </div>
            <div className="product position-relative">
              <div className="card">
                <img
                  className="card-img-top"
                  src="/images/product/adidas-Yeezy-Boost-350-V2-Lundmark-Product.png"
                  alt="adidas-Yeezy-Boost-350-V2-Lundmark"
                />
                <div className="card-body">
                  <h5 className="card-title">Nike SB Dunk Low Parra</h5>
                  <p className="card-text price-desc">Giá thấp nhất hiện tại</p>
                  <p className="price">6.620.000 ₫</p>
                  <p className="card-text sold">Đã bán 1456 đôi</p>
                </div>
              </div>
              <div className="shadow mx-auto position-absolute" />
            </div>
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
            <div className="product position-relative">
              <div className="card">
                <img
                  className="card-img-top"
                  src="/images/product/adidas-Yeezy-Boost-350-V2-Lundmark-Product.png"
                  alt="adidas-Yeezy-Boost-350-V2-Lundmark"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Adidas Yeezy Boost 350 V2 Lundmark (Non
                  </h5>
                  <p className="card-text price-desc">Giá thấp nhất hiện tại</p>
                  <p className="price">7.200.000 ₫</p>
                  <p className="card-text sold">Đã bán 1963 đôi</p>
                </div>
              </div>
              <div className="shadow mx-auto position-absolute" />
            </div>
            <div className="product position-relative">
              <div className="card">
                <img
                  className="card-img-top"
                  src="/images/product/adidas-Yeezy-Boost-350-V2-Lundmark-Product.png"
                  alt="adidas-Yeezy-Boost-350-V2-Lundmark"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Jordan 4 Retro Cool Grey (2019)
                  </h5>
                  <p className="card-text price-desc">Giá thấp nhất hiện tại</p>
                  <p className="price">4.810.000 ₫</p>
                  <p className="card-text sold">Đã bán 1312 đôi</p>
                </div>
              </div>
              <div className="shadow mx-auto position-absolute" />
            </div>
            <div className="product position-relative">
              <div className="card">
                <img
                  className="card-img-top"
                  src="/images/product/adidas-Yeezy-Boost-350-V2-Lundmark-Product.png"
                  alt="adidas-Yeezy-Boost-350-V2-Lundmark"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Jordan 1 Retro Low OG SP Travis Scott
                  </h5>
                  <p className="card-text price-desc">Giá thấp nhất hiện tại</p>
                  <p className="price">20.790.000 ₫</p>
                  <p className="card-text sold">Đã bán 2246 đôi</p>
                </div>
              </div>
              <div className="shadow mx-auto position-absolute" />
            </div>
            <div className="product position-relative">
              <div className="card">
                <img
                  className="card-img-top"
                  src="/images/product/adidas-Yeezy-Boost-350-V2-Lundmark-Product.png"
                  alt="adidas-Yeezy-Boost-350-V2-Lundmark"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Air Jordan 1 Mid Yellow Toe Black
                  </h5>
                  <p className="card-text price-desc">Giá thấp nhất hiện tại</p>
                  <p className="price">3.740.000 ₫</p>
                  <p className="card-text sold">Đã bán 564 đôi</p>
                </div>
              </div>
              <div className="shadow mx-auto position-absolute" />
            </div>
            <div className="product position-relative">
              <div className="card">
                <img
                  className="card-img-top"
                  src="/images/product/adidas-Yeezy-Boost-350-V2-Lundmark-Product.png"
                  alt="adidas-Yeezy-Boost-350-V2-Lundmark"
                />
                <div className="card-body">
                  <h5 className="card-title">Nike SB Dunk Low Parra</h5>
                  <p className="card-text price-desc">Giá thấp nhất hiện tại</p>
                  <p className="price">6.620.000 ₫</p>
                  <p className="card-text sold">Đã bán 1456 đôi</p>
                </div>
              </div>
              <div className="shadow mx-auto position-absolute" />
            </div>
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

      <style jsx>
        {`
          @import "../static/css/components/products.css";
          @import "../static/css/components/lastest-news.css";
          @import "../static/css/components/index/index-newsletter.css";
          @import "../static/css/components/index/index-category.css";
          @import "../static/css/components/index/product-showcase.css";
          @import "../static/css/index.css";
        `}
      </style>
    </Layout>
  );
};

export default Home;
