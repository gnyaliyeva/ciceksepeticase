import React from "react";

import Card from "./card";
import "./style.scss";

const CardBar = () => {
  const cardList = [
    {
      imgName: "courier",
      buttonTxt: "Detaylı Bilgi",
      text: "75 TL Üzerine Teslimat Ücreti Bizden",
      backGround: "bg-red",
    },
    {
      imgName: "gift",
      buttonTxt: "Hediye Ürünleri",
      text: "Hediye Kategorisi için Sepette %15 İndirim",
      backGround: "bg-blue",
    },
    {
      imgName: "stationery",
      buttonTxt: "Detaylı Bilgi",
      text: "Kırtasiye Kategorisi için Sepette %15 İndirim",
      backGround: "bg-green",
    },
  ];
  return (
    <div className="card-bar-container">
      <div className="row">
        {cardList.map((card) => (
          <div className="col-md-4">
            <Card {...card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardBar;
