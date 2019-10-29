import React from "react";
import Layout from "../components/layout";
import Link from "next/link";

const Congrats = () => {
  return (
    <Layout>
      <main>
        <div className="main-wrapper container-fluid">
          <div className="header">
            <h1 className="h1 title">Xin chúc mừng</h1>
            <div className="sub-title">
              Bạn đã đặt hàng thành công, vui lòng kiểm tra lại thông tin đơn
              hàng ở dưới đây
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
                <div className="order-date main-content">03/08/2019</div>
              </div>
              <div className="total-price-wrapper content">
                <div className="title">THÀNH TIỀN</div>
                <div className="total-price main-content">9.600.000 ₫</div>
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
                    <a href="./product-details.html" className="product-name">
                      Adidas Yeezy Boost 700 Wave Runner Solid Grey
                    </a>
                    <div className="size">8US | 41VN | 26CM</div>
                  </div>
                  <div className="sub-price">9.550.000 ₫</div>
                </div>
                <div className="break-line" />
                <div className="content-price">
                  <div className="sub-price-wrapper wrapper">
                    <div className="text">TẠM TÍNH:</div>
                    <div className="sub-price">9.550.000 ₫</div>
                  </div>
                </div>
                <div className="content-price">
                  <div className="shipping-price-wrapper wrapper">
                    <div className="text">PHÍ VẬN CHUYỂN:</div>
                    <div className="sub-price">50.000 ₫</div>
                  </div>
                </div>
                <div className="content-price">
                  <div className="total-price-wrapper wrapper">
                    <div className="text">THÀNH TIỀN:</div>
                    <div className="sub-price">9.600.000 ₫</div>
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

      <style jsx>
        {`
          @import "/static/css/except-home-page.css";
          @import "/static/css/congrats.css";
        `}
      </style>
    </Layout>
  );
};

export default Congrats;
