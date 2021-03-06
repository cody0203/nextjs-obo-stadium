import React, { useState, useEffect } from "react";
import { Radio } from "pretty-checkbox-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Collapse } from "reactstrap";
import { connect } from "react-redux";
import "../components/fontawesome";
import Router, { useRouter } from "next/router";

import { sizes } from "../db";

import Aux from "./hoc/aux";

function mapStateToProps(state) {
  return {
    products: state.productReducer.products,
    brands: state.filterReducer.brands,
    filterData: state.filterReducer
  };
}

const ConnectedFilterBar = props => {
  // Router
  const router = useRouter();

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

  const [isSizeChose, setIsSizeChose] = useState(
    router.query.available_size_like || undefined
  );

  const [isBrandChose, setIsBrandChose] = useState(
    router.query.brand || undefined
  );

  const [isCategoryChose, setIsCategoryChose] = useState(
    router.query.gender || undefined
  );

  const [isReleaseDateChose, setIsReleaseDateChose] = useState(
    router.query.release_year || undefined
  );

  const [isPricesInput, setIsPricesInput] = useState({
    from: "",
    to: ""
  });

  const [prices, setPrices] = useState({
    from: router.query.sell_price_gte || "",
    to: router.query.sell_price_lte || ""
  });

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

    setIsSizeChose(choseSize);
  };

  const clearFilterData = () => {
    setIsSizeChose(undefined);
    setIsBrandChose(undefined);
    setIsCategoryChose(undefined);
    setIsReleaseDateChose(undefined);
    setPrices({
      from: "",
      to: ""
    });
    setIsPricesInput({ from: "", to: "" });
    const sort = router.query.sort || "id";
    const order = router.query.order || "desc";
    router.push({
      pathname: "/shop",
      query: {
        page: 1,
        order,
        sort
      }
    });
  };

  const pushRouter = (key, value) => {
    router.push({
      pathname: "/shop",
      query: {
        ...router.query,
        page: 1,
        [key]: value
      }
    });
  };

  // Get data brand filter
  const brandChoose = brand => {
    setIsBrandChose(brand);
    pushRouter("brand", brand);
  };

  // Get data size filter
  const sizeChoose = size => {
    setIsSizeChose(size);
    pushRouter("available_size_like", size);
  };

  // Get data categories filter
  const categoryChoose = category => {
    setIsCategoryChose(category);
    pushRouter("gender", category);
  };

  // Get data release date filter
  const releaseDateChoose = date => {
    setIsReleaseDateChose(date);
    pushRouter("release_year", date);
  };

  const handleFilterPrices = event => {
    const value = parseInt(event.target.value) || "";
    setIsPricesInput({
      ...isPricesInput,
      [event.target.name]: value
    });
  };

  const pricesChoose = () => {
    setPrices({
      ...isPricesInput
    });
    router.push({
      pathname: "/shop",
      query: {
        ...router.query,
        page: 1,
        sell_price_gte: isPricesInput.from,
        sell_price_lte: isPricesInput.to
      }
    });
    setIsPricesInput({ from: "", to: "" });
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
          type="radio"
          id={size}
          name={size}
          style={{ display: "none" }}
          checked={isSizeChose === size}
          onChange={sizeChoose.bind(this, size)}
        />
        <label
          className={Number(isSizeChose) === size ? "item size-choose" : "item"}
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
          <Radio
            name="brand"
            color="danger"
            svg={checkIcon}
            checked={isBrandChose === brand}
            onChange={brandChoose.bind(this, brand)}
          >
            {brand}
          </Radio>
        </div>
      );
    } else {
      lastPart.push(
        <div className="item" key={brand}>
          <Radio
            name="brand"
            color="danger"
            svg={checkIcon}
            checked={isBrandChose === brand}
            onChange={brandChoose.bind(this, brand)}
          >
            {brand}
          </Radio>
        </div>
      );
    }
  });

  // Render categories
  const categoryItems = filterCategories.map(category => {
    return (
      <div className="item" key={category}>
        <Radio
          name="category"
          color="danger"
          svg={checkIcon}
          checked={isCategoryChose === category}
          onChange={categoryChoose.bind(this, category)}
        >
          {category}
        </Radio>
      </div>
    );
  });

  // Render release date
  const releaseDateItems = filterReleaseDate.map((date, index) => {
    if (index % 2 === 0) {
      return (
        <div className="item" key={index}>
          <Radio
            name="releaseDate"
            color="danger"
            svg={checkIcon}
            checked={isReleaseDateChose === date}
            onChange={releaseDateChoose.bind(this, date)}
          >
            {date}
          </Radio>
        </div>
      );
    } else {
      return (
        <div className="item odd" key={index}>
          <Radio
            name="releaseDate"
            color="danger"
            svg={checkIcon}
            checked={isReleaseDateChose === date}
            onChange={releaseDateChoose.bind(this, date)}
          >
            {date}
          </Radio>
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
        {isReleaseDateChose !== undefined ||
        isSizeChose !== undefined ||
        isBrandChose !== undefined ||
        isCategoryChose ||
        undefined ||
        prices.from !== "" ||
        prices.to !== "" ? (
          <button
            className="clear-filter btn btn-primary"
            onClick={clearFilterData}
          >
            Bỏ lọc
          </button>
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
          {props.brands.length > 4 ? (
            <>
              {" "}
              <Collapse isOpen={isOpen}>{lastPart}</Collapse>
              <div
                className="see-more"
                id="see-more-brand"
                onClick={toggleMoreBrand}
              >
                {isOpen ? "Rút gọn" : "Xem thêm"}
              </div>{" "}
            </>
          ) : (
            <div></div>
          )}

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
          type="text"
          name="from"
          value={isPricesInput.from || ""}
          onChange={handleFilterPrices}
          placeholder="Từ"
        />
        <input
          className="form-control price-input"
          type="text"
          name="to"
          value={isPricesInput.to || ""}
          onChange={handleFilterPrices}
          placeholder="Đến"
          pattern="[0-9]"
        />
        <button
          className="btn btn-primary apply-price red-btn"
          onClick={pricesChoose}
        >
          áp dụng
        </button>
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

const FilterBar = connect(mapStateToProps)(ConnectedFilterBar);

export default FilterBar;
