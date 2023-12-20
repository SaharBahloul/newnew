import React, { useEffect } from "react";
import CardItem from "./CardItem";
import ProductSearch from './../Buyer/ProductSearching';
import { Button } from "react-bootstrap";
import axios from "axios";
import ArtisanCard from "./ArtisanCard"; // Import the new component
import { useState } from "react";
export default function ListOfProducts({
  product,
  handleIncrement,
  handleDecrement,
  handleDelete,
  handleSumIncrement,
  handleSumDecrement,
  handleSumDelete,
  setProduct,
  setArtisans,
  artisans
}) {


  console.log('setArtisans:', setArtisans); // Add this for debugging
  const [showArtisans, setShowArtisans] = useState(false);

 const handleSearch = ({ searchTerm, searchType }) => {
    let searchUrl = "http://localhost:6006/api"; // base URL for your API

    if (searchType === 'category') {
      searchUrl += `/products/category?category=${encodeURIComponent(searchTerm)}`;
    } else if (searchType === 'region') {
      searchUrl += `/products/region?region=${encodeURIComponent(searchTerm)}`;
    }

    axios.get(searchUrl)
      .then((response) => {
        setProduct(response.data.product); // update the product state with the filtered results
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
  };

  const url = "http://localhost:6006/api/products"; 
  const url2="http://localhost:6006/api/artisans"
  useEffect(() => { 
    axios.get("http://localhost:6006/api/products")
      .then((res) => { 
        setProduct(res.data.product); // set products in state
        console.log("Products fetched:", res.data.product);
      }) 
      .catch((err) => { 
        console.error("Error fetching products:", err); 
      }); 
  }, []);
  

  const fetchAllProducts = () => {
    axios.get("http://localhost:6006/api/products")
      .then((res) => {
        setProduct(res.data.product); // set products in state
        console.log("Products fetched:", res.data.product);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  };
  useEffect(() => { 
    fetchAllProducts();
  }, []);
  
  const fetchAllArtisans = () => {
    axios.get("http://localhost:6006/api/artisans")
      .then((res) => {
        if (res.data && res.data.artisan) {
          setArtisans(res.data.artisan);
          console.log("Artisans fetched:", res.data.artisan);
        }
      })
      .catch((err) => {
        console.error("Error fetching artisans:", err);
      });
  };
  
  
  useEffect(() => { 
    fetchAllArtisans();
  }, []);

  const reloadAllProducts = () => {
    fetchAllProducts();
  };
  return (
    <div style={{ backgroundColor: "beige", padding: "30px",marginTop:"5px"}}>
      <ProductSearch onSearch={handleSearch} />
      <div style={buttonContainerStyle}>
      <Button variant="outline-dark" onClick={() => setShowArtisans(true)}>Artisans</Button>
<Button variant="outline-dark"  onClick={() => {
    fetchAllProducts(); // Call the function to reload all products
    setShowArtisans(false); // Set showArtisans to false
  }}>Products</Button>

      </div>

    {/* Conditional Rendering */}
    {showArtisans ? (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
          {artisans.map((artisan) => (
            <ArtisanCard key={artisan.id} artisan={artisan} />
          ))}
        </div>
      ) : (

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
        {product.map((elt) => (
          <CardItem
            key={elt.id}
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
      )}
    </div> 
  );
}