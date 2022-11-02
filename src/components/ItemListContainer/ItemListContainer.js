import React from "react";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="prop-greeting">
      <h2>{greeting}</h2>
    </div>
  );
};

export default ItemListContainer;
