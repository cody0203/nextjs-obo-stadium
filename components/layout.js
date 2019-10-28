import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "../static/css/main.css";
import "../static/css/components/header.css";
import "../static/css/components/products.css";

// Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faSearch);

// Component
import Header from "./header";
import Footer from "./footer";

const Layout = props => {
  const router = useRouter();
  return (
    <div>
      <Header currentPage={router.pathname} title={props.title} />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
