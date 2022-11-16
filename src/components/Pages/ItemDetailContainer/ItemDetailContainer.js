import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { useParams } from "react-router-dom";
import { productos } from "../../../assets/productos";
import { TbTruckDelivery } from "react-icons/tb";

const ItemDetailContainer = () => {
  const [prod, setProd] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    setProd(productos.find((k) => k.id == id));
    console.log(typeof id);
  }, []);

  if (!prod) return <p>cargando...</p>;
  return (
    <Container className="mt-5">
      <Row>
        <Col md={7}>
          <img src={prod.url}></img>
        </Col>
        <Col md={5}>
          <h1>{prod.nombre}</h1>
          <p>€{prod.precio}</p>
          <p>
            <TbTruckDelivery /> Llega mañana por €2
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default ItemDetailContainer;
