import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const CartBtn = () => {
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  return (
    <div className="btnn">
      <NavLink to="/cart" className="btn  ms-2">
        <span className="fa fa-shopping-cart me-1"></span> Cart{" "}
        {cartTotalQuantity}
      </NavLink>
    </div>
  );
};

export default CartBtn;
