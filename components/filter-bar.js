import React, {useState} from "react";
import { Checkbox } from "pretty-checkbox-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../components/fontawesome";
import { Collapse } from 'reactstrap';

const FilterBar = props => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSectionOpen, setIsSectionOpen] = useState({
    brand: true,
    category: true,
    size: true,
    relateDate: true
  })

  const toggleMoreBrand = () => setIsOpen(!isOpen);

  const toggleSection = (event) => {
    const section = event.target.dataset.title;
    setIsSectionOpen(Object.assign({}, isSectionOpen, isSectionOpen[section] = !isSectionOpen[section]))
  }

  const checkIcon = (
    <svg viewBox="0 0 20 20">
      <path
        d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"
        style={{ stroke: "white", fill: "white" }}
      ></path>
    </svg>
  );

  let sizeVn = [
    38.5,
    39,
    40,
    40.5,
    41,
    42,
    42.5,
    43,
    44,
    44.5,
    45,
    45.5,
    46,
    47,
    47.5,
    48,
    48.5,
    49.5,
    50.5,
    51.5
  ];

  const sizes = sizeVn.map(size => {
    return (
      <div className="item" key={size}>
        {size}
      </div>
    );
  });
  return (
    <div className="filter-bar col-lg-3">
      <div className="filter-header content">
        <div className="left-side d-flex align-items-center">
          <FontAwesomeIcon icon="sliders-h" />
          <div className="text">Lọc</div>
        </div>
        <button className="clear-filter btn btn-primary" disabled="disabled">
          Bỏ lọc
        </button>
      </div>
      <div className="break-line" />
      <div className="brand content">
        <div
          className="title"
          onClick={toggleSection}
          data-title="brand"
        >
          <div className="text">Thương hiệu</div>
          <FontAwesomeIcon icon={isSectionOpen.brand ? "chevron-up" : "chevron-down" } />
        </div>
        <Collapse isOpen={isSectionOpen.brand} className="select-filter">
          <div className="item">
            <Checkbox shape="curve" color="danger" svg={checkIcon}>
              Nike
            </Checkbox>
          </div>
          <div className="item">
            <Checkbox shape="curve" color="danger" svg={checkIcon}>
              Air Jordan
            </Checkbox>
          </div>
          <div className="item">
            <Checkbox shape="curve" color="danger" svg={checkIcon}>
              Adidas
            </Checkbox>
          </div>
          <div className="item">
            <Checkbox shape="curve" color="danger" svg={checkIcon}>
              Conserve
            </Checkbox>
          </div>
          <Collapse isOpen={isOpen}>
            <div className="item">
              <Checkbox shape="curve" color="danger" svg={checkIcon}>
                Asics
              </Checkbox>
            </div>
            <div className="item">
              <Checkbox shape="curve" color="danger" svg={checkIcon}>
                Vans
              </Checkbox>
            </div>
          </Collapse>
          <div className="see-more" id="see-more-brand" onClick={toggleMoreBrand}>
            {isOpen ? "Rút gọn" : "Xem thêm"}
          </div>
        </Collapse>
      </div>
      <div className="break-line" />
      <div className="category content">
        <div
          className="title"
          onClick={toggleSection}
          data-title="category"
        >
          <div className="text">Danh mục</div>
          <FontAwesomeIcon icon={isSectionOpen.category ? "chevron-up" : "chevron-down" } />
        </div>
        <Collapse isOpen={isSectionOpen.category} className="select-filter" id="categories-collapse">
          <div className="item">
            <Checkbox shape="curve" color="danger" svg={checkIcon}>
              Nam
            </Checkbox>
          </div>
          <div className="item">
            <Checkbox shape="curve" color="danger" svg={checkIcon}>
              Nữ
            </Checkbox>
          </div>
          <div className="item">
            <Checkbox shape="curve" color="danger" svg={checkIcon}>
              Thiếu niên
            </Checkbox>
          </div>
          <div className="item">
            <Checkbox shape="curve" color="danger" svg={checkIcon}>
              Sơ sinh
            </Checkbox>
          </div>
        </Collapse>
      </div>
      <div className="break-line" />
      <div className="size content">
        <div
          className="title"
          onClick={toggleSection}
          data-title="size"
        >
          <div className="text">Size</div>
          <FontAwesomeIcon icon={isSectionOpen.size ? "chevron-up" : "chevron-down" } />
        </div>
        <Collapse isOpen={isSectionOpen.size} className="select-filter" id="size-collapse">
          {sizes}
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
        <div
          className="title"
          onClick={toggleSection}
          data-title="relateDate"
        >
          <div className="text">Năm ra mắt</div>
          <FontAwesomeIcon icon={isSectionOpen.relateDate ? "chevron-up" : "chevron-down" } />
        </div>
        <Collapse isOpen={isSectionOpen.relateDate} className="select-filter" id="collapseExample">
          <div className="date-row">
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
          </div>
        </Collapse>
      </div>
    </div>
  );
};

export default FilterBar;
