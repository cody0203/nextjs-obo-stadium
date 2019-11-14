// Modules
import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { connect } from "react-redux";

// Components
import { sizes } from "../../db";
import Aux from "../hoc/aux";

// Redux

function mapStateToProps(state) {
  return {
    productInfo: state.productReducer.productInfo
  };
}

const SizeChooseModal = props => {
  // Props
  const {
    sizeModal,
    toggleSizeModal,
    product,
    productInfo,
    updateUserCurrentSize
  } = props;

  // Render
  const sizeItems = sizes.map(size => {
    return (
      <Aux key={size}>
        <div
          className={
            productInfo.size === size &&
            product["available_size"].includes(size)
              ? "item size-choose"
              : !product["available_size"].includes(size)
              ? "item disabled-size"
              : "item"
          }
          onClick={updateUserCurrentSize.bind(null, size)}
        >
          {size}
        </div>
      </Aux>
    );
  });

  return (
    <Modal
      isOpen={sizeModal}
      toggle={toggleSizeModal}
      className="size-modal modal-dialog-scrollable"
    >
      <ModalHeader>Chọn size</ModalHeader>
      <ModalBody>
        <div className="size content">
          <div className="select-filter">{sizeItems}</div>
        </div>
      </ModalBody>
      <style jsx global>
        {`
          .size-modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .modal-body {
            height: 350px;
            overflow-y: auto;
          }

          @media (min-width: 576px) {
            .size-modal {
              max-width: 420px;
            }
          }
        `}
      </style>
    </Modal>
  );
};

export default connect(mapStateToProps)(SizeChooseModal);
