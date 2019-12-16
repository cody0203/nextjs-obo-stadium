import React from "react";
import Slider from "react-slick";

const LastestNews = () => {
  const slickSetting = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    focusOnSelect: true,
    variableWidth: true,
    touchThreshold: 6,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
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
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  };

  return (
    <Slider {...slickSetting}>
      <a className="news position-relative" href="./post.html">
        <div className="card">
          <img
            className="card-img-top"
            src="/assets/images/news/news-1-thumnails.jpg"
            alt="news-1"
          />
          <div className="card-body">
            <h5 className="card-title">
              Pack “Logo Sketch” với branding mộc mạc trên Air Max 97
              và&nbsp;Air&nbsp;Max Plus
            </h5>
            <p className="card-text news-short-desc">
              Cùng đến với mẫu branding kiểu phác thảo, đầy mộc mạc và “blend"
              hoàn hảo cùng tổng thể phối màu.
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
            src="/assets/images/news/news-2-thumnails.jpg"
            alt="news-1"
          />
          <div className="card-body">
            <h5 className="card-title">
              Nike Classic Cortez – Phối Màu Của Sự Tinh Tế
            </h5>
            <p className="card-text news-short-desc">
              Bộ sưu tập Nike Classic Cortez với sự kết hợp của 2 tông màu: Hồng
              Hoa Đăng và màu Cam
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
            src="/assets/images/news/news-3-thumnails.jpg"
            alt="news-3"
          />
          <div className="card-body">
            <h5 className="card-title">
              Air Jordan 1 “Satin Black Toe” xuất hiện hình ảnh chi tiết
            </h5>
            <p className="card-text news-short-desc">
              Air Jordan 1 “Black Toe” luôn là thiết kế đáng mua nhất, lại còn
              là satin nữa chứ?
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
            src="/assets/images/news/news-4-thumnails.jpg"
            alt="news-4"
          />
          <div className="card-body">
            <h5 className="card-title">
              HOT! Nike và Levi’s tái hợp với hàng loạt siêu phẩm mới
            </h5>
            <p className="card-text news-short-desc">
              Đến hẹn lại lên, Nike và Levi’s lại tái hợp với nhau khiến các tín
              đồ thời trang mê mệt.
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
            src="/assets/images/news/news-6-thumnails.jpg"
            alt="news-6"
          />
          <div className="card-body">
            <h5 className="card-title">
              Nike tung ảnh chính thức phối màu Supreme x SB Dunk Low “Metallic
              Silver”
            </h5>
            <p className="card-text news-short-desc">
              Mùa thu năm nay, lần collab thứ 3 của Supreme cùng dòng SB Dunk
              Low của Nike sẽ ra mắt.
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
            src="/assets/images/news/news-5-thumnails.jpg"
            alt="news-5"
          />
          <div className="card-body">
            <h5 className="card-title">
              Xuất hiện phối màu thứ 3 của Nike Air Force 1 Type N354
            </h5>
            <p className="card-text news-short-desc">
              Nike N354 là tên dự án với những thiết kế lấy cảm hứng từ kho
              Archive khổng lồ của The Swoosh.
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
            src="/assets/images/news/news-7-thumnails.jpg"
            alt="news-7"
          />
          <div className="card-body">
            <h5 className="card-title">
              Red Wing kết hợp cùng New Balance chế tác mẫu 997
              đầy&nbsp;tinh&nbsp;xảo
            </h5>
            <p className="card-text news-short-desc">
              Trong lần collab này, Red Wing và New Balance sẽ mang đến dòng
              sneaker 997.
            </p>
            <p className="card-text author">
              By <span className="name">Cody</span> · 27/07/2019
            </p>
          </div>
        </div>
        <div className="shadow mx-auto position-absolute" />
      </div>
    </Slider>
  );
};

export default LastestNews;
