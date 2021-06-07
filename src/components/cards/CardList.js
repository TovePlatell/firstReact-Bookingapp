import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";



function CardList() {
  // useState for products
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(2);
  const [waiting, setWaiting] = useState(false);
  const [search, setSearch] = useState("")
   const [filteredProducts, setFilteredProducts] = useState([])


  useEffect(() => {
    const fetchProducts = async () => {
      setWaiting(true);
      //setLoading(true)
      const response = await axios.get(
        `http://localhost:1337/products?_limit=${loading}`
      );
     
      console.log(response.data.img);
      setProducts(response.data);
      // setLoading(false)
    };

    fetchProducts();
    setWaiting(false);
  }, [loading]);

 


   useEffect(()=>{

   setFilteredProducts(

      products.filter( product => {

        return (product.location || "").toLowerCase().includes(search.toLowerCase())
    } )
      
    )
   }, [search, products]) 

   function loadMore() {
    // kolla hur många produkter finns i database
    setLoading(loading + 2);
  }

  function loadLess() {
    let dynamicPage = loading - 2;
    setLoading(dynamicPage);
  }


  
 
  
  return (

    
 
    <div className="container grid items-center w-full text-center">
    
   <div className="grid py-10 ml-10 place-items-center">

   
     <input className="my-2 ml-56 border-4 border-double border-light-blue-500" type="text" placeholder="search your location" onChange={e => setSearch(e.target.value)}
        />   
        </div>

        {!waiting && (
        <>
          {products.length >= loading && (
            <div>
            <button
              className="px-6 py-2 m-4 my-2 mb-10 ml-56 text-xs font-bold text-black rounded shadow-sm"
              onClick={loadMore} 
              
            > More
            <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 17l-4 4m0 0l-4-4m4 4V3" />
             </svg> 
             
            </button>
            </div>
          )}{" "}
          
          

        </>
      )}
     
      <div className="grid grid-cols-1 gap-3 md:grid-cols-1 lg:grid-cols-1 ml-96">
      
        {filteredProducts.map((product) => {
          return (

         
            <Card
          
              key={product.id}
              image={product.img.url}
              productName={product.name}
              price={product.price}
              description={product.description}
              location ={product.location}
              productId ={product.id}
             
             
            />
          
          );
        })}
      </div>
      
      {products.length > 2 && (

<div className="my-96 py-96">
<button
  className="px-6 py-2 m-4 my-2 ml-56 text-xs font-bold text-black rounded shadow-md "
  onClick={loadLess}
> Less
<svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7l4-4m0 0l4 4m-4-4v18" />
</svg>
 
</button>

</div>
)}
      
      

      </div>
  );
}

export default CardList;
