import React from "react";
import CardItem from "./CardItem";
import { artisans } from "../Data"

export default function ListOfProducts({
  product,
  handleIncrement,
  handleDecrement,
  handleDelete,
  handleSumIncrement,
  sum, handleSumDecrement,handleSumDelete
 
}) {
  return (
    <div style={{display:"flex", flexDirection:"column", gap:"40px"}}>
  <div style={{ display: "flex", justifyContent: "space-around" }}>
        {product.map((elt) => (
          <CardItem
            elt={elt}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            handleDelete={handleDelete}
            handleSumIncrement={handleSumIncrement}
            handleSumDecrement={handleSumDecrement}
            handleSumDelete={handleSumDelete}
            artisans={artisans}
            
     
  
         
          />
        ))}
      </div>

      <div style={{textAlign:"center"}}>
     {
       product.length!==0 ? <h1> Total: {sum} </h1> : <h1> You have no Products</h1>
     }

      </div>
    


      </div>


  );
}
