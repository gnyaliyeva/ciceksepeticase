import React from "react";
import PropTypes from "prop-types";

import Icon from "../../components/Icon";

import Card from "./card";

import "./style.scss";

const ProductContent = ({
  products,
  selectedProducts,
  setSelectedProducts,
}) => (
  <div className="product-list-content">
    <div className="product-list-content__row header">
      <Icon name="leaf" color="#51B549" width={17} />
      <span className="header--title">Tüm Kategoriler</span>
    </div>
    <div className="product-list-content__row">
      {products.map((product) => (
        <Card
          {...product}
          key={product.id}
          selectedProducts={selectedProducts}
          setSelectedProducts={setSelectedProducts}
        />
      ))}
    </div>
  </div>
);

ProductContent.propTypes = {
  products: PropTypes.array,
  selectedProducts: PropTypes.array,
  setSelectedProducts: PropTypes.func,
};

export default ProductContent;
