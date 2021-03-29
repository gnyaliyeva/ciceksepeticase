import React from "react";
import { Helmet } from "react-helmet";

import "./style.scss";

const HomePage = () => {
  return <div className="home-page-container">
    <Helmet>
      <title>Çiçek Sepeti</title>
      <meta name="Çiçek Sepeti" content="Çiçek Sepeti"/>
    </Helmet>
    Home Page</div>;
};

export default HomePage;
