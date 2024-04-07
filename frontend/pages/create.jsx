import styles from "../styles/Home.module.css";
import React, { useEffect, useState } from "react";

export default function Create() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState([]);

  
  return (
    <div className={styles.main}>
      <h1 className={styles.heading}>Upload your RWA Info</h1>
      <div className={styles.create_form}>
        <label htmlFor="">RWA Title</label>
        <input
          type="text"
          value={name}
          placeholder="Number of tokens"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="">Pricing</label>
        <input
          type="number"
          value={price}
          placeholder="Price for the RWA"
          onChange={(e) => setPrice(e.target.value)}
        />
        <label htmlFor="">Upload RWA</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <label htmlFor="">Description of your RWA</label>
        <textarea
          placeholder="Enter description for your RWA"
          className={styles.description}
          value={description}
          cols="100"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button className={styles.btn}>
          RWA  Authentication
        </button>
      </div>
    </div>
  );
}
