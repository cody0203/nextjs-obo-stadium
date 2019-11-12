// Modules
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { connect } from "react-redux";
import Head from "next/head";
import { FormattedNumber } from "react-intl";
import { useRouter } from "next/router";
// Components
import { convertedSizes } from "../../../db";
import SizeChooseModal from "../../../components/size-choose-modal";
import Layout from "../../../components/layout";

// Redux
import { getProduct, setProductInfo } from "../../../redux/actions/product";

function mapStateToProps(state) {
  return {
    product: state.productReducer.product,
    productInfo: state.productReducer.productInfo
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setProductInfo: info => dispatch(setProductInfo(info))
  };
}

const Buy = props => {
  // Props
  const { product, productInfo, setProductInfo } = props;
  const router = useRouter();
  // States
  const [sizeModal, setSizeModal] = useState(false);

  // Life cycles
  useEffect(() => {
    setProductInfo({ size: Number(localStorage.getItem("size")) });
  }, []);

  // Methods
  const toggleSizeModal = () => {
    setSizeModal(!sizeModal);
  };

  const updateUserCurrentSize = size => {
    localStorage.setItem("size", size);
    setProductInfo({ size });
    toggleSizeModal();
  };

  // Variables

  const indexCurrentSize = convertedSizes["vn"].indexOf(productInfo.size);

  const sizes = {
    vn: convertedSizes["vn"][indexCurrentSize],
    us: convertedSizes["us"][indexCurrentSize],
    cm: convertedSizes["cm"][indexCurrentSize]
  };

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
        <link rel="stylesheet" type="text/css" href="/css/buying.css" />
      </Head>
      <main>
        <div className="main-wrapper container">
          <div className="row">
            {/* Product Info Section */}
            <section className="product-info-wrapper col-lg-7">
              <div className="product-info">
                <div className="product-name">{product.name}</div>
                <div className="price-info">
                  <span className="first-row">
                    Giá đặt mua cao nhất:{" "}
                    <span className="bid-price-info">
                      <FormattedNumber
                        style="currency"
                        currency="VND"
                        value={product.buy_price}
                      />
                    </span>
                  </span>
                  <span className="line"> |</span>{" "}
                  <span className="second-line">
                    Giá đặt bán thấp nhất:{" "}
                    <span className="ask-price-info">
                      <FormattedNumber
                        style="currency"
                        currency="VND"
                        value={product.sell_price}
                      />
                    </span>
                  </span>
                </div>
                <div className="size-info-wrapper">
                  Size:{" "}
                  <span className="size-info">
                    {sizes.us}US | {sizes.vn}VN | {sizes.cm}CM
                  </span>
                </div>
                <Link href="/shop/[id]" as={`/shop/${router.query.id}`}>
                  <a className="product-image">
                    <img
                      src={product.thumbnail}
                      alt="image-1"
                      className="img-fluid"
                    />
                  </a>
                </Link>
              </div>
            </section>
            {/* Buying Function Section */}
            <section className="buying col-lg-5">
              {/* Adress Section */}
              <div className="address-info-wrapper childs">
                <div className="header">
                  <div className="title">Địa chỉ nhận hàng</div>
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
                <div className="size-btn" onClick={toggleSizeModal}>
                  <button className="btn btn-primary size trans-btn">
                    <span className="size-text">Size</span>{" "}
                    <span className="size-details">
                      {sizes.us}US | {sizes.vn}VN | {sizes.cm}CM
                    </span>
                    <i className="fas fa-chevron-down dropdown-arrow" />
                  </button>
                </div>
                <div className="bid-buy-btn">
                  <button className="bid-btn btn btn-primary green-btn">
                    Đặt giá mua
                  </button>
                  <button className="buy-btn btn btn-primary trans-btn">
                    Mua ngay
                  </button>
                </div>
                <input
                  type="text"
                  className="price-input form-control"
                  placeholder="Đặt giá mua ..."
                />
                <div className="sub-price price-include">
                  <div className="text">Giá sản phẩm</div>
                  <div className="sub-price-showing">
                    <FormattedNumber
                      style="currency"
                      currency="VND"
                      value={product.buy_price}
                    />{" "}
                    ₫
                  </div>
                </div>
                <div className="shipping-price price-include">
                  <div className="text">Phí vận chuyển</div>
                  <div className="sub-price-showing">50.000 ₫</div>
                </div>
                <div className="coupon price-include">
                  <div className="text">Mã giảm giá</div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nhập mã giảm giá ..."
                  />
                </div>
                <div className="total-price price-include">
                  <div className="text">Tổng thanh toán</div>
                  <div className="total-price-showing">9.600.000 ₫</div>
                </div>
              </div>
              {/* Payment Methods Section */}
              <div className="payment-methods childs">
                <div className="title">Phương thức thanh toán</div>
                <div className="cod-wrapper radio-wrapper">
                  <input
                    type="radio"
                    name="payment-methods"
                    id="cod"
                    className="cod-radio-btn"
                    defaultChecked
                  />
                  <label htmlFor="cod">
                    <div className="radio-dot" />
                    <div className="cod">Thanh toán khi nhận hàng</div>
                  </label>
                </div>
                <div className="visa-master-wrapper radio-wrapper">
                  <input
                    type="radio"
                    name="payment-methods"
                    id="visa-master"
                    className="cod-radio-btn"
                  />
                  <label htmlFor="visa-master">
                    <div className="radio-dot" />
                    <div className="visa-master">
                      Thanh toán bằng thẻ quốc tế Visa, Master, JCB
                    </div>
                  </label>
                </div>
              </div>
              <Link href="/congrats">
                <a>
                  <button className="btn btn-primary confirm-btn red-btn">
                    Đặt mua
                  </button>
                </a>
              </Link>
            </section>
          </div>
        </div>
        <SizeChooseModal
          toggleSizeModal={toggleSizeModal}
          sizeModal={sizeModal}
          product={product}
          updateUserCurrentSize={updateUserCurrentSize}
        />
      </main>
    </Layout>
  );
};

Buy.getInitialProps = async ({ query, store, isServer }) => {
  await store.dispatch(getProduct(query.id));

  return { isServer };
};

export default connect(mapStateToProps, mapDispatchToProps)(Buy);
