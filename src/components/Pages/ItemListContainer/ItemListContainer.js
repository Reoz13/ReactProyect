import React, { useEffect, useState } from "react";
import { productos } from "../../../assets/productos";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";

const ItemListContainer = ({ type, subType }) => {
  const navigate = useNavigate();
  const [prods, setProds] = useState(null);
  useEffect(() => {
    type && setProds(productos?.filter((f) => f.tipo === type));
    type &&
      subType &&
      setProds(
        productos?.filter((f) => f.tipo === type && f.subTipo === subType)
      );
  }, [type, subType]);
  return (
    <Container className="mt-5">
      <Row>
        {prods?.map((e) => (
          <Col md={4} className="mb-5">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={e.url} />
              <Card.Body>
                <Card.Title>{e.nombre}</Card.Title>
                <Card.Text>€{e.precio}</Card.Text>
                <Button
                  onClick={() => navigate(`/${type}/${e.id}`)}
                  variant="primary"
                >
                  Ver mas
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ItemListContainer;
