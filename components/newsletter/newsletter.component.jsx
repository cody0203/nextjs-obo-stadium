import React from 'react';

import {
  ContainerStyles,
  Title,
  SubTitle,
  FormContainer,
  Form,
  InputStyles,
  ButtonStyles
} from './newsletter.styles';

const NewsLetter = () => {
  return (
    <ContainerStyles fluid={true}>
      <div>
        <Title>Đăng ký nhận bản tin OBO Stadium</Title>
        <SubTitle>Hãy đăng ký để nhận tin mới nhanh nhất qua email</SubTitle>
        <FormContainer>
          <Form>
            <InputStyles type="text" placeholder="Nhập địa chỉ email của bạn" />
            <ButtonStyles type="submit">đăng ký</ButtonStyles>
          </Form>
        </FormContainer>
      </div>
    </ContainerStyles>
  );
};

export default NewsLetter;
