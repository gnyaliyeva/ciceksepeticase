import React, { useState } from "react";
import PropTypes from "prop-types";
import SearchField from "react-search-field";
import ReactTooltip from "react-tooltip";

import logo from "../../static/logo.svg";

import history from "../../history";

import Button from "../../components/Button";
import Icon from "../../components/Icon";
import BreadCrumbs from "../../components/BreadCrumbs";

const Header = ({ totalCount }) => {
  const { pathname } = history.location;
  const [search, setSearch] = useState(null);

  return (
    <div className="header-wrapper">
      <div className="top-bar-wrapper">
        <img src={logo} alt="cicek-sepeti-logo" className="app-logo" />
        <div className="search-box-wrapper">
          <SearchField placeholder="Search..." onChange={setSearch} />
          <Button
            className="button-search"
            onClick={() => history.push(`${pathname}?q=${search}`)}
          >
            Ara
          </Button>
        </div>
        <div className="product-box" data-tip data-for="product-box">
          <Icon name="trolley" width={16} color="#fff" />
          <span className="title-text">Sepetim</span>
          <span className="product-count">{totalCount}</span>
        </div>
        <ReactTooltip
          id="product-box"
          className="product-box__tooltip"
          place="bottom"
          backgroundColor="#F54257"
          textColor="#fff"
          delayHide={1000}
          effect="solid"
        >
          <div className="product-box__tooltip--text">
            <Icon name="flash" color="#FFCE00" width={13} />
            <span className="color-yellow">50 TL</span> ürün daha ekleyin kargo
            bedava
          </div>
        </ReactTooltip>
      </div>
      <div className="blue-bar-wrapper">
        <h1>ÇiçekSepeti</h1>
      </div>
      <BreadCrumbs />
    </div>
  );
};

Header.propTypes = {
  totalCount: PropTypes.number,
};

export default Header;
