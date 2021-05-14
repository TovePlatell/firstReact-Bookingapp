import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

// problem med att show less button dyker upp när man går in på cardlist?? varför
// GÖRA OM SEARCH TILL ATT MAN SÖKER PÅ LOCATION


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

        return product.name.toLowerCase().includes(search.toLowerCase())
     } )
      
    )
  }, [search, products])

  // skriva load more function
  function loadMore() {
    // kolla hur många produkter finns i database
    setLoading(loading + 2);
  }

  function loadLess() {
    let dynamicPage = loading - 2;
    setLoading(dynamicPage);
  }

  /*   const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct =  indexOfLastProduct - productPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  //change page

  const paginate = pageNumber => setCurrentPage(pageNumber);
    // useEffect för att kunna hämta data från database  */



    
  
  
  return (
    <>
   <div className="grid py-10 place-items-center">
    <input className="ring-2 ring-blue-500 ring-opacity-75 md:ring-opacity-50" type="text" placeholder="search your location" onChange={e => setSearch(e.target.value)}
        />
        </div>

        {!waiting && (
        <div className="grid place-items-center">
          {products.length >= loading && (
            <button
              className="px-6 py-2 m-4 my-2 font-bold text-black rounded py- mtext-xs "
              onClick={loadMore} 
              
            > Load more
            <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 17l-4 4m0 0l-4-4m4 4V3" />
</svg> 
             
            </button>
          )}{" "}
          {products.length > 2 && (
            <button
              className="px-6 py-2 m-4 my-2 font-bold text-black rounded mtext-xs"
              onClick={loadLess}
            > Load less
            <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7l4-4m0 0l4 4m-4-4v18" />
</svg>
             
            </button>
          )}
        </div>
      )}
      <div className="grid h-48 grid-cols-3 gap-2 place-items-center lg:gap-y-0 md:grid-cols-2 lg:grid-cols-3">
      
        {filteredProducts.map((product) => {
          return (

         
            <Card
              // product = {currentProducts}

              // bilderna fungerar ej längre, har ändrat till single image och inte multiple...
              key={product.id}
              image={product.img.url}
              //image={product.img[0].formats.thumbnail.url}
              productName={product.name}
              price={product.price}
              description={product.description}
              location ={product.location}
              //loading={loading}
            />
          
          );
        })}
      </div>

      
    </>
  );
}

export default CardList;

/* import React, { useState, useEffect } from "react";
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

export default CardList; */
