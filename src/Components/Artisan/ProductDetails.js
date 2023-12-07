import React from "react";
import { useLocation } from "react-router-dom";
import CardItem from "./CardItem";
import { useParams } from "react-router-dom";

export default function ProductDetails({ product, artisans }) {
  const { id } = useParams();
  const elt = product.find((p) => p.id === Number(id));

  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "10px",
  };

  const imageStyle = {
    width: "200%",
    maxWidth: "500px",
    maxHeight: "100%",
    objectFit: "cover",
    marginTop:"40px",
    marginLeft:"100px"
  };

  const detailsStyle = {
    width: "50%",
    paddingLeft: "20px",
  };

  const buttonContainerStyle = {
    display: "flex",
    gap: "10px",
    marginTop: "20px",
   
  };

  const buttonStyle = {
    color: "black",
    border: "1px solid #343a40",
    flex: 5,
    padding: "2px",
    fontSize: "1.5rem",
    textAlign: "center",
    cursor: "pointer",
    transition: "background-color 0.3s ease-in-out",
  };

  const orderButtonStyle = {
    padding: "10px",
    cursor: "pointer",
    backgroundColor: "#3498db",
    color: "#fff",
    border: "none",
    backgroundColor:" #51b884",
    
  };

  
  return (
    <div style={{ width: "18rem", margin: "auto" }}>
      {elt && <CardItem elt={elt} artisans={artisans} details={true} />}
      
    </div>
  );
}

