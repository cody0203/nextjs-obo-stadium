import React, { Fragment } from 'react';
import RelateNewsItem from 'components/relate-news-item/relate-news-item.component';

const LastestNews = () => {
  const news = [
    {
      id: 1,
      link: '/post.html',
      imgLink: '/assets/images/news/news-1-thumnails.jpg',
      title: `Pack “Logo Sketch” với branding mộc mạc trên Air Max 97`,
      description: `Cùng đến với mẫu branding kiểu phác thảo, đầy mộc mạc và 'blend'
    hoàn hảo cùng tổng thể phối màu.`
    },
    {
      id: 2,
      link: './post.html',
      imgLink: '/assets/images/news/news-2-thumnails.jpg',
      title: 'Nike Classic Cortez – Phối Màu Của Sự Tinh Tế',
      description: `Bộ sưu tập Nike Classic Cortez với sự kết hợp của 2 tông màu: Hồng
    Hoa Đăng và màu Cam`
    },
    {
      id: 3,
      link: './post.html',
      imgLink: '/assets/images/news/news-3-thumnails.jpg',
      title: 'Air Jordan 1 “Satin Black Toe” xuất hiện hình ảnh chi tiết',
      description: `Air Jordan 1 “Black Toe” luôn là thiết kế đáng mua nhất, lại còn
      là satin nữa chứ?`
    },
    {
      id: 4,
      link: './post.html',
      imgLink: '/assets/images/news/news-4-thumnails.jpg',
      title: 'HOT! Nike và Levi’s tái hợp với hàng loạt siêu phẩm mới',
      description: `Đến hẹn lại lên, Nike và Levi’s lại tái hợp với nhau khiến các tín
      đồ thời trang mê mệt.`
    }
  ];
  return (
    <Fragment>
      {news.map(newsItem => (
        <RelateNewsItem key={newsItem.id} {...newsItem} />
      ))}

      {/* <div className="news position-relative">
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
      </div> */}
    </Fragment>
  );
};

export default LastestNews;
