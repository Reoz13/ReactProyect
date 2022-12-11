import React, { useEffect, useState } from "react";
import { productos } from "../../../assets/productos";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Await, useNavigate } from "react-router-dom";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ type, subType }) => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  const { categoryName } = useParams();

  const getProducts = async () => {
    if (!subType) {
      const db = getFirestore();

      const q = query(collection(db, "products"), where("type", "==", type));
      const ar = [];
      const products = await getDocs(q);
      products.forEach((doc) => {
        ar.push({ id: doc.id, ...doc.data() });
      });
      setItems(ar);
    }
    if (subType) {
      const db = getFirestore();

      const q = query(
        collection(db, "products"),
        where("subType", "==", subType)
      );
      const q2 = query(collection(db, "products"), where("type", "==", type));
      const ar = [];
      const products = await getDocs(q);
      products.forEach((doc) => {
        ar.push({ id: doc.id, ...doc.data() });
      });
      const products2 = await getDocs(q2);
      products2.forEach((doc) => {
        ar.push({ id: doc.id, ...doc.data() });
      });
      setItems(
        ar
          .filter((v, i, a) => a.findIndex((v2) => v2.id === v.id) === i)
          .filter((a) => a.subType === subType)
      );
    }
  };

  useEffect(() => {
    getProducts();
  }, [type, subType]);
  return (
    <Container className="mt-5">
      <Row>
        {items?.map((e) => (
          <Col md={4} key={e.id} className="mb-5">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={e.image} />
              <Card.Body>
                <Card.Title>{e.title}</Card.Title>
                <Card.Text>€{e.price}</Card.Text>
                <Button
                  className="button-geonz"
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

// eso se hizo con salem y funciona

// const ItemListContainer = ({ type, subType }) => {
//   const navigate = useNavigate();
//   const [prods, setProds] = useState(null);
//   useEffect(() => {
//     type && setProds(productos?.filter((f) => f.tipo === type));
//     type &&
//       subType &&
//       setProds(
//         productos?.filter((f) => f.tipo === type && f.subTipo === subType)
//       );
//   }, [type, subType]);
//   return (
//     <Container className="mt-5">
//       <Row>
//         {prods?.map((e) => (
//           <Col md={4} className="mb-5">
//             <Card style={{ width: "18rem" }}>
//               <Card.Img variant="top" src={e.url} />
//               <Card.Body>
//                 <Card.Title>{e.nombre}</Card.Title>
//                 <Card.Text>€{e.precio}</Card.Text>
//                 <Button
//                   className="button-geonz"
//                   onClick={() => navigate(`/${type}/${e.id}`)}
//                   variant="primary"
//                 >
//                   Ver mas
//                 </Button>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

export default ItemListContainer;
