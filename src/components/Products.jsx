import React from "react";
import Card from "./Card";
import Asics from "../assets/ASICS Skyhand OG sneakers - Green.jpeg";
import AsicsGel from "../assets/Asics Gel-NYC Ivy Smoke Grey - 46_5.jpeg";
import AsicsKiko from "../assets/Asics Kiko Kostadinov x UB1-S Gel Kayano 14 'Classic Red Blue' 1201A189-600.jpeg";
import Dunk from "../assets/Concepts x Dunk Low SB 'Green Lobster' - 44.jpeg";
import DC from "../assets/DC Men's Court Graffik Lightweight Mesh Skate Sneaker Shoes.jpeg";
import Nike from "../assets/Nike Dunk Low Retro EMB sneakers.jpeg";
import NikeSb from "../assets/Nike SB Dunk Low Pro sneakers.jpeg";
import SpeedCat from "../assets/PUMA Speedcat OG _Red_ sneakers.jpeg";
import Samba from "../assets/Sneakers adidas Samba Indoor x Messi Rosa.jpeg";

function Products() {
  const products = [
    {
      name: "Asics",
      subtitle: "Running Shoe",
      price: "$10,000",
      image: Asics,
    },
    {
      name: "Asics Gel",
      subtitle: "Running Shoe",
      price: "$10,000",
      image: AsicsGel,
    },
    {
      name: "Asics Kiko",
      subtitle: "Running Shoe",
      price: "$10,000",
      image: AsicsKiko,
    },
    {
      name: "Dunk Low",
      subtitle: "Running Shoe",
      price: "$10,000",
      image: Dunk,
    },
    {
      name: "Puma Speed Cat",
      subtitle: "Running Shoe",
      price: "$10,000",
      image: SpeedCat,
    },
    {
      name: "DC",
      subtitle: "Running Shoe",
      price: "$10,000",
      image: DC,
    },
    {
      name: "Nike Dunk Low",
      subtitle: "Running Shoe",
      price: "$10,000",
      image: Nike,
    },
    {
      name: "Nike SB Dunk Low",
      subtitle: "Running Shoe",
      price: "$10,000",
      image: NikeSb,
    },
    {
      name: "Puma Speed Cat",
      subtitle: "Running Shoe",
      price: "$10,000",
      image: SpeedCat,
    },
    {
      name: "Adidas Samba",
      subtitle: "Running Shoe",
      price: "$10,000",
      image: Samba,
    },
  ];
  return (
    <div className="container mx-auto px-8 py-8">
      <div className="flex flex-wrap gap-1 justify-center">
        {products.map((product, index) => (
          <Card
            key={index}
            img={product.image}
            name={product.name}
            subtitle={product.subtitle}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
