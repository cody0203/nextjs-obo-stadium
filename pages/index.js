import React from "react";
import Layout from "../components/layout";

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
          <div className="carousel">
            <a className="news position-relative" href="./post.html">
              <div className="card">
                <img
                  className="card-img-top"
                  src="/images/news/news-1-thumnails.jpg"
                  alt="news-1"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Pack “Logo Sketch” với branding mộc mạc trên Air Max 97
                    và&nbsp;Air&nbsp;Max Plus
                  </h5>
                  <p className="card-text news-short-desc">
                    Cùng đến với mẫu branding kiểu phác thảo, đầy mộc mạc và
                    “blend" hoàn hảo cùng tổng thể phối màu.
                  </p>
                  <p className="card-text author">
                    By <span className="name">Cody</span> · 27/08/2019
                  </p>
                </div>
              </div>
              <div className="shadow mx-auto position-absolute" />
            </a>
            <div className="news position-relative">
              <div className="card">
                <img
                  className="card-img-top"
                  src="/images/news/news-2-thumnails.jpg"
                  alt="news-1"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Nike Classic Cortez – Phối Màu Của Sự Tinh Tế
                  </h5>
                  <p className="card-text news-short-desc">
                    Bộ sưu tập Nike Classic Cortez với sự kết hợp của 2 tông
                    màu: Hồng Hoa Đăng và màu Cam
                  </p>
                  <p className="card-text author">
                    By <span className="name">Cody</span> · 21/08/2019
                  </p>
                </div>
              </div>
              <div className="shadow mx-auto position-absolute" />
            </div>
            <div className="news position-relative">
              <div className="card">
                <img
                  className="card-img-top"
                  src="/images/news/news-3-thumnails.jpg"
                  alt="news-3"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Air Jordan 1 “Satin Black Toe” xuất hiện hình ảnh chi tiết
                  </h5>
                  <p className="card-text news-short-desc">
                    Air Jordan 1 “Black Toe” luôn là thiết kế đáng mua nhất, lại
                    còn là satin nữa chứ?
                  </p>
                  <p className="card-text author">
                    By <span className="name">Cody</span> · 18/08/2019
                  </p>
                </div>
              </div>
              <div className="shadow mx-auto position-absolute" />
            </div>
            <div className="news position-relative">
              <div className="card">
                <img
                  className="card-img-top"
                  src="/images/news/news-4-thumnails.jpg"
                  alt="news-4"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    HOT! Nike và Levi’s tái hợp với hàng loạt siêu phẩm mới
                  </h5>
                  <p className="card-text news-short-desc">
                    Đến hẹn lại lên, Nike và Levi’s lại tái hợp với nhau khiến
                    các tín đồ thời trang mê mệt.
                  </p>
                  <p className="card-text author">
                    By <span className="name">Cody</span> · 15/08/2019
                  </p>
                </div>
              </div>
              <div className="shadow mx-auto position-absolute" />
            </div>
            <div className="news position-relative">
              <div className="card">
                <img
                  className="card-img-top"
                  src="/images/news/news-6-thumnails.jpg"
                  alt="news-6"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Nike tung ảnh chính thức phối màu Supreme x SB Dunk Low
                    “Metallic Silver”
                  </h5>
                  <p className="card-text news-short-desc">
                    Mùa thu năm nay, lần collab thứ 3 của Supreme cùng dòng SB
                    Dunk Low của Nike sẽ ra mắt.
                  </p>
                  <p className="card-text author">
                    By <span className="name">Cody</span> · 11/08/2019
                  </p>
                </div>
              </div>
              <div className="shadow mx-auto position-absolute" />
            </div>
            <div className="news position-relative">
              <div className="card">
                <img
                  className="card-img-top"
                  src="/images/news/news-5-thumnails.jpg"
                  alt="news-5"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Xuất hiện phối màu thứ 3 của Nike Air Force 1 Type N354
                  </h5>
                  <p className="card-text news-short-desc">
                    Nike N354 là tên dự án với những thiết kế lấy cảm hứng từ
                    kho Archive khổng lồ của The Swoosh.
                  </p>
                  <p className="card-text author">
                    By <span className="name">Cody</span> · 27/07/2019
                  </p>
                </div>
              </div>
              <div className="shadow mx-auto position-absolute" />
            </div>
            <div className="news position-relative">
              <div className="card">
                <img
                  className="card-img-top"
                  src="/images/news/news-7-thumnails.jpg"
                  alt="news-7"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Red Wing kết hợp cùng New Balance chế tác mẫu 997
                    đầy&nbsp;tinh&nbsp;xảo
                  </h5>
                  <p className="card-text news-short-desc">
                    Trong lần collab này, Red Wing và New Balance sẽ mang đến
                    dòng sneaker 997.
                  </p>
                  <p className="card-text author">
                    By <span className="name">Cody</span> · 27/07/2019
                  </p>
                </div>
              </div>
              <div className="shadow mx-auto position-absolute" />
            </div>
          </div>
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
