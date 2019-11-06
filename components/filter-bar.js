import React, { useState, useEffect } from "react";
import { Checkbox } from "pretty-checkbox-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Collapse } from "reactstrap";
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

const ConnectedFilterBar = props => {
  // States
  const [isOpen, setIsOpen] = useState(false);
  const [isSectionOpen, setIsSectionOpen] = useState({
    brand: true,
    category: true,
    size: true,
    relateDate: true
  });

  const [isChose, setIsChose] = useState(
    Object.assign(...sizes.map(size => ({ [size]: false })))
  );

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

  // LifeCycles

  useEffect(() => {
    return () => {
      props.clearFilter()
    }
  }, [] )

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

    setIsChose(
      Object.assign({}, isChose, (isChose[choseSize] = !isChose[choseSize]))
    );
  };

  // Get data brands filter
  const brandChoose = (brand, event) => {
    props.filterProducts({
      brands: getFilterDatas(props.filterData.brands, brand, event.target)
    });
  };

  // Get data sizes filter
  const sizeChoose = (size, event) => {
    props.filterProducts({
      sizes: getFilterDatas(props.filterData.sizes, size, event.target)
    });
  };

  // Get data categories filter
  const categoryChoose = (category, event) => {
    props.filterProducts({
      categories: getFilterDatas(
        props.filterData.categories,
        category,
        event.target
      )
    });
  };

  // Get data release date filter
  const releaseDateChoose = (date, event) => {
    props.filterProducts({
      releaseDates: getFilterDatas(
        props.filterData.releaseDates,
        date,
        event.target
      )
    });
  };

  const getFilterDatas = (source, data, target) => {
    const sourceData = [...source];
    let index;

    if (target.checked) {
      sourceData.push(data);
    } else {
      index = sourceData.indexOf(data);
      sourceData.splice(index, 1);
    }
    return sourceData;
  };

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
          onChange={sizeChoose.bind(this, size)}
        />
        <label
          className={isChose[size] ? "item size-choose" : "item"}
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
            onChange={brandChoose.bind(this, brand)}
          >
            {brand}
          </Checkbox>
        </div>
      );
    }
  });

  // Render categories
  const categoryItems = filterCategories.map(item => {
    return (
      <div className="item" key={item}>
        <Checkbox
          shape="curve"
          color="danger"
          svg={checkIcon}
          onChange={categoryChoose.bind(this, item)}
        >
          {item}
        </Checkbox>
      </div>
    );
  });

  // Render release date
  const releaseDateItems = filterReleaseDate.map((item, index) => {
    if (index % 2 === 0) {
      return (
        <div className="item" key={index}>
          <Checkbox
            shape="curve"
            color="danger"
            svg={checkIcon}
            onChange={releaseDateChoose.bind(this, item)}
          >
            {item}
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
            onChange={releaseDateChoose.bind(this, item)}
          >
            {item}
          </Checkbox>
        </div>
      );
    }
  });

  return (
    <div className="filter-bar col-lg-3">
      <div className="filter-header content">
        <div className="left-side d-flex align-items-center">
          <FontAwesomeIcon icon="sliders-h" />
          <div className="text">Lọc</div>
        </div>
        {props.filterData.sizes.length !== 0 ||
        props.filterData.brands.length !== 0 ||
        props.filterData.categories.length !== 0 ||
        props.filterData.releaseDates.length !== 0 ||
        props.filterData.prices.to !== 0 ||
        props.filterData.prices.from !== 0 ? (
          <button className="clear-filter btn btn-primary">Bỏ lọc</button>
        ) : (
          <button className="clear-filter btn btn-primary" disabled={true}>
            Bỏ lọc
          </button>
        )}
      </div>
      <div className="break-line" />
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
        <div className="title" onClick={toggleSection} data-title="category">
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
          id="from-price"
          type="text"
          placeholder="Từ"
        />
        <input
          className="form-control price-input"
          id="to-price"
          type="text"
          placeholder="Đến"
          pattern="[0-9]"
        />
        <button className="btn btn-primary apply-price red-btn">áp dụng</button>
      </div>
      <div className="break-line" />
      <div className="release-date content">
        <div className="title" onClick={toggleSection} data-title="relateDate">
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
  );
};

const FilterBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedFilterBar);

export default FilterBar;
