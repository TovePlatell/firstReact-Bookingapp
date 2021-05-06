import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
//import Calendar from "./Calendar"

// måste vara inloggad för att kunna komma åt denna sida.. 

function CardList(props) {
  // useState for products
  const [products, setProducts] = useState([]);

  
  useEffect(() => {

    
      const fetchProducts = async () => {
      const response = await axios.get("http://localhost:1337/products");
      console.log(response);

      setProducts(response.data);
    };

    fetchProducts();

  }, [])
  
    // useEffect för att kunna hämta data från database 
  

  return (

    <div>
    <p>{props.username}</p>
      {products.map((product) => {
        return (
          <Card
            key={product.id}
            //image = {product.img}
            image={product.img[0].formats.thumbnail.url}
            productName={product.name}
            price={product.price}
            description={product.description}
          />

        );
      })}
    </div>
 
  );
}

export default CardList;

