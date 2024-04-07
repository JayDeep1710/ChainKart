import React, { useState, useEffect } from "react";
import Card from "../src/components/Card";
import TokenCard from "../src/components/TokenCard";
import styles from "../styles/Home.module.css";
import bmw from "../src/assets/bmw.jpg";
import gold from "../src/assets/gold.jpg";
import nike from "../src/assets/nike.jpg";
import art from "../src/assets/art.jpg";
import property from "../src/assets/property.jpg";
import watch from "../src/assets/watch.jpg";
import propy from "../src/assets/prop.jpg";


export default function Marketplace() {
  const [toggleState, setToggleState] = useState(1);

  function toggleTab(index) {
    setToggleState(index);
    console.log(index);
  }

  // fetch Tokens

  // const [tokens, setTokens] = useState([]);
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
  const data2 = [
    {
      price: "1,875",
      imageUrl: bmw,
      name: "BMW i7",
      per:"75",
    },
    {
      price: "200",
      imageUrl: property,
      name: "Dubai based property",
      per:"68"
    },
    {
      price: "8",
      imageUrl: gold,
      name: "Dubai Gold",
      per:"89",
    },
    {
      price: "0.1",
      imageUrl: nike,
      name: "Nike Shoes",
      per:"65",
    },
    {
      price: "0.05",
      imageUrl: art,
      name: "Art Work",
      per:"65",
    },
    {
      price: "130",
      imageUrl: watch,
      name: "Rolex Watch",
      per:"65",
    },
    {
      price: "1,254",
      imageUrl: propy,
      name: "Hong Kong based Property",
      per:"65",
    },
  ];
  
  return (
    <div className={styles.main}>
      <h1 className={styles.heading}>Marketplace</h1>
      <div className={styles.stats_section}>
        <div className={styles.tabs_section}>
          <div
            onClick={() => toggleTab(1)}
            className={
              toggleState === 1
                ? `${styles.tabs} ${styles.active_tab}`
                : styles.tabs
            }
          >
            RWA
          </div>

          <div
            className={
              toggleState === 2
                ? `${styles.tabs} ${styles.active_tab}`
                : styles.tabs
            }
            onClick={() => toggleTab(2)}
          >
            Token
          </div>
        </div>

        <div className={styles.content_tabs}>
          <div
            className={
              toggleState === 1
                ? `${styles.tab1} ${styles.active_content}`
                : styles.tab1
            }
          >
            <div className={styles.collection}>
              {data.map((rwa) => {
                return <Card data={rwa} />;
              })}
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? `${styles.tab2} ${styles.active_content}`
                : styles.tab2
            }
          >
            <div className={styles.collection}>
            {data2.map((rwa) => {
              return <TokenCard data2={rwa} />;
            })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
