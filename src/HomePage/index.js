import React from "react";
import PropTypes from 'prop-types'
import { Helmet } from "react-helmet";

import CardBar from "./CardBar";
import MarketContent from "./MarketContent";

import "./style.scss";

const HomePage = ({ handleFilter, productList, selectedProducts, setSelectedProducts }) => {
  return (
    <div className="home-page-container">
      <Helmet>
        <title>Çiçek Sepeti</title>
        <meta name="Çiçek Sepeti" content="Çiçek Sepeti" />
      </Helmet>
      <MarketContent
        handleFilter={handleFilter}
        productList={productList}
        selectedProducts={selectedProducts}
        setSelectedProducts={setSelectedProducts}
      />
      <CardBar />
    </div>
  );
};

HomePage.propTypes = {
  handleFilter: PropTypes.func,
  productList: PropTypes.array,
  selectedProducts: PropTypes.array,
  setSelectedProducts: PropTypes.func,
}

export default HomePage;
