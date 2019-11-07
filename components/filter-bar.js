import React, { useState, useEffect } from "react";
import { Checkbox } from "pretty-checkbox-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Collapse } from "reactstrap";
import { connect } from "react-redux";
import "../components/fontawesome";
import Router, { useRouter } from "next/router";
import axios from "axios";

import { sizes } from "../db";
import { filterProducts } from "../redux/actions/filter";
import { clearFilter } from "../redux/actions/filter";
import { getProducts } from "../redux/actions/product";

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
    getProducts: () => dispatch(getProducts()),
    filterProducts: payload => dispatch(filterProducts(payload)),
    clearFilter: () => dispatch(clearFilter())
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
  const [shopProducts, setShopProducts] = useState([]);

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

  // LifeCycles

  useEffect(() => {
    return () => {
      props.clearFilter();
    };
  }, []);

  useEffect(() => {
    setShopProducts(props.products);
  }, []);

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

    props.filterProducts({
      brands: getFilterDatas(props.filterData.brands, brand, event.target)
    });
  };

  // Get data sizes filter
  const sizeChoose = async (size, event) => {
    const data = () => {
      props.filterProducts({
        sizes: getFilterDatas(props.filterData.sizes, size, event.target)
      });
    };

    const request = () => {
      filterRequest();
    };

    const result = await Promise.all([data(), request()]);

    return result;


  };

  const filterRequest = () => {
    let currentUrl = router.asPath;
    let url;
    let slug = props.filterData.sizes;
    console.log(slug);
    if (currentUrl === "/shop") {
      url = `https://cody-json-server.herokuapp.com/products?_page=1&_limit=16&available_size_like=${[slug].join(",")}`;
      console.log(url);
    } else {
      console.log(false);
    }

    axios
    .get(url)
    .then(response => {
      return {
        data: response.data,
        headers: response.headers
      };
    })
    .then(json => {
      setShopProducts(json.data);
    });
    // router.push(`${Router.pathname}?${slug}`);
  };

  // Get data categories filter
  const categoryChoose = (category, event) => {
    setIsCategoryChose(
      Object.assign(
        {},
        isCategoryChose,
        (isCategoryChose[category] = !isCategoryChose[category])
      )
    );

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
    setIsReleaseDateChose(
      Object.assign(
        {},
        isReleaseDateChose,
        (isReleaseDateChose[date] = !isReleaseDateChose[date])
      )
    );

    props.filterProducts({
      releaseDates: getFilterDatas(
        props.filterData.releaseDates,
        date,
        event.target
      )
    });
  };

  const handleFilterPrices = event => {
    const value = parseInt(event.target.value) || "";
    setFilterPrices({
      ...filterPrices,
      [event.target.name]: value
    });
  };

  const pricesChoose = () => {
    props.filterProducts({
      prices: filterPrices
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
        props.filterData.prices.from !== "" ||
        props.filterData.prices.to !== "" ? (
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

const FilterBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedFilterBar);

export default FilterBar;
