import React from 'react'

import logo from '../../static/logo.svg'

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="top-bar-wrapper">
        <img src={logo} alt="cicek-sepeti-logo" className="app-logo" />
      </div>
      <div className="blue-bar-wrapper">
        <h1>ÇiçekSepeti</h1>
      </div>
    </div>
  )
}

export default Header;