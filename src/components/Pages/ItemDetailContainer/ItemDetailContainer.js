import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { useParams } from "react-router-dom";
import { productos } from "../../../assets/productos";
import { TbTruckDelivery } from "react-icons/tb";
import Button from "react-bootstrap/esm/Button";
import { useCart } from "../../../context/CartContext";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import ItemDetail from "../../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [prod, setProd] = useState(null);
  const { id } = useParams();

  const getItem = async () => {
    const db = getFirestore();
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);
    setProd({ id: docSnap.id, ...docSnap.data() });
  };
  useEffect(() => {
    getItem();
  }, []);

  // if (!prod) return <p>cargando...</p>;
  return (
    <>
      {" "}
      <ItemDetail prod={prod}></ItemDetail>
    </>
  );
};

export default ItemDetailContainer;
