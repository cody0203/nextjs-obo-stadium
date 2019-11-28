import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { connect } from "react-redux";
import InputMask from "react-input-mask";

import { getUsers, addAddress } from "/redux/actions/user";

function mapStateToProps(state) {
  return {
    user: state.userReducer.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUsers: () => dispatch(getUsers()),
    addAddress: (data, id) => dispatch(addAddress(data, id))
  };
}

const CreditCard = props => {
  // Props
  const {
    togglePaymentMethodModal,
    creditCardModal,
    addAddress,
    getUsers,
    user
  } = props;

  // State
  const [cardDetail, setCardDetail] = useState({
    name: "",
    number: "",
    expire: "",
    cvc: ""
  });

  // Life cycles

  useEffect(() => {
    getUsers();
  }, []);

  // Methods
  const closeModal = () => {
    setCardDetail({
      name: "",
      number: "",
      expire: "",
      cvc: ""
    });
  };

  const handleCardDetail = e => {
    const name = e.target.name;
    let value = e.target.value;
    if (e.target.name === "cvc" && e.target.name === "number") {
      value = +e.target.value || "";
    }
    setCardDetail({ ...cardDetail, [name]: value });
  };

  const handleAddCard = e => {
    const cardDetail = cardDetail;
    const userData = {
      ...user,
      paymentMethod: [cardDetail]
    };
    addAddress(userData, user.id);
    togglePaymentMethodModal();
  };

  return (
    <Modal
      isOpen={creditCardModal}
      toggle={togglePaymentMethodModal}
      className="paymentMethodModal"
      onClosed={closeModal}
    >
      <ModalHeader toggle={togglePaymentMethodModal}>
        Thêm thẻ tín dụng/ghi nợ mới
      </ModalHeader>
      <ModalBody>
        <input
          className="form-control"
          placeholder="Họ và tên chủ thẻ"
          name="name"
          value={cardDetail.name}
          onChange={handleCardDetail}
        />
        <input
          className="form-control"
          placeholder="Số thẻ tín dụng/ghi nợ"
          name="number"
          value={cardDetail.number}
          onChange={handleCardDetail}
          maxLength="16"
        />
        <div className="date-input">
          <InputMask
            className="form-control"
            mask="99-9999"
            placeholder="Ngày hết hạn: MM-YYYY"
            name="expire"
            value={cardDetail.expire}
            onChange={handleCardDetail}
          />
        </div>
        <input
          className="form-control"
          placeholder="Mã bảo mật: 123"
          name="cvc"
          value={cardDetail.cvc}
          onChange={handleCardDetail}
          maxLength="3"
        />
        <div style={{ marginTop: "20px" }}>
          Chúng tôi hợp tác với CyberSouce, công ty thuộc tổ chức thẻ VISA, nhằm
          đảm bảo thông tin thẻ Tín dụng/Ghi nợ của bạn luôn được bảo mật và an
          toàn. OBO Stadium không có quyền truy cập vào bất cứ thông tin nào.
        </div>
      </ModalBody>
      <ModalFooter>
        <Button className="cancel-btn" onClick={togglePaymentMethodModal}>
          Huỷ bỏ
        </Button>{" "}
        <Button className="btn red-btn" onClick={handleAddCard}>
          Lưu
        </Button>
      </ModalFooter>
      <style jsx>
        {`
          .form-control,
          .date-input {
            margin-top: 1.25rem;
          }
        `}
      </style>
    </Modal>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CreditCard);
