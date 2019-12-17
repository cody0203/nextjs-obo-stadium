import React from 'react';
import Link from 'next/link';

import { BannerContainer } from './promo-banner.styles';

const PromoBanner = ({ link }) => {
  return (
    <BannerContainer>
      <Link href="./product-details.html">
        <a>
          <img
            className="img-fluid"
            id="promo-banner-2"
            src={link}
            alt="promo-banner-2"
          />
        </a>
      </Link>
    </BannerContainer>
  );
};

export default PromoBanner;
