// Modules
import React, { useEffect, useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import { connect } from "react-redux";

// Redux
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

const AddressModal = props => {
  // Props
  const {
    isAddressModalOpen,
    toggleAddressModal,
    user,
    getUsers,
    addAddress
  } = props;

  // States
  const [address, setAddress] = useState({
    name: "",
    phone: "",
    city: "",
    district: "",
    ward: "",
    alias: ""
  });

  const closeModal = () => {
    setAddress({
      name: "",
      phone: "",
      city: "",
      district: "",
      ward: "",
      alias: ""
    });
  };

  // Life cycles
  useEffect(() => {
    getUsers();
  }, []);

  const handleAddAddress = () => {
    const addresses = address;
    const userData = {
      ...user,
      addresses: [addresses]
    };

    addAddress(userData, user.id);
    toggleAddressModal();
  };

  const handleInput = e => {
    const value = e.target.value;
    const name = e.target.name;
    setAddress({ ...address, [name]: value });
  };

  return (
    <Modal
      isOpen={isAddressModalOpen}
      toggle={toggleAddressModal}
      className="addressModal"
      onClosed={closeModal}
    >
      <ModalHeader toggle={toggleAddressModal}>
        Thêm địa chỉ mới
        {user.addresses.length === 0 ? (
          <div className="modal-sub-title">
            Để đặt hàng, vui lòng thêm địa chỉ nhận hàng
          </div>
        ) : (
          ""
        )}
      </ModalHeader>
      <ModalBody>
        <div>
          <input
            className="form-control"
            placeholder="Họ và tên"
            name="name"
            value={address.name}
            onChange={handleInput}
          />

          <input
            className="form-control"
            placeholder="Số điện thoại"
            name="phone"
            value={address.phone}
            onChange={handleInput}
          />

          <input
            className="form-control"
            placeholder="Thành phố"
            name="city"
            value={address.city}
            onChange={handleInput}
          />

          <input
            className="form-control"
            placeholder="Quận/Huyện"
            name="district"
            value={address.district}
            onChange={handleInput}
          />

          <input
            className="form-control"
            placeholder="Phường/Xã"
            name="ward"
            value={address.ward}
            onChange={handleInput}
          />

          {/* <select
            className="form-control custom-select city"
            data-name="Thành phố"
          />

          <select
            className="form-control custom-select district"
            data-name="Quận/Huyện"
          >
            <option>Quận/Huyện</option>
          </select>

          <select
            className="form-control custom-select ward"
            data-name="Phường/Xã"
          >
            <option>Phường/Xã</option>
          </select> */}

          <textarea
            className="form-control address"
            placeholder="Địa chỉ"
            name="alias"
            value={address.alias}
            onChange={handleInput}
          />
        </div>
      </ModalBody>
      <ModalFooter>
        <Button className="cancel-btn" onClick={toggleAddressModal}>
          Huỷ bỏ
        </Button>{" "}
        <Button className="btn red-btn" onClick={handleAddAddress}>
          Lưu
        </Button>
      </ModalFooter>

      <style jsx>
        {`
          .form-control {
            margin-top: 1.25rem;
          }

          .addressModal .modal-footer {
            align-items: baseline;
          }
        `}
      </style>
    </Modal>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AddressModal);
