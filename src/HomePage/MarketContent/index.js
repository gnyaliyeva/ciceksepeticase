import React, { useEffect, useState } from "react";
import _ from "lodash";

import Button from "../../components/Button";
import Icon from "../../components/Icon";

import ProductContent from "./ProductContent";
import { categories } from "./categories";
import { products } from "./products";

import "./style.scss";

const MarketContent = () => {
  const [showNavMenu, setShowNavMenu] = useState(false);
  const [category, setCategory] = useState(null);
  const [productList, setProductList] = useState(products);

  useEffect(() => {
    let list = products;
    if (category) {
      list = _.filter(products, (product) =>
        _.includes(product.category, category)
      );
    } else {
      list = products;
    }
    setProductList(list);
  }, [category]);

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
              onClick={() => setCategory(category.scope)}
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
                onClick={() => setCategory(category.scope)}
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
