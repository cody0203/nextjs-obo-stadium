import React from "react";
import Link from "next/link";

const Footer = () => (
  <footer className="container-fluid">
    <div className="container">
      <div className="row align-items-center">
        <div className="logo col-md-3 col-12 text-md-left text-center">
          <img className="img-fluid" src="/assets/images/logo-white.png" alt="logo" />
        </div>
        <div className="footer-link col-md-9 col-12">
          <div className="footer-menu d-flex justify-content-md-end align-items-center flex-md-row flex-column">
            <Link href="/faqs">
              <a className="item">Các câu hỏi thường gặp</a>
            </Link>
            <Link href="/rules">
              <a className="item">Điều khoản</a>
            </Link>
            <Link href="/policy">
              <a className="item">Chính sách</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
