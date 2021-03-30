import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../static/logo.svg";
import footerImg1 from "../../static/footer-img1.png";
import qrCode from "../../static/qrcode.png";
import AppStore from "../../static/appstore.svg";
import PlayStore from "../../static/playstore.svg";

import Icon from "../../components/Icon";

import { footerMenu } from "../footerMenu";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <div className="footer__white-bar">
          <div className="row">
            <div className="col-md-6 col-sm-4">
              <img src={footerImg1} alt="cicek-sepeti" className="mobil-img" />
            </div>
            <div className="col-md-6 col-sm-8 store-info">
              <div className="store-info__qr-text">
                <img src={qrCode} alt="ciceksepeti-qr-code" />
                <div className="qr-text-wrapper">
                  <span className="qr-text--bold">
                    Çiçek Sepeti Mobil Uygulamayı İndirin
                  </span>
                  <span className="qr-text--regular">
                    Mobil Uygulamayı QR Code ile indirin.
                  </span>
                </div>
              </div>
              <div className="store-buttons">
                <img src={PlayStore} alt="ciceksepeti-play-store" />
                <img src={AppStore} alt="ciceksepeti-app-store" />
              </div>
            </div>
          </div>
        </div>
        <div className="footer-menu">
          <div className="col-lg-4 col-md-6 border-right">
            <div className="footer-menu-row">
              <img src={Logo} alt="cicek-sepeti" />
            </div>
            <div className="footer-menu-row footer__icons">
              <Link to="/">
                <Icon name="facebook" color="#4172b8" width={28} />
              </Link>
              <Link to="/">
                <Icon name="twitter" color="#1da1f2" width={28} />
              </Link>
              <Link to="/">
                <Icon name="instagram" color="#e4405f" width={28} />
              </Link>
              <Link to="/">
                <Icon name="youtube" color="#f00" width={28} />
              </Link>
              <Link to="/">
                <Icon name="social" color="#e37c33" width={28} />
              </Link>
            </div>
            <div className="footer-menu-row">
              <span className="footer_menu__description">
                CicekSepeti.com olarak kişisel verilerinizin gizliliğini
                önemsiyoruz. 6698 sayılı Kişisel Verilerin Korunması Kanunu
                kapsamında oluşturduğumuz aydınlatma metnine{" "}
                <Link to="/">buradan</Link> ulaşabilirsiniz.
              </span>
            </div>
          </div>
          <div className="col-lg-8 col-md-6">
            <div className="row">
              {footerMenu.map((menuItem) => (
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <ul>
                    <li className="menu-header">
                      <Link to={menuItem.href}>{menuItem.name}</Link>
                    </li>
                    {menuItem.subMenu.map(({ href, name }) => (
                      <li>
                        <Link to={href}>{name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-description">
          <span>
            Türkiyenin en büyük online çiçek sitesi ÇiçekSepeti ile
            sevdiklerinizi mutlu etmek çok kolay! Çiçek göndermenin ve “Mutlu
            etmenin adresi” Çiçek Sepeti ile sevdiklerinize özel günlerde online
            çiçek gönderebilirsiniz. Geniş çiçekçi ağı sayesinde çiçek
            siparişleriniz Türkiye’nin dört bir yanına hızlı ve sorunsuz şekilde
            gönderilir. Taze çiçeklerle hazırlanan mis kokulu şık çiçek
            aranjmanları arasından beğendiğiniz ürünü seçerek, hızlı bir şekilde
            online sipariş verebilirsiniz. Sevdiklerinizin doğum günü, yıldönümü
            gibi mutlu günlerinde onların sevincine ortak olmak için yapmanız
            gereken sadece birkaç tıkla sipariş vermek. Sevgililer Günü,
            Kadınlar Günü, Anneler Günü gibi özel günlerde de çiçek, hediye ve
            lezzetli bonnyFood ürünleriyle sevdiklerinizi mutlu edebilirsiniz.
            Çünkü mutlu etmenin adresi; ÇiçekSepeti.
          </span>
        </div>
      </div>
      <div className="footer-bottom-bar">
        Copyright © 2019 Çiçek Sepeti İnternet Hizmetleri A.Ş
      </div>
    </div>
  );
};

export default Footer;
