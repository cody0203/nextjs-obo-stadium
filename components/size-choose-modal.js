import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import { sizes } from "../db";
import Aux from "./hoc/aux";

const SizeChooseModal = props => {
  // Props
  const {
    sizeModal,
    toggleSizeModal,
    currentUserSize,
    product,
    updateUserCurrentSize
  } = props;

  // Render
  const sizeItems = sizes.map(size => {
    return (
      <Aux key={size}>
        <div
          className={
            currentUserSize === size
              ? "item size-choose"
              : !product["available_size"].includes(size)
              ? "item disabled-size"
              : "item"
          }
          onClick={updateUserCurrentSize.bind(this, size)}
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
      <div className="size-modal-header">
        <ModalHeader>Chọn size</ModalHeader>
        <a className="size-guide text-btn">Bảng size</a>
      </div>
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

export default SizeChooseModal;
