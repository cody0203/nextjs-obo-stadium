import React from "react";
import Layout from "../../../components/layout";
import Head from "next/head";

const Sell = () => {
  return (
    <Layout>
      <Head>
        <title>Mua</title>
        <link
          rel="stylesheet"
          type="text/css"
          href="/css/components/buying/product-info.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/css/components/buying/pricing.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/css/components/buying/shipping-info.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/css/components/product-details/size-choose.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/css/components/buying/buying-section.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/css/components/product-details/size-guide-table.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/css/components/input-radio.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/css/components/payment-methods-modal.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/css/except-home-page.css"
        />
      </Head>
      <main>
        <div className="main-wrapper container">
          <div className="row">
            {/* Product Info Section */}
            <section className="product-info-wrapper col-lg-7">
              <div className="product-info">
                <div className="product-name">
                  Adidas Yeezy Boost 700 Wave Runner Solid Grey
                </div>
                <div className="price-info">
                  <span className="first-row">
                    Giá đặt mua cao nhất:{" "}
                    <span className="bid-price-info">9.310.000 ₫</span>
                  </span>
                  <span className="line">|</span>{" "}
                  <span className="second-line">
                    Giá đặt bán thấp nhất:{" "}
                    <span className="ask-price-info">9.550.000 ₫</span>
                  </span>
                </div>
                <div className="size-info-wrapper">
                  Size: <span className="size-info">8US | 41VN | 26CM</span>
                </div>
                <a href="./product-details.html" className="product-image">
                  <img
                    src="/assets/images/product-details-image/1.jpg"
                    alt="image-1"
                    className="img-fluid"
                  />
                </a>
              </div>
            </section>
            {/* Selling Function Section */}
            <section className="buying col-lg-5">
              {/* Adress Section */}
              <div className="address-info-wrapper childs">
                <div className="header">
                  <div className="title">Địa chỉ giao hàng</div>
                  <button className="btn btn-primary change red-btn">
                    Thay đổi
                  </button>
                </div>
                <div className="info-wrapper radio-wrapper">
                  <input
                    type="radio"
                    name="address-info"
                    id="address-info"
                    className="address-radio-btn"
                    defaultChecked
                  />
                  <label htmlFor="address-info">
                    <div className="radio-dot" />
                    <div>
                      <div className="name-phone">
                        <b>Cody</b> | 036530xxxx
                      </div>
                      <div className="address">
                        48 Tố Hữu, Lê Văn Lương kéo dài, Từ Liêm, Hà Nội
                      </div>
                    </div>
                  </label>
                </div>
              </div>
              {/* Pricing Section */}
              <div className="pricing childs">
                <div className="size-btn">
                  <button className="btn btn-primary size trans-btn">
                    <span className="size-text">Size</span>{" "}
                    <span className="size-details">8US | 41VN | 26CM</span>
                    <i className="fas fa-chevron-down dropdown-arrow" />
                  </button>
                </div>
                <div className="bid-buy-btn">
                  <button className="bid-btn btn btn-primary red-btn">
                    Đặt giá bán
                  </button>
                  <button className="buy-btn btn btn-primary trans-btn">
                    Bán ngay
                  </button>
                </div>
                <input
                  type="text"
                  className="price-input form-control"
                  placeholder="Đặt giá mua ..."
                />
              </div>
              <button className="btn btn-primary confirm-btn red-btn">
                Đặt bán
              </button>
            </section>
          </div>
        </div>
      </main>

      {/* <style jsx>
        {`
          @import "/css/components/buying/product-info.css";
          @import "/css/components/buying/pricing.css";
          @import "/css/components/buying/shipping-info.css";
          @import "/css/components/product-details/size-choose.css";
          @import "/css/components/buying/buying-section.css";
          @import "/css/components/product-details/size-guide-table.css";
          @import "/css/components/input-radio.css";
          @import "/css/components/payment-methods-modal.css";
          @import "/css/except-home-page.css";
        `}
      </style> */}
    </Layout>
  );
};

export default Sell;
