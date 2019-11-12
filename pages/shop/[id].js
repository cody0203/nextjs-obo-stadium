// Modules
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormattedNumber, FormattedDate } from "react-intl";

// Components
import "../../components/fontawesome";
import Layout from "../../components/layout";
import SizeChooseModal from "../../components/size-choose-modal";
import { convertedSizes } from "../../db";

// Redux
import { getAllProducts } from "../../redux/actions/product";

function mapStateToProps(state) {
  return {
    products: state.productReducer.productsAll,
    productInfo: state.productReducer.productInfo
  };
}

const Product = props => {
  // Props
  const router = useRouter();
  const { productId, products, productInfo } = props;

  // States
  const [sizeModal, setSizeModal] = useState(false);
  const [currentUserSize, setCurrentUserSize] = useState(null);

  // Life cycles

  useEffect(() => {
    setCurrentUserSize(Number(localStorage.getItem("size")));
  }, []);

  // Methods
  const toggleSizeModal = () => {
    setSizeModal(!sizeModal);
  };

  const updateUserCurrentSize = (size) => {
    localStorage.setItem("size", size)
    setCurrentUserSize(size);
    toggleSizeModal()
  }

  const product = products.find(product => product.id === Number(productId));

  const relateProducts = products
    .filter(products => {
      return products.brand === product.brand && products.id !== product.id;
    })
    .slice(0, 5);

  //Render
  const relateProductsRender = relateProducts.map(product => {
    return (
      <Link href="/shop/[id]" as={`/shop/${product.id}`} key={product.id}>
        <a className="product position-relative">
          <div className="card">
            <img
              src={product.thumbnail}
              className="card-img-top"
              alt="adidas-Yeezy-Boost-350-V2-Lundmark"
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
              <p className="card-text sold">Đã bán {product.total_sold} đôi</p>
            </div>
          </div>
          <div className="shadow mx-auto position-absolute" />
        </a>
      </Link>
    );
  });

  // Variables

  const indexCurrentSize = convertedSizes["vn"].indexOf(currentUserSize);

  const sizes = {
    vn: convertedSizes["vn"][indexCurrentSize],
    us: convertedSizes["us"][indexCurrentSize],
    cm: convertedSizes["cm"][indexCurrentSize]
  };

  return (
    <Layout>
      <Head>
        <title>{product.name}</title>
        <link
          rel="stylesheet"
          type="text/css"
          href="/css/components/products.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/css/components/index/product-showcase.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/css/components/product-details/product-info.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/css/components/product-details/size-choose.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/css/components/product-details/size-guide-table.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/css/except-home-page.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/css/product-details.css"
        />
      </Head>
      <main>
        {/* Breadcrum Section */}
        <div className="breadcrumb container">
          <Link href="/index">
            <a className="previous-page">Trang chủ</a>
          </Link>
          <FontAwesomeIcon icon="chevron-right" className="arrow" />
          <Link href="/shop">
            <a className="previous-page">Sản phẩm</a>
          </Link>
          <FontAwesomeIcon icon="chevron-right" className="arrow" />
          <span className="current-page">{product.name}</span>
        </div>
        {/* Products Content Section */}
        <section className="product-content-wrapper container">
          <div className="common-info">
            <div className="brand">{product.brand}</div>
            <div className="name">{product.name}</div>
            <div className="style-code">Style Code: B75571</div>
          </div>
          <div className="main-info row">
            <div className="product-image col-lg-6">
              <div className="img-zoom-container">
                <img
                  src={product.thumbnail}
                  alt="image-1"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="product-info col-lg-6">
              <div className="title h3">Mô tả sản phẩm</div>
              <div className="desc">
                <p>
                  Trend “dad shoes” đang gây bão trong giới trẻ hiện nay và mẫu
                  giày Yeezy 700 Wave Runner Solid Grey cũng góp phần tạo nên
                  sức hút cho cơn sốt này, khiến giới săn giày đứng ngồi không
                  yên. Kiểu dáng của Yeezy 700 Wave Runner Solid Grey chịu sự
                  ảnh hưởng của những mẫu “dad shoes” và cross-trainer, hiện
                  đang là 2 xu hướng sneaker được ưa thích trong những năm gần
                  đây. Đế giày đậm chất chunky sneaker và thiết kế retro, đi
                  cùng bản phối xám / xanh / cam đã dễ dàng thổi “bùa yêu” vào
                  giới yêu giày.
                </p>
              </div>
              <div className="desc-sub">
                <span className="desc-sub-title">Phối màu:</span>
                <span>&nbsp;Solid grey/Chalk white/Core black</span>
              </div>
              <div className="desc-sub">
                <span className="desc-sub-title">Giá bán lẻ khi ra mắt: </span>
                <FormattedNumber
                  style="currency"
                  currency="VND"
                  value={product.retail_price}
                />
              </div>
              <div className="desc-sub">
                <span className="desc-sub-title">Ngày ra mắt: </span>
                <FormattedDate
                  value={new Date(+product.release_date * 1000)}
                  year="numeric"
                  month="long"
                  day="2-digit"
                />
              </div>
              <div className="btns">
                {currentUserSize && product["available_size"].includes(currentUserSize) ? (
                  <div className="size-btn" onClick={toggleSizeModal}>
                    <button className="btn btn-primary size trans-btn">
                      <span className="size-text">Size</span>{" "}
                      <span className="size-details">
                        {sizes.us}US | {sizes.vn}VN | {sizes.cm}CM
                      </span>
                      <FontAwesomeIcon
                        icon="chevron-down"
                        className="dropdown-arrow"
                      />
                    </button>
                  </div>
                ) : (
                  <div className="size-btn" onClick={toggleSizeModal}>
                    <button className="btn btn-primary size trans-btn">
                      <span className="size-details">Vui lòng chọn size</span>
                      <FontAwesomeIcon
                        icon="chevron-down"
                        className="dropdown-arrow"
                      />
                    </button>
                  </div>
                )}

                <Link href="/shop/buy/[id]" as={`/shop/buy/${router.query.id}`}>
                  <a className="buy-btn">
                    <button className="btn btn-primary buy green-btn">
                      <div className="ask-text left-content">
                        <div className="ask-price main-content">
                          <FormattedNumber
                            style="currency"
                            currency="VND"
                            value={product.sell_price}
                          />
                        </div>
                        <div className="ask-desc sub-content">
                          Giá đặt bán thấp nhất
                        </div>
                      </div>
                      <div className="buy-text right-content">
                        <div className="buy-now main-content">Mua ngay</div>
                        <div className="bid sub-content">hoặc đấu giá</div>
                      </div>
                    </button>
                  </a>
                </Link>
                <Link
                  href="/shop/sell/[id]"
                  as={`/shop/sell/${router.query.id}`}
                >
                  <a className="sell-btn">
                    <button className="btn btn-primary sell red-btn">
                      <div className="ask-text left-content">
                        <div className="bid-price main-content">
                          <FormattedNumber
                            style="currency"
                            currency="VND"
                            value={product.buy_price}
                          />
                        </div>
                        <div className="ask-desc sub-content">
                          Giá đặt mua cao nhất
                        </div>
                      </div>
                      <div className="sell-text right-content">
                        <div className="buy-now main-content">Bán ngay</div>
                        <div className="bid sub-content">hoặc đặt giá bán</div>
                      </div>
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <div className="break-section container-fluid" />
        <div className="instagram-image container">
          <div className="row">
            <div className="col-12">
              <div className="title">
                <h2 className="h2">Hình ảnh on feet</h2>
                <p className="sub-title">Hãy tag chúng tôi @obostadium</p>
              </div>
              <div className="slide-btn" />
            </div>
          </div>
          <div id="instafeed" />
        </div>
        <div className="break-section container-fluid" />
        <section className="products-showcase container">
          <div className="row">
            <div className="title col-12">
              <h2 className="h2">Sản phẩm liên quan</h2>
            </div>
          </div>
          <div className="row product-row d-flex justify-content-md-between">
            {relateProductsRender}
          </div>
        </section>

        <SizeChooseModal
          toggleSizeModal={toggleSizeModal}
          sizeModal={sizeModal}
          currentUserSize={currentUserSize}
          product={product}
          updateUserCurrentSize={updateUserCurrentSize}
        />
      </main>
    </Layout>
  );
};

Product.getInitialProps = async ctx => {
  const { store, query, isServer } = ctx;
  const storeData = store.getState();

  if (storeData.productReducer.productsAll.length === 0) {
    await store.dispatch(getAllProducts());
  }

  return {
    isServer,
    productId: query.id
  };
};

export default connect(mapStateToProps)(Product);
