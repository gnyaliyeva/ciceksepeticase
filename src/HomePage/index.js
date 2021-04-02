import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { getProductList } from "../tools";

import CardBar from "./CardBar";
import MarketContent from "./MarketContent";

import "./style.scss";

const HomePage = ({ search }) => {
  const [category, setCategory] = useState(null);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    setProductList(getProductList(category, search));
  }, [category, search]);

  return (
    <div className="home-page-container">
      <Helmet>
        <title>Çiçek Sepeti</title>
        <meta name="Çiçek Sepeti" content="Çiçek Sepeti" />
      </Helmet>
      <MarketContent setCategory={setCategory} productList={productList} />
      <CardBar />
    </div>
  );
};

export default HomePage;
