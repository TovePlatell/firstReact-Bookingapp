import React from "react";
import Card from "./Card";


// ska komma från database eller apies
const officeList = [
  {
    officeName: "Space 1",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    location: "Location: unknown",
    price: "25.000 per month",
    button: "Book this space"
  },
  {
    officeName: "Space 2",
    image: "https://images.unsplash.com/photo-1596079890744-c1a0462d0975?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
    location: "Address: unknown",
    price: "10.000 per month",
    button: "Book this space"
  },
  {
    officeName: "Space 3",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    location: "Location: unknown",
    price: "5.000 per month",
    button: "Book this space"
  },
];

// (product)=> {return (<Card />)}
// visar lista över alla produkter
function CardList() {
  return (
    <div className="flex flex-row flex-wrap justify-center">
      {officeList.map((office) => {
        return(
          <Card
            officeName={office.officeName}
            image={office.image}
        
            location={office.location}
            price={office.price}
            button = {office.button}

          />
      )

      })}
    </div>
  );
}

export default CardList;

