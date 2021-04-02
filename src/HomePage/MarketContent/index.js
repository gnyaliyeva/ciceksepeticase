import React, { useEffect, useState } from "react";

import Button from "../../components/Button";
import Icon from "../../components/Icon";

import ProductContent from "./ProductContent";
import { categories } from "./categories";

import "./style.scss";

const MarketContent = ({ productList, setCategory }) => {
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
          <Button secondary onClick={() => setCategory(null)}>
            Tüm Kategoriler
          </Button>
          {categories.map((category) => (
            <Button
              outlineSecondary
              key={category.title}
              onClick={({ scope }) => setCategory(scope)}
            >
              {category.title}
            </Button>
          ))}
        </div>
        {showNavMenu && (
          <div className="category-list-content__row category-wrapper d-md-none">
            <Button onClick={() => setCategory(null)}>Tüm Kategoriler</Button>
            {categories.map((category) => (
              <Button
                key={category.title}
                onClick={({ scope }) => setCategory(scope)}
              >
                {category.title}
              </Button>
            ))}
          </div>
        )}
      </div>
      <ProductContent products={productList} />
    </div>
  );
};

export default MarketContent;
