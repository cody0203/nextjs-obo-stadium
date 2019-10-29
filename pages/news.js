import React from "react";
import Layout from "../components/layout";
import Link from "next/link";

const News = () => {
  const title = (
    <div className="content text-center">
      <h1 className="slogan main-heading text-uppercase">Tin tức</h1>
    </div>
  );

  const postId = `fd41234`;

  return (
    <Layout title={title}>
      <main>
        <div className="breadcrumb container">
          <a href="./index.html" className="previous-page">
            Trang chủ
          </a>
          <i className="fas fa-chevron-right arrow" />{" "}
          <span className="current-page">Tin tức</span>
        </div>
        <section className="news-wrapper container">
          <Link href="/post/[id]" as={`/post/${postId}`}>
            <a className="news news-odd">
              <div className="row">
                <div className="details col-5 offset-1">
                  <div className="date">27/7/2019</div>
                  <div className="title">
                    Pack “Logo Sketch” với branding mộc mạc trên Air Max 97 và
                    Air Max Plus
                  </div>
                  <div className="short-desc">
                    Trong pack này, chúng ta sẽ đến với mẫu branding kiểu phác
                    thảo, đầy mộc mạc và “blend” hoàn hảo cùng tổng thể phối
                    màu.
                  </div>
                </div>
                <div className="thumbnail col-lg-6 col-12">
                  <img
                    src="/images/news/news-1-thumnails.jpg"
                    alt="thumbnail"
                    className="img-fluid"
                  />
                </div>
                <div className="details-small col-12">
                  <div className="date">27/7/2019</div>
                  <div className="title">
                    Pack “Logo Sketch” với branding mộc mạc trên Air Max 97 và
                    Air Max Plus
                  </div>
                  <div className="short-desc">
                    Trong pack này, chúng ta sẽ đến với mẫu branding kiểu phác
                    thảo, đầy mộc mạc và “blend” hoàn hảo cùng tổng thể phối
                    màu.
                  </div>
                </div>
              </div>
            </a>
          </Link>
          <a className="news news-even">
            <div className="row">
              <div className="thumbnail col-lg-6 col-12">
                <img
                  src="/images/news/news-2-thumnails.jpg"
                  alt="thumbnail"
                  className="img-fluid"
                />
              </div>
              <div className="details col-5 mx-1">
                <div className="date">27/7/2019</div>
                <div className="title">
                  Nike Classic Cortez – Phối Màu Của Sự Tinh Tế
                </div>
                <div className="short-desc">
                  Phối màu tiếp theo gia nhập bộ sưu tập Nike Classic Cortez với
                  sự kết hợp của 2 tông màu: Hồng Hoa Đăng và màu Cam
                </div>
              </div>
              <div className="details-small col-12">
                <div className="date">27/7/2019</div>
                <div className="title">
                  Nike Classic Cortez – Phối Màu Của Sự Tinh Tế
                </div>
                <div className="short-desc">
                  Phối màu tiếp theo gia nhập bộ sưu tập Nike Classic Cortez với
                  sự kết hợp của 2 tông màu: Hồng Hoa Đăng và màu Cam
                </div>
              </div>
            </div>
          </a>
          <a className="news news-odd">
            <div className="row">
              <div className="details col-5 offset-1">
                <div className="date">27/7/2019</div>
                <div className="title">
                  Air Jordan 1 “Satin Black Toe” xuất hiện hình ảnh chi tiết
                </div>
                <div className="short-desc">
                  Air Jordan 1 “Black Toe” vẫn luôn là thiết kế Air Jordan 1
                  đáng mua nhất mọi thời đại. Vậy sẽ thế nào nếu chúng khoác lên
                  mình chất liệu satin?
                </div>
              </div>
              <div className="thumbnail col-lg-6 col-12">
                <img
                  src="/images/news/news-3-thumnails.jpg"
                  alt="thumbnail"
                  className="img-fluid"
                />
              </div>
              <div className="details-small col-12">
                <div className="date">27/7/2019</div>
                <div className="title">
                  Air Jordan 1 “Satin Black Toe” xuất hiện hình ảnh chi tiết
                </div>
                <div className="short-desc">
                  Air Jordan 1 “Black Toe” vẫn luôn là thiết kế Air Jordan 1
                  đáng mua nhất mọi thời đại. Vậy sẽ thế nào nếu chúng khoác lên
                  mình chất liệu satin?
                </div>
              </div>
            </div>
          </a>
          <a className="news news-even">
            <div className="row">
              <div className="thumbnail col-lg-6 col-12">
                <img
                  src="/images/news/news-4-thumnails.jpg"
                  alt="thumbnail"
                  className="img-fluid"
                />
              </div>
              <div className="details col-5 mx-1">
                <div className="date">27/7/2019</div>
                <div className="title">
                  HOT! Nike và Levi’s tái hợp với hàng loạt siêu phẩm mới
                </div>
                <div className="short-desc">
                  Đến hẹn lại lên, Nike và Levi’s lại tái hợp với nhau khiến các
                  sneakerheads và tín đồ thời trang mê mệt.
                </div>
              </div>
              <div className="details-small col-12">
                <div className="date">27/7/2019</div>
                <div className="title">
                  HOT! Nike và Levi’s tái hợp với hàng loạt siêu phẩm mới
                </div>
                <div className="short-desc">
                  Đến hẹn lại lên, Nike và Levi’s lại tái hợp với nhau khiến các
                  sneakerheads và tín đồ thời trang mê mệt.
                </div>
              </div>
            </div>
          </a>
          <a className="news news-odd">
            <div className="row">
              <div className="details col-5 offset-1">
                <div className="date">27/7/2019</div>
                <div className="title">
                  Xuất hiện phối màu thứ 3 của Nike Air Force 1 Type N354
                </div>
                <div className="short-desc">
                  Nike N354 là tên dự án với những thiết kế lấy cảm hứng từ kho
                  Archive khổng lồ của The Swoosh. Nổi bật trong số đó là phiên
                  bản Nike Air Force 1 Type.
                </div>
              </div>
              <div className="thumbnail col-lg-6 col-12">
                <img
                  src="/images/news/news-5-thumnails.jpg"
                  alt="thumbnail"
                  className="img-fluid"
                />
              </div>
              <div className="details-small col-12">
                <div className="date">27/7/2019</div>
                <div className="title">
                  Xuất hiện phối màu thứ 3 của Nike Air Force 1 Type N354
                </div>
                <div className="short-desc">
                  Nike N354 là tên dự án với những thiết kế lấy cảm hứng từ kho
                  Archive khổng lồ của The Swoosh. Nổi bật trong số đó là phiên
                  bản Nike Air Force 1 Type.
                </div>
              </div>
            </div>
          </a>
        </section>
        <nav
          aria-label="Page navigation example"
          className="pagination-wrapper"
        >
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">«</span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">»</span>
              </a>
            </li>
          </ul>
        </nav>
      </main>

      <style jsx>
        {`
          @import "/static/css/index.css";
          @import "/static/css/news.css";
          @import "/static/css/except-home-page.css";
        `}
      </style>
    </Layout>
  );
};

export default News;
