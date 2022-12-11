import React from "react";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { useCart } from "../../../context/CartContext";
import ItemCount from "../../ItemCount/ItemCount";
import "./CartCard.css";

const CartCard = ({ item, quantity }) => {
  const { removeItem } = useCart();
  return (
    <Container>
      <Row className="d-flex border">
        <Col className="colImgContainer">
          <img
            className="colImagenCardCart"
            src={item.image}
            alt="imagen del producto"
          ></img>
        </Col>
        <Col>
          {item.title}
          <p>Precio unitario: €{item.price}</p>
          <p>cantidad: {quantity}</p>
          <p>subtotal: €{quantity * item.price}</p>
        </Col>
        <Col>
          <Button className="button-geonz" onClick={() => removeItem(item.id)}>
            X
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default CartCard;
