import React from "react";
import PropTypes from "prop-types";

import Header from "./header";
import Footer from "./footer";

import "./style.scss";

const MainLayout = ({ component }) => {
  return (
    <div className="main-layout-wrapper">
      <Header />
      {component}
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
  component: PropTypes.object,
};

export default MainLayout;
