import React from 'react';
import PropTypes from 'prop-types';
import { icons } from './icons';

import './style.scss';

const Icon = props => {
  const { color } = props;

  return (
    <svg
      {...props}
      fill={color}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
    >
      <path d={icons[props.name]} />
    </svg>
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  color: PropTypes.string,
};

export default Icon;
