import React from "react";
import styles from "../css/Component.module.css";
import styles2 from "../../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import image from "../assets/3.jpeg";

export default function Card(props) {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image
          className={styles.image}
          src={props.data.imageUrl}
          alt="Property image"
          width={"300px"}
          height={"220px"}
        />
      </div>
      <div className={styles.card_content}>
        <h3>
          <u>{props.data.name}</u>
        </h3>
        <h4>Price:$ {props.data.price}</h4>
        <Link href={`/nft/${props.id}`}>
          <button className={`${styles2.btn} ${styles2.center}`}>RWA Details</button>
        </Link>
      </div>
    </div>
  );
}
