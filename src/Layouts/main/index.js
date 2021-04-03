import React, { useEffect, useState } from "react";

import { products } from "../../HomePage/MarketContent/products";

import HomePage from "../../HomePage";
import { getProductList } from "../../tools";

import Header from "./header";
import Footer from "./footer";

import "./style.scss";

const MainLayout = () => {
  const [category, setCategory] = useState(null);
  const [search, setSearch] = useState(null);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [productList, setProductList] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleFilter = (category, search = null) => {
    if (category) {
      setCategory(category);
      setSearch(null);
    }
    if (search) {
      setSearch(search);
      setCategory(null);
    }
    if (!category && !search) {
      setCategory(null);
      setSearch(null);
    }
  };

  useEffect(() => {
    setSelectedProducts(
      products.map((product) => ({ id: product.id, count: 0, fee: 0 }))
    );
  }, []);

  useEffect(() => {
    setProductList(getProductList(category, search));
  }, [category, search]);

  useEffect(() => {
    let amount = 0;
    let cost = 0;
    selectedProducts.forEach((product) => {
      amount += product.count;
      cost += product.fee;
    });
    setTotalAmount(amount);
    setTotalCost(cost);
  }, [selectedProducts]);

  return (
    <div className="main-layout-wrapper">
      <Header handleFilter={handleFilter} amount={totalAmount} cost={totalCost} />
      <HomePage
        handleFilter={handleFilter}
        productList={productList}
        selectedProducts={selectedProducts}
        setSelectedProducts={setSelectedProducts}
      />
      <Footer />
    </div>
  );
};

export default MainLayout;
