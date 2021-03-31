import React from "react";

import { routes } from "../../routes";

import "./style.scss";

const BreadCrumbs = () => {
  return (
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="#">Home</a>
        </li>
        <li class="breadcrumb-item">
          <a href="#">Library</a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          Data
        </li>
      </ol>
    </nav>
  );
};

export default BreadCrumbs;
