// Modules
import React, { useEffect, useState } from 'react';
import Head from 'next/head';

// Components
import Layout from 'components/layout';
import LastestNews from 'components/lastest-news';
import ProductItem from 'components/product-item/product-item.component';
import RowShowcase from 'components/row-showcase/row-showcase.component';
import NewsLetter from 'components/newsletter/newsletter.component';
import PromoBanner from 'components/promo-banner/promo-banner.component';

const Home = props => {
  const [width, setWidth] = useState(window.innerWidth);
  const [bannerSize, setBannerSize] = useState('lg');

  const title = (
    <div className="content text-center">
      <h1 className="slogan main-heading text-uppercase">
        BEST THINGS WITH BEST OFFERS
      </h1>
      <div className="search-form justify-content-md-center d-flex">
        <div className="container">
          <div className="row justify-content-center"></div>
        </div>
      </div>
    </div>
  );
  const findBestSeller = props.products
    .filter(products => {
      return products.status === 'Best Seller';
    })
    .slice(0, 5);

  const findStaffChoose = props.products
    .filter(products => {
      return products.status === 'Staff Choose';
    })
    .slice(0, 5);

  const findUnderRetails = props.products
    .filter(products => {
      return products.status === 'Under Retails';
    })
    .slice(0, 5);

  function productCategoriesRender(category) {
    return category.map(product => {
      return <ProductItem product={product} key={product.id} />;
    });
  }

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    if (width > 768) {
      setBannerSize('lg');
    } else if (width <= 768 && width > 576) {
      setBannerSize('md');
    } else {
      setBannerSize('sm');
    }

    return () => window.removeEventListener('resize', handleResize);
  }, [window.innerWidth]);

  return (
    <Layout title={title}>
      <Head>
        <title>Trang chủ</title>
        <link
          rel="stylesheet"
          type="text/css"
          href="/css/components/index/index-category.css"
        />
        <link rel="stylesheet" type="text/css" href="/css/index.css" />
      </Head>
      <main>
        <RowShowcase title="Sản phẩm bán chạy" link="./shop.html">
          {productCategoriesRender(findBestSeller)}
        </RowShowcase>

        {/* Break Banner*/}
        <PromoBanner
          link={`/assets/images/banner/promo-banner-1-${bannerSize}.png`}
        />

        {/* Staff Selects*/}
        <RowShowcase title="OBO LỰA CHỌN" link="./shop.html">
          {productCategoriesRender(findStaffChoose)}
        </RowShowcase>

        {/* Break Banner*/}
        <PromoBanner
          link={`/assets/images/banner/promo-banner-2-${bannerSize}.png`}
        />

        {/* Under retails*/}
        <RowShowcase title="THẤP HƠN “GIÁ HÃNG”" link="./shop.html">
          {productCategoriesRender(findUnderRetails)}
        </RowShowcase>
        {/* Break Banner*/}

        <PromoBanner
          link={`/assets/images/banner/promo-banner-3-${bannerSize}.png`}
        />
        {/* <section className="break-banner">
          <a href="./product-details.html">
            <img
              className="img-fluid"
              id="promo-banner-3"
              src="/assets/images/banner/promo-banner-3-lg.png"
              alt="promo-banner-3"
            />
          </a>
        </section> */}
        {/* Category Section*/}
        <section className="categories-showcase container">
          <div className="row">
            <div className="title col-12">
              <h2 className="h2">Bộ Sưu Tập</h2>
            </div>
          </div>
          <div className="row categories-row d-flex justify-content-md-between">
            <div className="category col-sm-4">
              <a className="category-wrap" href="./shop.html">
                <img
                  className="img-fluid"
                  src="/assets/images/categories/category-1.png"
                  alt="category-1"
                />
                <div className="tag">TECH PERFORMANCE</div>
              </a>
            </div>
            <div className="category col-sm-4">
              <a className="category-wrap" href="./shop.html">
                <img
                  className="img-fluid"
                  src=" /assets/images/categories/category-2.png"
                  alt="category-2"
                />
                <div className="tag">OFF-WHITE</div>
              </a>
            </div>
            <div className="category col-sm-4">
              <a className="category-wrap" href="./shop.html">
                <img
                  className="img-fluid"
                  src=" /assets/images/categories/category-3.png"
                  alt="category-3"
                />
                <div className="tag">SUPREME</div>
              </a>
            </div>
            <div className="category col-sm-4">
              <a className="category-wrap" href="./shop.html">
                <img
                  className="img-fluid"
                  src=" /assets/images/categories/category-4.png"
                  alt="category-4"
                />
                <div className="tag">NBA</div>
              </a>
            </div>
            <div className="category col-sm-4">
              <a className="category-wrap" href="./shop.html">
                <img
                  className="img-fluid"
                  src=" /assets/images/categories/category-5.png"
                  alt="category-5"
                />
                <div className="tag">YEEZY</div>
              </a>
            </div>
            <div className="category col-sm-4" id="last-category">
              <a className="category-wrap" href="./shop.html">
                <img
                  className="img-fluid"
                  src=" /assets/images/categories/category-6.png"
                  alt="category-6"
                />
                <div className="tag">Comme Des Garçons</div>
              </a>
            </div>
          </div>
        </section>
        {/* Newsletter Section*/}
        <NewsLetter />

        {/* Lastest News Section*/}
        <RowShowcase title="Bài viết mới" link="./news.html">
          <LastestNews />
        </RowShowcase>

        {/* Modals*/}

        <a className="back-to-top" href="#">
          <img src="/assets/images/back-to-top.png" alt="back-to-top" />
        </a>
      </main>
    </Layout>
  );
};

export default Home;
