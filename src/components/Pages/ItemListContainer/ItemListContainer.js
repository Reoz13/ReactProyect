import React, { useEffect, useState } from "react";
import { productos } from "../../../assets/productos";

const ItemListContainer = ({ type }) => {
  const [prods, setProds] = useState(null);
  useEffect(() => {
    setProds(productos);
  }, []);
  return (
    <div className="prop-greeting">
      <h2>{type && type}</h2>
      {prods?.map((e) => (
        <p>{e.nombre}</p>
      ))}
    </div>
  );
};

export default ItemListContainer;
