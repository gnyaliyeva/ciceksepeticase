import React, { useState } from "react";

import Button from "../../components/Button";
import Icon from "../../components/Icon";

import Card from "./card";
import { categories } from "./categories";
import { products } from "./products";

import "./style.scss";

const MarketContent = () => {
  const [showNavMenu, setShowNavMenu] = useState(false);
  return (
    <div className="market-content-container">
      <div className="category-list-content">
        <div className="category-list-content__row header d-md-none">
          <Button onClick={() => setShowNavMenu(!showNavMenu)}>
            <Icon name="categories" color="#044DC3" width={16} />
            <span className="header--title">Kategoriler</span>
          </Button>
        </div>
        <div className="category-list-content__row category-wrapper d-none d-md-flex">
          <Button secondary>Tüm Kategoriler</Button>
          {categories.map((category) => (
            <Button outlineSecondary key={category.title}>
              {category.title}
            </Button>
          ))}
        </div>
        {showNavMenu && (
          <div className="category-list-content__row category-wrapper">
            <Button>Tüm Kategoriler</Button>
            {categories.map((category) => (
              <Button key={category.title}>{category.title}</Button>
            ))}
          </div>
        )}
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
