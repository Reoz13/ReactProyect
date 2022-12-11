import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useCart } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ prod }) => {
  const { addItem, isInCart, cart } = useCart();
  const [cantidad, setCantidad] = useState(1);
  const verificador = () => {
    return isInCart(prod.id, cantidad) ? null : addToCart();
  };
  const addToCart = () => {
    addItem(prod, cantidad);
  };

  if (!prod) return <p>Cargando...</p>;

  return (
    <Container className="mt-5">
      <Row>
        <Col md={7}>
          {" "}
          <img src={prod.image}></img>{" "}
        </Col>
        <Col md={5}>
          <h1>{prod.title}</h1>
          <p>
            Lorem ipsum dolor sit amet. Non dolore aperiam eum provident modi
            non iusto nisi est explicabo saepe non saepe quos. Sit incidunt
            laboriosam eum assumenda suscipit et iure inventore sed atque earum
            a Quis dolor. Cum repellendus tempore et porro voluptas eum laborum
            repellendus quo voluptates distinctio qui enim debitis.
          </p>
          <p>€{prod.price}</p>
          <ItemCount cantidad={cantidad} setCantidad={setCantidad}></ItemCount>
          <Button onClick={verificador} className="button-geonz">
            Agregar al carrito
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ItemDetail;
