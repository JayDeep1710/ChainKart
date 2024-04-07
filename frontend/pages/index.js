import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import image from "../src/assets/collage2.png";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <main className={styles.hero}>
          <div className={styles.section}>
          <h1>Indroducing ChainKart,</h1>
            <h2>Buy, Sell & Trade Real World Assets</h2>
            <span>
              Trade RWAs in simple steps and
              sell it directly on the platform to earn from
              it. Token Holders earn a profit by holding the tokens for a peroid
              of time
            </span>
            <div className={styles.buttons}>
              <button className={styles.btn}>
                <Link href={"/create"}>Create Listing</Link>
              </button>
              <button className={styles.btn2}>
                {" "}
                <Link href={"/marketplace"}>Marketplace</Link>
              </button>
            </div>
          </div>
          <div className={styles.image}>
            <Image className={styles.image} src={image} />
          </div>
        </main>
        <h2>Platform Features</h2>

        <div className={styles.collection}>
          <div className={styles.feature}>
            All assets stored on decentralized storage like IPFS{" "}
          </div>
          <div className={styles.feature}>
            Own a Real World Asset  just for fractions of the cost{" "}
          </div>
          <div className={styles.feature}>
            Earn a wholesome profit from selling Real Estate, Gold, Bonds, and much more...
          </div>
          <div className={styles.feature}>
            Mint Digital Proof for your Real World Asset for free in under 60 secs
          </div>
          <div className={styles.feature}>
            Control the Sale of all your RWA at one place 
          </div>
          <div className={styles.feature}>
            Buy tokens/fractions of the RWAs at the same platform
          </div>
        </div>
        
      </div>
    </div>
  );
}
