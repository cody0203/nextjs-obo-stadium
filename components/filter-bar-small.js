import React, { useState, useEffect } from "react";
import { Checkbox } from "pretty-checkbox-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Collapse,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import { connect } from "react-redux";
import "../components/fontawesome";

import { sizes } from "../db";
import { filterProducts } from "../redux/actions/filter";
import { clearFilter } from "../redux/actions/filter";

import Aux from "./hoc/aux";

function mapStateToProps(state) {
  return {
    products: state.productReducer.products,
    brands: [
      ...new Set(state.productReducer.products.map(product => product.brand))
    ],
    filterData: state.filterReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    filterProducts: payload => dispatch(filterProducts(payload)),
    clearFilter: () => dispatch(clearFilter())
  };
}

const ConnectedFilterBarSmall = props => {
  // States
  const [isOpen, setIsOpen] = useState(false);
  const [isSectionOpen, setIsSectionOpen] = useState({
    brand: true,
    category: true,
    size: true,
    relateDate: true
  });

  const [filterCategories] = useState(["Nam", "Nữ", "Thiếu niên", "Sơ sinh"]);

  const [filterReleaseDate] = useState([
    "< 2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019"
  ]);

  const [isSizeChose, setIsSizeChose] = useState(
    Object.assign(...sizes.map(size => ({ [size]: false })))
  );

  const [isBrandChose, setIsBrandChose] = useState(
    Object.assign(...props.brands.map(brand => ({ [brand]: false })))
  );

  const [isCategoryChose, setIsCategoryChose] = useState(
    Object.assign(...filterCategories.map(category => ({ [category]: false })))
  );

  const [isReleaseDateChose, setIsReleaseDateChose] = useState(
    Object.assign(...filterReleaseDate.map(date => ({ [date]: false })))
  );

  const [filterPrices, setFilterPrices] = useState({
    from: "",
    to: ""
  });

  const closeModal = () => {
    setIsSizeChose(Object.assign(...sizes.map(size => ({ [size]: false }))));
    setIsBrandChose(
      Object.assign(...props.brands.map(brand => ({ [brand]: false })))
    );
    setIsCategoryChose(
      Object.assign(
        ...filterCategories.map(category => ({ [category]: false }))
      )
    );
    setIsReleaseDateChose(
      Object.assign(...filterReleaseDate.map(date => ({ [date]: false })))
    );
    setFilterPrices({
      from: "",
      to: ""
    });

    setIsSectionOpen({
      brand: true,
      category: true,
      size: true,
      relateDate: true
    });

    setIsOpen(false);
    props.clearFilter();
  };

  // Methods
  const toggleMoreBrand = () => setIsOpen(!isOpen);

  const toggleSection = event => {
    const section = event.target.dataset.title;
    setIsSectionOpen(
      Object.assign(
        {},
        isSectionOpen,
        (isSectionOpen[section] = !isSectionOpen[section])
      )
    );
  };

  const activeSizeChoose = event => {
    const choseSize = event.target.dataset.size;

    setIsSizeChose(
      Object.assign(
        {},
        isSizeChose,
        (isSizeChose[choseSize] = !isSizeChose[choseSize])
      )
    );
  };

  const clearFilterData = () => {
    setIsSizeChose(Object.assign(...sizes.map(size => ({ [size]: false }))));
    setIsBrandChose(
      Object.assign(...props.brands.map(brand => ({ [brand]: false })))
    );
    setIsCategoryChose(
      Object.assign(
        ...filterCategories.map(category => ({ [category]: false }))
      )
    );
    setIsReleaseDateChose(
      Object.assign(...filterReleaseDate.map(date => ({ [date]: false })))
    );
    setFilterPrices({
      from: "",
      to: ""
    });
    props.toggleFilterModal();
    props.clearFilter();
  };

  // Get data brands filter
  const brandChoose = (brand, event) => {
    setIsBrandChose(
      Object.assign(
        {},
        isBrandChose,
        (isBrandChose[brand] = !isBrandChose[brand])
      )
    );
  };

  // Get data sizes filter

  // Get data categories filter
  const categoryChoose = (category, event) => {
    setIsCategoryChose(
      Object.assign(
        {},
        isCategoryChose,
        (isCategoryChose[category] = !isCategoryChose[category])
      )
    );
  };

  // Get data release date filter
  const releaseDateChoose = (date, event) => {
    setIsReleaseDateChose(
      Object.assign(
        {},
        isReleaseDateChose,
        (isReleaseDateChose[date] = !isReleaseDateChose[date])
      )
    );
  };

  const handleFilterPrices = event => {
    const value = parseInt(event.target.value) || "";
    setFilterPrices({
      ...filterPrices,
      [event.target.name]: value
    });
  };

  const applyFilter = () => {
    // initial variables assign
    let [brands, sizes, categories, releaseDates] = [[], [], [], []];

    // Dispatch brand datas
    props.filterProducts({
      brands: getFilterDatas(brands, isBrandChose)
    });

    // Dispatch size datas
    props.filterProducts({
      sizes: getFilterDatas(sizes, isSizeChose)
    });

    // Dispatch category datas
    props.filterProducts({
      categories: getFilterDatas(categories, isCategoryChose)
    });

    // Dispatch release date datas
    props.filterProducts({
      releaseDates: getFilterDatas(releaseDates, isReleaseDateChose)
    });

    // Dispatch price datas
    props.filterProducts({
      prices: filterPrices
    });

    props.toggleFilterModal();
  };

  const getFilterDatas = (newData, source) => {
    for (let item in source) {
      if (source[item] === true) {
        newData.push(item);
      }
    }
    return newData;
  }

  // Render

  // Render checkbox
  const checkIcon = (
    <svg viewBox="0 0 20 20">
      <path
        d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
        style={{ stroke: "white", fill: "white" }}
      ></path>
    </svg>
  );

  // Render sizes
  const sizeItems = sizes.map(size => {
    return (
      <Aux key={size}>
        <input
          type="checkbox"
          id={size}
          name={size}
          style={{ display: "none" }}
        />
        <label
          className={isSizeChose[size] ? "item size-choose" : "item"}
          data-size={size}
          onClick={activeSizeChoose}
          htmlFor={size}
        >
          {size}
        </label>
      </Aux>
    );
  });

  // Render brands
  const firstPart = [];
  const lastPart = [];
  const brandItems = props.brands.map((brand, index) => {
    if (index < 4) {
      firstPart.push(
        <div className="item" key={brand}>
          <Checkbox
            shape="curve"
            color="danger"
            svg={checkIcon}
            checked={isBrandChose[brand]}
            onChange={brandChoose.bind(this, brand)}
          >
            {brand}
          </Checkbox>
        </div>
      );
    } else {
      lastPart.push(
        <div className="item" key={brand}>
          <Checkbox
            shape="curve"
            color="danger"
            svg={checkIcon}
            checked={isBrandChose[brand]}
            onChange={brandChoose.bind(this, brand)}
          >
            {brand}
          </Checkbox>
        </div>
      );
    }
  });

  // Render categories
  const categoryItems = filterCategories.map(category => {
    return (
      <div className="item" key={category}>
        <Checkbox
          shape="curve"
          color="danger"
          svg={checkIcon}
          checked={isCategoryChose[category]}
          onChange={categoryChoose.bind(this, category)}
        >
          {category}
        </Checkbox>
      </div>
    );
  });

  // Render release date
  const releaseDateItems = filterReleaseDate.map((date, index) => {
    if (index % 2 === 0) {
      return (
        <div className="item" key={index}>
          <Checkbox
            shape="curve"
            color="danger"
            svg={checkIcon}
            checked={isReleaseDateChose[date]}
            onChange={releaseDateChoose.bind(this, date)}
          >
            {date}
          </Checkbox>
        </div>
      );
    } else {
      return (
        <div className="item odd" key={index}>
          <Checkbox
            shape="curve"
            color="danger"
            svg={checkIcon}
            checked={isReleaseDateChose[date]}
            onChange={releaseDateChoose.bind(this, date)}
          >
            {date}
          </Checkbox>
        </div>
      );
    }
  });

  // Props
  const { filterModal, toggleFilterModal } = props;

  return (
    <Modal
      isOpen={filterModal}
      toggle={toggleFilterModal}
      unmountOnClose={true}
      onClosed={closeModal}
    >
      <ModalHeader toggle={toggleFilterModal}>Lọc sản phẩm</ModalHeader>
      <ModalBody>
        <div className="filter-bar col-lg-3">
          <div className="filter-header content">
            <div className="left-side d-flex align-items-center"></div>
          </div>
          <div className="brand content">
            <div className="title" onClick={toggleSection} data-title="brand">
              Thương hiệu
              <FontAwesomeIcon
                icon={isSectionOpen.brand ? "chevron-up" : "chevron-down"}
              />
            </div>
            <Collapse isOpen={isSectionOpen.brand} className="select-filter">
              <div className="item">{firstPart}</div>
              <Collapse isOpen={isOpen}>{lastPart}</Collapse>
              <div
                className="see-more"
                id="see-more-brand"
                onClick={toggleMoreBrand}
              >
                {isOpen ? "Rút gọn" : "Xem thêm"}
              </div>
              {brandItems}
            </Collapse>
          </div>
          <div className="break-line" />
          <div className="category content">
            <div
              className="title"
              onClick={toggleSection}
              data-title="category"
            >
              Danh mục
              <FontAwesomeIcon
                icon={isSectionOpen.category ? "chevron-up" : "chevron-down"}
              />
            </div>
            <Collapse
              isOpen={isSectionOpen.category}
              className="select-filter"
              id="categories-collapse"
            >
              {categoryItems}
            </Collapse>
          </div>
          <div className="break-line" />
          <div className="size content">
            <div className="title" onClick={toggleSection} data-title="size">
              Size
              <FontAwesomeIcon
                icon={isSectionOpen.size ? "chevron-up" : "chevron-down"}
              />
            </div>
            <Collapse
              isOpen={isSectionOpen.size}
              className="select-filter"
              id="size-collapse"
            >
              {sizeItems}
            </Collapse>
          </div>
          <div className="break-line" />
          <div className="price-range content">
            <div className="title">
              <div className="text">Khoảng giá</div>
            </div>
            <input
              className="form-control price-input"
              type="text"
              name="from"
              value={filterPrices.from || ""}
              onChange={handleFilterPrices}
              placeholder="Từ"
            />
            <input
              className="form-control price-input"
              type="text"
              name="to"
              value={filterPrices.to || ""}
              onChange={handleFilterPrices}
              placeholder="Đến"
              pattern="[0-9]"
            />
          </div>
          <div className="break-line" />
          <div className="release-date content">
            <div
              className="title"
              onClick={toggleSection}
              data-title="relateDate"
            >
              Năm ra mắt
              <FontAwesomeIcon
                icon={isSectionOpen.relateDate ? "chevron-up" : "chevron-down"}
              />
            </div>
            <Collapse
              isOpen={isSectionOpen.relateDate}
              className="select-filter"
              id="collapseExample"
            >
              {releaseDateItems}
            </Collapse>
          </div>
        </div>
      </ModalBody>
      <ModalFooter style={{ display: "flex", alignItems: "stretch" }}>
        <button
          className="clear-filter btn btn-primary"
          onClick={clearFilterData}
        >
          Huỷ
        </button>

        <button
          className="btn btn-primary apply-price red-btn"
          onClick={applyFilter}
        >
          áp dụng
        </button>
      </ModalFooter>
    </Modal>
  );
};

const FilterBarSmall = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedFilterBarSmall);

export default FilterBarSmall;
