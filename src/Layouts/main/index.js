import React from "react";

import Header from './header';
import Footer from './footer';

import './style.scss';

const MainLayout = ({ component }) => {
  return (
    <div className="main-layout-wrapper">
      <Header />
      {component}
      <Footer/>
    </div>
  );
};

export default MainLayout;
