// Modules
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { connect } from "react-redux";
import Head from "next/head";
import { FormattedNumber } from "react-intl";
import { useRouter } from "next/router";
import { TabContent, TabPane, Nav, NavItem } from "reactstrap";
import IntlNumberInput from "react-intl-number-input";
import { convertedSizes } from "../../../db";
import IntlCurrencyInput from "react-intl-currency-input";

// Components
import Layout from "components/layout";
import SizeChooseModal from "components/modals/size-choose-modal";
import AddressModal from "components/modals/address";
import CreditCard from "components/modals/credit-card";

// Redux
import { getProduct, setProductInfo } from "/redux/actions/product";
import { buying } from "/redux/actions/buying";
import { getUsers } from "/redux/actions/user";

function mapStateToProps(state) {
  return {
    product: state.productReducer.product,
    productInfo: state.productReducer.productInfo,
    buyingDetails: state.buyingReducer.buyingDetails,
    user: state.userReducer.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setProductInfo: info => dispatch(setProductInfo(info)),
    buying: value => dispatch(buying(value))
  };
}

const Buy = props => {
  // Props
  const {
    product,
    productInfo,
    setProductInfo,
    buyingDetails,
    buying,
    user
  } = props;

  const router = useRouter();
  // Variables
  const tax = 50000;
  const indexCurrentSize = convertedSizes["vn"].indexOf(productInfo.size);

  const sizes = {
    vn: convertedSizes["vn"][indexCurrentSize],
    us: convertedSizes["us"][indexCurrentSize],
    cm: convertedSizes["cm"][indexCurrentSize]
  };

  // States
  const [sizeModal, setSizeModal] = useState(false);
  const [creditCardModal, setCreditCardModal] = useState(false);
  const [activeTab, setActiveTab] = useState("1");
  const [biddingInput, setBiddingInput] = useState(0);
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const [currentPaymentMethod, setCurrentPaymentMethod] = useState("cod");

  // Life cycles
  useEffect(() => {
    setBiddingInput(0);
    buying({
      buyingPrice: 0,
      tax: 0,
      size: 0,
      paymentMethod: "",
      buyingDate: "",
      productName: "",
      productId: null
    });
  }, []);

  // Methods
  const toggleSizeModal = () => {
    setSizeModal(!sizeModal);
  };

  const toggleAddressModal = () => {
    setIsAddressModalOpen(!isAddressModalOpen);
  };

  const toggleTab = tab => {
    if (activeTab !== tab) setActiveTab(tab);
    if (tab === "1") {
      setBiddingInput(0);
      buying({ ...buyingDetails, buyingPrice: 0 });
    } else {
      buying({ ...buyingDetails, buyingPrice: product.sell_price });
    }
  };

  const updateUserCurrentSize = size => {
    setProductInfo({ size });
    toggleSizeModal();
  };

  const handleBidding = e => {
    const value = +e.target.value;
    setBiddingInput(value);
    buying(value + tax);
    if (product.sell_price < value) {
      setActiveTab("2");
      buying({ ...buyingDetails, buyingPrice: product.sell_price });
    }
  };

  const handleBought = () => {
    const today = new Date().valueOf();
    buying({
      ...buyingDetails,
      size: productInfo.size,
      tax: tax,
      buyingDate: today,
      productName: product.name,
      productId: router.query.id
    });
  };

  const changePaymentMethod = e => {
    const method = e.target.id;
    setCurrentPaymentMethod(method);

    if (e.target.id === "visa-master" && user.paymentMethod.length === 0) {
      togglePaymentMethodModal()
    }
  };

  const togglePaymentMethodModal = () => {
    setCreditCardModal(!creditCardModal);
  };

  // Render

  const addressRender = user.addresses.map((address, index) => {
    return (
      <div className="info-wrapper radio-wrapper" key={index}>
        <input
          type="radio"
          name={`address-info${index}`}
          id="address-info"
          className="address-radio-btn"
          defaultChecked
        />
        <label htmlFor={`address-info${index}`}>
          <div className="radio-dot" />
          <div>
            <div className="name-phone">
              <b>{address.name}</b> | {address.phone}
            </div>
            <div className="address">
              {address.alias}, {address.ward}, {address.district},{" "}
              {address.city}
            </div>
          </div>
        </label>
      </div>
    );
  });

  return (
    <Layout>
      <Head>
        <title>{product.name}</title>
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
                  <button
                    className="btn btn-primary change red-btn"
                    onClick={toggleAddressModal}
                  >
                    {user.addresses.length !== 0 ? "Thay đổi" : "+ Thêm mới"}
                  </button>
                </div>
                {addressRender}
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
                <Nav tabs style={{ borderBottom: "none" }}>
                  <NavItem style={{ flex: "1" }}>
                    <button
                      className={
                        activeTab === "1"
                          ? "bid-btn btn btn-primary green-btn"
                          : "bid-btn btn btn-primary trans-btn"
                      }
                      style={{
                        pointerEvents: activeTab === "1" ? "none" : "auto"
                      }}
                      onClick={() => {
                        toggleTab("1");
                      }}
                    >
                      Đặt giá mua
                    </button>
                  </NavItem>
                  <NavItem style={{ flex: "1" }}>
                    <button
                      className={
                        activeTab === "2"
                          ? "buy-btn btn btn-primary green-btn"
                          : "buy-btn btn btn-primary trans-btn"
                      }
                      style={{
                        pointerEvents: activeTab === "2" ? "none" : "auto"
                      }}
                      onClick={() => {
                        toggleTab("2");
                      }}
                    >
                      Mua ngay
                    </button>
                  </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}>
                  <TabPane tabId="1">
                    <input
                      value={biddingInput}
                      onChange={handleBidding}
                      className="price-input form-control"
                    />

                    <div className="sub-price price-include">
                      <div className="text">Giá sản phẩm</div>
                      <div className="sub-price-showing">
                        <FormattedNumber
                          style="currency"
                          currency="VND"
                          value={biddingInput}
                        />
                      </div>
                    </div>
                    <div className="shipping-price price-include">
                      <div className="text">Phí vận chuyển</div>
                      <div className="sub-price-showing">
                        <FormattedNumber
                          style="currency"
                          currency="VND"
                          value={tax}
                        />
                      </div>
                    </div>
                    <div className="total-price price-include">
                      <div className="text">Tổng thanh toán</div>

                      <div className="total-price-showing">
                        {biddingInput !== 0 ? (
                          <FormattedNumber
                            style="currency"
                            currency="VND"
                            value={biddingInput + tax}
                          />
                        ) : (
                          <FormattedNumber
                            style="currency"
                            currency="VND"
                            value={0}
                          />
                        )}
                      </div>
                    </div>
                  </TabPane>
                  <TabPane tabId="2">
                    <FormattedNumber
                      style="currency"
                      currency="VND"
                      value={product.sell_price}
                    >
                      {value => (
                        <input
                          type="text"
                          className="price-input form-control"
                          value={value}
                          disabled
                        />
                      )}
                    </FormattedNumber>

                    <div className="sub-price price-include">
                      <div className="text">Giá sản phẩm</div>
                      <div className="sub-price-showing">
                        <FormattedNumber
                          style="currency"
                          currency="VND"
                          value={product.sell_price}
                        />
                      </div>
                    </div>
                    <div className="shipping-price price-include">
                      <div className="text">Phí vận chuyển</div>
                      <div className="sub-price-showing">
                        <FormattedNumber
                          style="currency"
                          currency="VND"
                          value={tax}
                        />
                      </div>
                    </div>
                    <div className="total-price price-include">
                      <div className="text">Tổng thanh toán</div>
                      <div className="total-price-showing">
                        <FormattedNumber
                          style="currency"
                          currency="VND"
                          value={product.sell_price + tax}
                        />
                      </div>
                      {/* <div className="total-price-showing">9.600.000 ₫</div> */}
                    </div>
                  </TabPane>
                </TabContent>
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
                    checked={currentPaymentMethod === "cod" ? true : false}
                    onChange={changePaymentMethod}
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
                    checked={
                      currentPaymentMethod === "visa-master" ? true : false
                    }
                    onChange={changePaymentMethod}
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
                  <button
                    className="btn btn-primary confirm-btn red-btn"
                    disabled={
                      user.addresses.length === 0 ||
                      buyingDetails.buyingPrice === 0
                        ? true
                        : false
                    }
                    onClick={handleBought}
                  >
                    Đặt mua
                  </button>
                </a>
              </Link>
            </section>
          </div>
        </div>

        {/* Modals  */}
        <SizeChooseModal
          toggleSizeModal={toggleSizeModal}
          sizeModal={sizeModal}
          product={product}
          updateUserCurrentSize={updateUserCurrentSize}
        />
        <AddressModal
          toggleAddressModal={toggleAddressModal}
          isAddressModalOpen={isAddressModalOpen}
        />

        <CreditCard
          togglePaymentMethodModal={togglePaymentMethodModal}
          creditCardModal={creditCardModal}
        />

        <style jsx>
          {`
            .bid-btn {
              border-top-right-radius: 0px;
              border-bottom-right-radius: 0px;
            }

            .buy-btn {
              border-top-left-radius: 0px;
              border-bottom-left-radius: 0px;
            }

            .bid-btn.trans-btn {
              border-right-color: transparent !important;
            }

            .buy-btn.trans-btn {
              border-left-color: transparent !important;
            }
          `}
        </style>
      </main>
    </Layout>
  );
};

Buy.getInitialProps = async ({ query, store, isServer }) => {
  await store.dispatch(getUsers());
  await store.dispatch(getProduct(query.id));

  return { isServer };
};

export default connect(mapStateToProps, mapDispatchToProps)(Buy);
