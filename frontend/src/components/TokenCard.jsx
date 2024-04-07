import React from "react";
import styles from "../css/Component.module.css";
import styles2 from "../../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import image from "../assets/3.jpeg";

export default function TokenCard(props) {
  return (
    
    <div className={styles.card}>
      <div className={styles.image}>
        <Image
          className={styles.image}
          src={props.data2.imageUrl}
          alt="Property image"
          width={"300px"}
          height={"220px"}
        />
      </div>
      <div className={styles.card_content}>
        <h3>
          <u>{props.data2.name}</u>
        </h3>
        <h4>Token Price : $ {props.data2.price}</h4>
        <h4>% of Tokens Left : {props.data2.per} </h4>
        <Link href={`/token/${props.id}`}>
          <button className={`${styles2.btn} ${styles2.center}`}>Purchase Token</button>
        </Link>
      </div>
    </div>
  );
}
