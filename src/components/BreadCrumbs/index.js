import React from "react";
import { Link } from 'react-router-dom'

import { routes } from "../../routes";

import "./style.scss";

const BreadCrumbs = () => {
  return (
    <div className="breadcrumbs-wrapper">
      <ol className="breadcrumbs-content">
        {routes.map((route, idx) => (
          <li className={`breadcrumb-item ${idx === routes.length-1 ? 'active' : ''}`}>
            <Link to={route.href}>{route.name}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default BreadCrumbs;
