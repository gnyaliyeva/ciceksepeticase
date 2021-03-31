import React from "react";

import Button from "../../components/Button";
import Icon from "../../components/Icon";

import Card from "./card";
import { categories } from "./categories";
import { products } from "./products";

import "./style.scss";

const MarketContent = () => {
  return (
    <div className="market-content-container">
      <div className="category-list-content">
        <div className="category-list-content__row header">
          <Icon name="categories" color="#044DC3" width={16} />
          <span className="header--title">Kategoriler</span>
        </div>
        <div className="category-list-content__row category-wrapper">
          <Button secondary>Tüm Kategoriler</Button>
          {categories.map((category) => (
            <Button outlineSecondary key={category.title}>
              {category.title}
            </Button>
          ))}
        </div>
      </div>
      <div className="product-list-content">
        <div className="product-list-content__row header">
          <Icon name="leaf" color="#51B549" width={17} />
          <span className="header--title">Tüm Kategoriler</span>
        </div>
        <div className="product-list-content__row">
          {products.map((product) => (
            <Card {...product} key={product.key} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketContent;
