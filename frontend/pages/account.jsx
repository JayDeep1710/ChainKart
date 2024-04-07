import React from "react";
import Card from "../src/components/Card";
import styles from "../styles/Home.module.css";
import bmw from "../src/assets/bmw.jpg";
import gold from "../src/assets/gold.jpg";
import nike from "../src/assets/nike.jpg";
import art from "../src/assets/art.jpg";
import property from "../src/assets/property.jpg";
import watch from "../src/assets/watch.jpg";
import propy from "../src/assets/prop.jpg";



const data = [
  {
    price: "1,875,000",
    imageUrl: bmw,
    name: "BMW i7",
  },
  {
    price: "200,000",
    imageUrl: property,
    name: "Dubai based property",
  },
  {
    price: "800",
    imageUrl: gold,
    name: "Dubai Gold",
  },
  {
    price: "10",
    imageUrl: nike,
    name: "Nike Shoes",
  },
  {
    price: "5",
    imageUrl: art,
    name: "Art Work",
  },
  {
    price: "13,000",
    imageUrl: watch,
    name: "Rolex Watch",
  },
  {
    price: "1,254,442",
    imageUrl: propy,
    name: "Hong Kong based Property",
  },
];
export default function Account() {

  return (
    <div className={styles.main}>
      <h1 className={styles.heading}>Owned RWAs </h1>
      <div className={styles.collection}>
      {data.map((rwa) => {
        return <Card data={rwa} />;
      })}
      </div>
      <div className={styles.collection}>
   </div>
  </div>
  );
}
