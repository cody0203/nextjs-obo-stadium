import React from 'react';
import Link from 'next/link';

import {
  NewsContainer,
  News,
  Image,
  Details,
  Description,
  Title,
  AuthorContainer,
  AuthorName,
  Shadow
} from './relate-news-item.styles';

const RelateNewsItem = ({ link, imgLink, title, description }) => (
  <Link href={link}>
    <NewsContainer>
      <News>
        <Image src={imgLink} alt="news" />
        <Details>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <AuthorContainer>
            By <AuthorName>Cody</AuthorName> · 27/08/2019
          </AuthorContainer>
        </Details>
      </News>
      <Shadow />
    </NewsContainer>
  </Link>
);

export default RelateNewsItem;
