import _ from "lodash";

import { products } from "./HomePage/MarketContent/products";

export const getProductList = (category, search) => {
  let list = products;

  if (category) {
    list = _.filter(products, (product) =>
      _.includes(product.category, category)
    );
  } else if (search) {
    list = _.filter(products, (product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
  } else {
    list = products;
  }
  return list;
};
