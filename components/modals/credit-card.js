import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const CreditCard = props => {
  const { togglePaymentMethodModal, creditCardModal } = props;
  return (
    <Modal isOpen={creditCardModal} toggle={togglePaymentMethodModal}>
      <ModalHeader toggle={togglePaymentMethodModal}>
        Thêm thẻ tín dụng/ghi nợ mới
      </ModalHeader>
      <ModalBody>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={togglePaymentMethodModal}>
          Do Something
        </Button>{" "}
        <Button color="secondary" onClick={togglePaymentMethodModal}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CreditCard;
