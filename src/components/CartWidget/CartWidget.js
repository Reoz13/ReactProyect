import React from "react";
import Button from "react-bootstrap/Button";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

export const CartWidget = () => {
  return (
    <div className="nav-Cart">
      <Link to="/cart">
        <Button variant="primary">
          <MdOutlineShoppingCart />
        </Button>{" "}
      </Link>
    </div>
  );
};

export default CartWidget;
