import React from "react";
import Button from "react-bootstrap/Button";
import { MdOutlineShoppingCart } from "react-icons/md";

export const CartWidget = () => {
  return (
    <div className="nav-Cart">
      <Button variant="primary">
        <MdOutlineShoppingCart />
      </Button>
      <img className="nav-Cart-img" />
    </div>
  );
};

export default CartWidget;
