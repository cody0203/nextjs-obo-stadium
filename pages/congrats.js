// Modules
import React, { useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import { connect } from "react-redux";
import { FormattedNumber } from "react-intl";

// Components

import { convertedSizes } from "../db";
import Layout from "../components/layout";
import Aux from "../components/hoc/aux";
// Redux
import { buying } from "../redux/actions/buying";

function mapStateToProps(state) {
  return {
    buyingDetails: state.buyingReducer.buyingDetails
  };
}

function mapDispatchToProps(dispatch) {
  return {
    buying: value => dispatch(buying(value))
  };
}

const Congrats = props => {
  // Props
  const { buyingDetails, buying } = props;
  // Variables
  const date = new Date(buyingDetails.buyingDate).toLocaleDateString("vi");
  const { buyingPrice, productName, productId, tax, size } = buyingDetails;
  const totalPrice = buyingPrice + tax;

  const indexCurrentSize = convertedSizes["vn"].indexOf(size);

  const sizes = {
    vn: convertedSizes["vn"][indexCurrentSize],
    us: convertedSizes["us"][indexCurrentSize],
    cm: convertedSizes["cm"][indexCurrentSize]
  };

  // Life cycles
  useEffect(() => {
    return () => {
      buying({
        buyingPrice: 0,
        tax: 0,
        size: 0,
        paymentMethod: "",
        buyingDate: "",
        productName: "",
        productId: null
      });
    };
  }, []);

  return (
    <Layout>
      {productId ? (
        <Aux>
          <Head>
            <title>Đặt mua thành công</title>
            <link
              rel="stylesheet"
              type="text/css"
              href="/css/except-home-page.css"
            />
            <link rel="stylesheet" type="text/css" href="/css/congrats.css" />
          </Head>
          <main>
            <div className="main-wrapper container-fluid">
              <div className="header">
                <h1 className="h1 title">Xin chúc mừng</h1>
                <div className="sub-title">
                  Bạn đã đặt hàng thành công, vui lòng kiểm tra lại thông tin
                  đơn hàng ở dưới đây
                </div>
              </div>
              {/* Short Desc  */}
              <div className="short-desc-wrapper row">
                <div className="short-desc container">
                  <div className="order-number-wrapper content">
                    <div className="title">MÃ ĐƠN HÀNG</div>
                    <div className="order-number main-content">12345</div>
                  </div>
                  <div className="order-date-wrapper content">
                    <div className="title">NGÀY ĐẶT HÀNG</div>
                    <div className="order-date main-content">{date}</div>
                  </div>
                  <div className="total-price-wrapper content">
                    <div className="title">THÀNH TIỀN</div>
                    <div className="total-price main-content">
                      <FormattedNumber
                        style="currency"
                        currency="VND"
                        value={totalPrice}
                      />
                    </div>
                  </div>
                  <div className="payment-methods-wrapper content">
                    <div className="title">PHƯƠNG THỨC THANH TOÁN</div>
                    <div className="payment-methods main-content">
                      Thanh toán khi nhận hàng
                    </div>
                  </div>
                </div>
              </div>
              {/* Full Desc  */}
              <div className="full-desc-wrapper row">
                <div className="full-desc container">
                  <div>
                    <h2 className="h2">Thông tin đơn hàng</h2>
                    <div className="content">
                      <div>SẢN PHẨM</div>
                      <div>THÀNH TIỀN</div>
                    </div>
                    <div className="break-line" />
                    <div className="content">
                      <div className="product-details">
                        <Link href="/shop/[id]" as={`/shop/${productId}`}>
                          <a className="product-name">{productName}</a>
                        </Link>
                        <div className="size">
                          {sizes.us}US | {sizes.vn}VN | {sizes.cm}CM
                        </div>
                      </div>
                      <div className="sub-price">
                        {" "}
                        <FormattedNumber
                          style="currency"
                          currency="VND"
                          value={buyingPrice}
                        />
                      </div>
                    </div>
                    <div className="break-line" />
                    <div className="content-price">
                      <div className="sub-price-wrapper wrapper">
                        <div className="text">TẠM TÍNH:</div>
                        <div className="sub-price">
                          <FormattedNumber
                            style="currency"
                            currency="VND"
                            value={buyingPrice}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="content-price">
                      <div className="shipping-price-wrapper wrapper">
                        <div className="text">PHÍ VẬN CHUYỂN:</div>
                        <div className="sub-price">
                          <FormattedNumber
                            style="currency"
                            currency="VND"
                            value={tax}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="content-price">
                      <div className="total-price-wrapper wrapper">
                        <div className="text">THÀNH TIỀN:</div>
                        <div className="sub-price">
                          <FormattedNumber
                            style="currency"
                            currency="VND"
                            value={totalPrice}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="go-back-home-wrapper">
                <Link href="/index">
                  <a className="go-back-home">
                    <button className="btn btn-primary go-back-home-btn red-btn">
                      Trở về trang chủ
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          </main>
        </Aux>
      ) : (
        <Aux>
          <Head>
            <title>Lỗi!</title>
            <link
              rel="stylesheet"
              type="text/css"
              href="/css/except-home-page.css"
            />
            <link rel="stylesheet" type="text/css" href="/css/congrats.css" />
          </Head>
          <main>
            <div className="main-wrapper container-fluid">
              <div className="header">
                <h1 className="h1 title error">Bạn chưa chọn sản phẩm.</h1>
              </div>
              <div className="go-back-home-wrapper">
                <Link href="/index">
                  <a className="go-back-home">
                    <button className="btn btn-primary go-back-home-btn red-btn">
                      Trở về trang chủ
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          </main>
        </Aux>
      )}
    </Layout>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Congrats);
