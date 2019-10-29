import React, { useState, useEffect } from "react";
import Layout from "../../components/layout";
import Slider from "react-slick";
import Link from "next/link";
import { useRouter } from "next/router";

const Product = () => {
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

  return (
    <Layout>
      <main>
        {/* Breadcrum Section */}
        <div className="breadcrumb container">
          <a href="./index.html" className="previous-page">
            Trang chủ
          </a>
          <i className="fas fa-chevron-right arrow" />
          <a href="./shop.html" className="previous-page">
            Sản phẩm
          </a>
          <i className="fas fa-chevron-right arrow" />
          <span className="current-page">Tên sản phẩm</span>
        </div>
        {/* Products Content Section */}
        <section className="product-content-wrapper container">
          <div className="common-info">
            <div className="brand">Adidas</div>
            <div className="name">
              Adidas Yeezy Boost 700 Wave Runner Solid Grey
            </div>
            <div className="style-code">Style Code: B75571</div>
          </div>
          <div className="main-info row">
            <div className="product-image col-lg-6">
              <Slider
                asNavFor={nav2}
                ref={slider => (slider1 = slider)}
                {...mainProductSlide}
                className="slider slider-for"
              >
                <div className="img-zoom-container">
                  <img
                    src="/images/product-details-image/1.jpg"
                    alt="image-1"
                    className="img-fluid"
                  />
                </div>
                <div className="img-zoom-container">
                  <img
                    src="/images/product-details-image/2.jpg"
                    alt="image-2"
                    className="img-fluid"
                  />
                </div>
                <div className="img-zoom-container">
                  <img
                    src="/images/product-details-image/3.jpg"
                    alt="image-3"
                    className="img-fluid"
                  />
                </div>
                <div className="img-zoom-container">
                  <img
                    src="/images/product-details-image/4.jpg"
                    alt="image-5"
                    className="img-fluid"
                  />
                </div>
                <div className="img-zoom-container">
                  <img
                    src="/images/product-details-image/5.jpg"
                    alt="image-5"
                    className="img-fluid"
                  />
                </div>
              </Slider>
              <Slider
                asNavFor={nav1}
                ref={slider => (slider2 = slider)}
                {...pagingProductSlide}
                className="slider slider-nav"
              >
                <div>
                  <img
                    src="/images/product-details-image/1.jpg"
                    alt="image-1"
                    className="img-fluid"
                  />
                </div>
                <div>
                  <img
                    src="/images/product-details-image/2.jpg"
                    alt="image-2"
                    className="img-fluid"
                  />
                </div>
                <div>
                  <img
                    src="/images/product-details-image/3.jpg"
                    alt="image-3"
                    className="img-fluid"
                  />
                </div>
                <div>
                  <img
                    src="/images/product-details-image/4.jpg"
                    alt="image-4"
                    className="img-fluid"
                  />
                </div>
                <div>
                  <img
                    src="/images/product-details-image/5.jpg"
                    alt="image-5"
                    className="img-fluid"
                  />
                </div>
              </Slider>
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
                <span>&nbsp;7.350.000₫</span>
              </div>
              <div className="desc-sub">
                <span className="desc-sub-title">Ngày ra mắt:</span>
                <span>&nbsp;11/01/2017</span>
              </div>
              <div className="btns">
                <div className="size-btn">
                  <button className="btn btn-primary size trans-btn">
                    <span className="size-text">Size</span>{" "}
                    <span className="size-details">8US | 41VN | 26CM</span>
                    <i className="fas fa-chevron-down dropdown-arrow" />
                  </button>
                </div>
                <Link
                  href="/product/buy/[id]"
                  as={`/product/buy/${router.query.id}`}
                >
                  <a className="buy-btn">
                    <button className="btn btn-primary buy green-btn">
                      <div className="ask-text left-content">
                        <div className="ask-price main-content">
                          9.555.000 ₫
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
                  href="/product/sell/[id]"
                  as={`/product/sell/${router.query.id}`}
                >
                  <a className="sell-btn">
                    <button className="btn btn-primary sell red-btn">
                      <div className="ask-text left-content">
                        <div className="bid-price main-content">
                          9.310.000 ₫
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
            <div className="product position-relative">
              <div className="card">
                <img
                  src="/images/product/adidas-Yeezy-Boost-350-V2-Lundmark-Product.png"
                  className="card-img-top"
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
                  src="/images/product/adidas-Yeezy-Boost-350-V2-Lundmark-Product.png"
                  className="card-img-top"
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
                  src="/images/product/adidas-Yeezy-Boost-350-V2-Lundmark-Product.png"
                  className="card-img-top"
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
                  src="/images/product/adidas-Yeezy-Boost-350-V2-Lundmark-Product.png"
                  className="card-img-top"
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
                  src="/images/product/adidas-Yeezy-Boost-350-V2-Lundmark-Product.png"
                  className="card-img-top"
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
      </main>
      <style jsx>
        {`
          @import "/static/css/components/products.css";
          @import "/static/css/components/index/product-showcase.css";
          @import "/static/css/components/product-details/product-info.css";
          @import "/static/css/components/product-details/size-choose.css";
          @import "/static/css/components/product-details/size-guide-table.css";
          @import "/static/css/except-home-page.css";
          @import "/static/css/product-details.css";

          .slick-slider.slider-nav .slick-track {
            display: flex;
          }
        `}
      </style>

      <style>
        {`
          .jsx-1141515200 .slick-slider .slick-track {
            display: flex;
          }
        `}
      </style>
    </Layout>
  );
};

export default Product;
