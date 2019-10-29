import React from "react";
import Layout from "../components/layout";

const Account = () => {
  return (
    <Layout>
      <main>
        <div className="main-content-wrapper container">
          <div className="row">
            <div className="col-lg-3">
              <div className="left-sidebar">
                <div className="header">
                  <div className="avatar">
                    <img
                      src="/images/post/avatar.png"
                      alt="avatar"
                      className="img-fluid"
                    />
                  </div>
                  <div className="user-info">
                    <div className="user-name">Cody</div>
                    <div className="edit-profile">Chỉnh sửa tài khoản</div>
                  </div>
                </div>
                <div className="break-line" />
                <div className="nav-sidebar">
                  <a
                    href="./buying-selling-products.html"
                    className="selling-buying-products nav-item"
                  >
                    Quản lý mua/bán sản phẩm
                  </a>
                  <div className="selling-buying-products nav-item">
                    Đơn hàng mua
                  </div>
                  <div className="selling-buying-products nav-item">
                    Đơn hàng bán
                  </div>
                  <div className="selling-buying-products nav-item">
                    Quản lý tài khoản
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <style jsx>
        {`
          @import "/static/css/components/buying/shipping-info.css";
          @import "/static/css/components/payment-methods-modal.css";
          @import "/static/css/except-home-page.css";
          @import "/static/css/account.css";
          @import "/static/css/account-setting.css";
        `}
      </style>
    </Layout>
  );
};

export default Account;
