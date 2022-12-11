import React, { useEffect, useReducer } from "react";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { useCart } from "../../../context/CartContext";
import CartCard from "./CartCard";
import Swal from "sweetalert2";

const CartPage = () => {
  const { cart, getTotal, clear } = useCart();
  const handdleFinish = () => {
    Swal.fire("Compra realizada", "You!", "success");
    clear();
  };

  if (!cart) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="d-flex flex-column gap-2">
      {cart.length === 0 && (
        <Row>
          <Col>
            <h4>Sin productos en el carrito</h4>
          </Col>
        </Row>
      )}
      {cart?.map((i) => {
        return (
          <CartCard
            key={i.item.id}
            item={i.item}
            quantity={i.quantity}
          ></CartCard>
        );
      })}
      {cart.length !== 0 && (
        <>
          <Button onClick={() => clear()}>Limpiar carrito</Button>
          <h4>
            Precio total:${" "}
            {cart
              .map((obj) => obj.item.price * obj.quantity)
              .reduce((a, b) => a + b, 0)}
          </h4>
          <Button className="button-geonz" onClick={handdleFinish}>
            Finalizar compra
          </Button>
        </>
      )}
    </div>
  );
};

export default CartPage;
