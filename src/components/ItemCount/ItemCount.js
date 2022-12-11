import React from "react";
import Button from "react-bootstrap/esm/Button";

const ItemCount = (props) => {
  const agregarCantidad = () => {
    props.setCantidad(props.cantidad + 1);
  };
  const restarCantidad = () => {
    if (props.cantidad > 1) {
      props.setCantidad(props.cantidad - 1);
    }
  };
  return (
    <div className="d-flex">
      <Button className="button-geonz" onClick={restarCantidad}>
        -
      </Button>
      <p>{props.cantidad}</p>
      <Button className="button-geonz" onClick={agregarCantidad}>
        +
      </Button>
    </div>
  );
};

export default ItemCount;
