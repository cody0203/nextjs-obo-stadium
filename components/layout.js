import React from 'react';
import { useRouter } from 'next/router';

// Component
import Header from 'components/header/header.component';
import Footer from './footer';

const Layout = props => {
  const router = useRouter();

  return (
    <div>
      <Header currentPage={router.pathname} title={props.title} />
      <div>{props.children}</div>
      <Footer />
      <style jsx global>
        {`
          @import '/css/main.css';
        `}
      </style>
    </div>
  );
};

export default Layout;
