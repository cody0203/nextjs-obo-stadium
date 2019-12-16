import React from 'react';
import Link from 'next/link';
import { FormattedNumber } from 'react-intl';

import {
  ProductContainer,
  Product,
  Image,
  Body,
  Name,
  PriceTextIntroduce,
  Price,
  Sold,
  Shadow
} from './product-item.styles';

const ProductItem = props => {
  const { product } = props;

  return (
    <Link href="/shop/[id]" as={`/shop/${product.id}`}>
      <ProductContainer>
        <Product>
          <Image src={product.thumbnail} alt={product.name} />
          <Body>
            <Name>{product.name}</Name>
            <PriceTextIntroduce>Giá thấp nhất hiện tại</PriceTextIntroduce>
            <Price>
              <FormattedNumber
                style="currency"
                currency="VND"
                value={product.sell_price}
              />
            </Price>
            <Sold>Đã bán {product.total_sold} đôi</Sold>
          </Body>
        </Product>
        <Shadow />
      </ProductContainer>
    </Link>
  );
};

export default ProductItem;
