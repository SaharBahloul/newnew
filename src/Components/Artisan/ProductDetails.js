import React from "react";
import { useLocation } from "react-router-dom";
import CardItem from "./CardItem";
import { useParams } from "react-router-dom";

export default function ProductDetails({ product, artisans }) {
  const { id } = useParams();
  const elt = product.find((p) => p.id === Number(id));


  
  return (
    <div style={{ width: "18rem", margin: "auto" }}>
      {elt && <CardItem elt={elt} artisans={artisans} details={true} />}
      
    </div>
  );
}

