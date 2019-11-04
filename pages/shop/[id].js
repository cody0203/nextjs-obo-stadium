import React, { useState, useEffect } from "react";
import Layout from "../../components/layout";
import Slider from "react-slick";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";
import { connect } from "react-redux";
import { FormattedNumber } from "react-intl";

function mapStateToProps(state) {
  return {
    products: state.productReducer.products
  };
}

const ConnectedProduct = props => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  let slider1, slider2;
  const router = useRouter();

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  }, []);

  const mainProductSlide = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true
  };

  const pagingProductSlide = {
    slidesToShow: 5, // 3,
    slidesToScroll: 1,
    dots: false,
    infinite: false,
    focusOnSelect: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  };

  const product = props.products.find(
    product => product.id === props.productId
  );

  const relateProducts = props.products
    .filter(products => {
      return products.brand === product.brand && products.id !== product.id;
    })
    .slice(0, 5);

  const relateProductsRender = relateProducts.map(product => {
    return (
      <div className="product position-relative" key={product.id}>
        <div className="card">
          <img
            src={product.thumbnail}
            className="card-img-top"
            alt="adidas-Yeezy-Boost-350-V2-Lundmark"
          />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text price-desc">Giá thấp nhất hiện tại</p>
            <p className="price">{product.sell_price} ₫</p>
            <p className="card-text sold">Đã bán {product.total_sold} đôi</p>
          </div>
        </div>
        <div className="shadow mx-auto position-absolute" />
      </div>
    );
  });

  return (
    <Layout>
      <Head>
        <title>San pham</title>
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
          <a href="/index" className="previous-page">
            Trang chủ
          </a>
          <i className="fas fa-chevron-right arrow" />
          <a href="/shop" className="previous-page">
            Sản phẩm
          </a>
          <i className="fas fa-chevron-right arrow" />
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
                <p>
                  Phần upper sử dụng chất liệu breathable mesh, suede và nubuck.
                  Điểm nhấn ấn tượng chính là thiết kế là dây giày màu neon đi
                  kèm một số chi tiết được làm bằng chất liệu 3M phản quang. Với
                  bộ đế boost nổi tiếng và form giày rộng rãi, Yeezy 700 Wave
                  Runner Solid Grey mang đến cảm giác dễ chịu nhất cho người
                  mang. Cộng nghệ Boost với tấm đệm lót “thần thánh” êm ái, bạn
                  có thể mang đôi giày này từ sáng đến tối mà không hề có cảm
                  giác khó chịu hay bí bách. Không những hype mà còn comfy nữa.
                </p>
              </div>
              <div className="desc-sub">
                <span className="desc-sub-title">Phối màu:</span>
                <span>&nbsp;Solid grey/Chalk white/Core black</span>
              </div>
              <div className="desc-sub">
                <span className="desc-sub-title">Giá bán lẻ khi ra mắt:</span>
                <span>&nbsp;{product.retail_price} ₫</span>
              </div>
              <div className="desc-sub">
                <span className="desc-sub-title">Ngày ra mắt:</span>
                <span>&nbsp;11/01/2017</span>
              </div>
              <div className="btns">
                <div className="size-btn">
                  <button className="btn btn-primary size trans-btn">
                    <span className="size-text">Size</span>{" "}
                    <span className="size-details">
                      8US | {product.available_size[0]}VN | 26CM
                    </span>
                    <i className="fas fa-chevron-down dropdown-arrow" />
                  </button>
                </div>
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
      </main>
    </Layout>
  );
};

ConnectedProduct.getInitialProps = context => {
  return {
    productId: context.query.id
  };
};

const Product = connect(mapStateToProps)(ConnectedProduct);

export default Product;
