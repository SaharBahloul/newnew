import React from "react";
import CardItem from "./CardItem";

import { useState } from "react"; 
import axios from "axios"; 
import { useEffect } from "react";
export default function ListOfProducts({
  product,
  handleIncrement,
  handleDecrement,
  handleDelete,
  handleSumIncrement,
  sum, handleSumDecrement,handleSumDelete , setProduct,artisans
 
}) 
{
  
// same use state here fergha
  //useeffect//axios.get/

  const url = "http://localhost:6006/api/products"; 
  const url2="http://localhost:6006/api/artisans"
 

  // const [artisans, setArtisans] = useState([]);
 // for product
  useEffect(() => { 
    axios 
      .get(url) 
      .then((res) => { 
         setProduct(res.data.product); 
        console.log(res); 
      }) 
      .catch((err) => { 
        console.log(err); 
      }); 
  }, []);

  // artisans
  // useEffect(() => { 
  //   axios 
  //     .get(url2) 
  //     .then((res) => { 
  //        setArtisans(res.data.artisans); 
  //       console.log(res); 
  //     }) 
  //     .catch((err) => { 
  //       console.log(err); 
  //     }); 
  // }, []);
  
 

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
     {/* {
       product.length!==0 ? <h1> Total: {sum} </h1> : <h1> You have no Products</h1>
     } */}

      </div>
    


      </div>


  );
}
