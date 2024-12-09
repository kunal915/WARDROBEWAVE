import React from "react";
import WomensProduct from "./products/WomensClothes";
import Header from "./Header";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
const CustomDesign = () => {
  const { type } = useParams();
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
