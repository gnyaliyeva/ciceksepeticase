import React from "react";
import { Helmet } from "react-helmet";

import CardBar from './CardBar'
import MarketContent from './MarketContent'

import "./style.scss";

const HomePage = () => {
  return (
    <div className="home-page-container">
      <Helmet>
        <title>Çiçek Sepeti</title>
        <meta name="Çiçek Sepeti" content="Çiçek Sepeti" />
      </Helmet>
      <MarketContent/>
      <CardBar/>
    </div>
  );
};

export default HomePage;
