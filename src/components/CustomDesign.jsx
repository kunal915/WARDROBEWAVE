import React from "react";
import WomensProduct from "./products/WomensClothes";
import Header from "./Header";
import Footer from "./Footer";
const CustomDesign = () => {
  return (
    <div>
      <Header />

      <hr />
      <WomensProduct />
      <Footer />
    </div>
  );
};
export default CustomDesign;
