import React from "react";
import "./HeaderImagesStyles.scss";
import samplLogo from "../../assets/images/sampl-logo.png";
import samplOil from "../../assets/images/sampl-oil.png";

const HeaderImages = () => {
  return (
    <>
      <img src={samplLogo} alt="sampl logo" className="sampl-logo" />
      <img src={samplOil} alt="organic gem oil" className="sampl-product" />
    </>
  );
};

export default HeaderImages;
