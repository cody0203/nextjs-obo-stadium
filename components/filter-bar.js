import React, { useState, useEffect } from "react";
import { Checkbox } from "pretty-checkbox-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Collapse } from "reactstrap";
import { connect } from "react-redux";

import "../components/fontawesome";
import { sizes } from "../db";

function mapStateToProps(state) {
  return {
    products: state.productReducer.products,
    brands: [
      ...new Set(state.productReducer.products.map(product => product.brand))
    ]
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

  const [filterData, setFilterData] = useState({
    sizes: [],
    brands: [],
    categories: [],
    relateDates: [],
    prices: {
      from: 0,
      to: 0
    }
  });

  const [filterCategories] = useState(["Nam", "Nữ", "Thiếu niên", "Sơ sinh"]);
  const [filterReleaseDate] = useState([
    "2010",
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

  const sizeChoose = event => {
    const sizes = [...filterData.sizes];
    const choseSize = event.target.dataset.size;

    setIsChose(
      Object.assign({}, isChose, (isChose[choseSize] = !isChose[choseSize]))
    );

    let index;
    if (isChose[choseSize] === true) {
      sizes.push(choseSize);
    } else {
      index = sizes.indexOf(choseSize);
      sizes.splice(index, 1);
    }
    setFilterData(Object.assign({}, filterData, { sizes: sizes }));
  };

  // Get data brands filter
  const brandChoose = event => {
    const brandChose = [...filterData.brands];
    const currentBrandChose = event.target.id;
    let index;

    if (event.target.checked) {
      brandChose.push(currentBrandChose);
    } else {
      index = brandChose.indexOf(event.target.id);
      brandChose.splice(index, 1);
    }
    setFilterData(Object.assign({}, filterData, { brands: brandChose }));
  };

  // Get data categories filter
  const categoryChoose = event => {
    const categoryChose = [...filterData.categories];
    const currentCategoryChose = event.target.id;
    let index;

    if (event.target.checked) {
      categoryChose.push(currentCategoryChose);
    } else {
      index = categoryChose.indexOf(event.target.id);
      categoryChose.splice(index, 1);
    }
    setFilterData(Object.assign({}, filterData, { categories: categoryChose }));
  };

  // Get data release date filter
  const releaseDateChoose = (date, event) => {
    const releaseDateChose = [...filterData.relateDates];
    const currentReleaseDateChose = date;
    let index;
    if (event.target.checked) {
      releaseDateChose.push(currentReleaseDateChose);
    } else {
      index = releaseDateChose.indexOf(date);
      releaseDateChose.splice(index, 1);
    }
    setFilterData(
      Object.assign({}, filterData, { relateDates: releaseDateChose })
    );
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
      <div
        className={isChose[size] ? "item size-choose" : "item"}
        key={size}
        data-size={size}
        onClick={sizeChoose}
      >
        {size}
      </div>
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
            id={brand}
            onChange={brandChoose}
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
            id={brand}
            onChange={brandChoose}
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
          id={item}
          onChange={categoryChoose}
        >
          {item}
        </Checkbox>
      </div>
    );
  });

  // Render release date
  const releaseDateItems = filterReleaseDate.map((item, index) => {
    if (item === "2010") {
      item = "< 2010";
    }

    if (index % 2 !== 0) {
      return (
        <div className="item odd" key={item}>
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
        <div className="item" key={item}>
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
        {filterData.sizes.length !== 0 ||
        filterData.brands.length !== 0 ||
        filterData.categories.length !== 0 ||
        filterData.relateDates.length !== 0 ||
        filterData.prices.to !== 0 ||
        filterData.prices.from !== 0 ? (
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
          {/* <div className="date-row">
            <div className="item">
              <Checkbox shape="curve" color="danger" svg={checkIcon}>
                &lt; 2010
              </Checkbox>
            </div>
            <div className="item">
              <Checkbox shape="curve" color="danger" svg={checkIcon}>
                2011
              </Checkbox>
            </div>
          </div>
          <div className="date-row">
            <div className="item">
              <Checkbox shape="curve" color="danger" svg={checkIcon}>
                2012
              </Checkbox>
            </div>
            <div className="item">
              <Checkbox shape="curve" color="danger" svg={checkIcon}>
                2013
              </Checkbox>
            </div>
          </div>
          <div className="date-row">
            <div className="item">
              <Checkbox shape="curve" color="danger" svg={checkIcon}>
                2014
              </Checkbox>
            </div>
            <div className="item">
              <Checkbox shape="curve" color="danger" svg={checkIcon}>
                2015
              </Checkbox>
            </div>
          </div>
          <div className="date-row">
            <div className="item">
              <Checkbox shape="curve" color="danger" svg={checkIcon}>
                2016
              </Checkbox>
            </div>
            <div className="item">
              <Checkbox shape="curve" color="danger" svg={checkIcon}>
                2017
              </Checkbox>
            </div>
          </div>
          <div className="date-row">
            <div className="item">
              <Checkbox shape="curve" color="danger" svg={checkIcon}>
                2018
              </Checkbox>
            </div>
            <div className="item">
              <Checkbox shape="curve" color="danger" svg={checkIcon}>
                2019
              </Checkbox>
            </div>
          </div> */}
          {releaseDateItems}
        </Collapse>
      </div>
    </div>
  );
};

const FilterBar = connect(mapStateToProps)(ConnectedFilterBar);

export default FilterBar;
