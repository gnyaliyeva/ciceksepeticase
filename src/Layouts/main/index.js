import React, { useState } from "react";
import PropTypes from "prop-types";

import HomePage from "../../HomePage";

import Header from "./header";
import Footer from "./footer";

import "./style.scss";

const MainLayout = () => {
  const [search, setSearch] = useState(null);
  return (
    <div className="main-layout-wrapper">
      <Header setSearch={setSearch} />
      <HomePage search={search} />
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
  component: PropTypes.object,
};

export default MainLayout;
