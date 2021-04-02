import React, { useState } from "react";
import PropTypes from "prop-types";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import ReactTooltip from "react-tooltip";

import logo from "../../static/logo.svg";

import Button from "../../components/Button";
import Icon from "../../components/Icon";
import BreadCrumbs from "../../components/BreadCrumbs";

import { products } from "../../HomePage/MarketContent/products";

const Header = ({ totalCount, setFilter }) => {
  return (
    <div className="header-wrapper">
      <div className="top-bar-wrapper">
        <img src={logo} alt="cicek-sepeti-logo" className="app-logo" />
        <div className="search-box-wrapper">
          <AsyncTypeahead
            isLoading={false}
            labelKey="label"
            minLength={3}
            id="search"
            onSearch={value => setFilter(null, value)}
            options={products.map((product) => ({
              label: product.title,
              value: product.title,
            }))}
            placeholder="Ürün Ara"
            renderMenuItemChildren={(option) => <p>{option.value}</p>}
          />
          <Button className="button-search">Ara</Button>
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
