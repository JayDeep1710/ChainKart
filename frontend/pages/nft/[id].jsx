import styles from "../../styles/Home.module.css";
import image from "../../src/assets/gold.jpg";
import Image from "next/image";

// import { useContract } from "@thirdweb-dev/react";
import React, { useState, useEffect } from "react";
/// same collection address for all the NFTs created by the artists
import { NFT_Contract_adddress, Token_abi } from "../../src/constants";
import { isAddress } from "ethers/lib/utils";
import { useProvider, useSigner, useContract, useAccount } from "wagmi";
import { ethers } from "ethers";
import { useRouter } from "next/router";
// import {
//   useContract,
//   useContractRead,
//   useContractWrite,
// } from "@thirdweb-dev/react";

export default function NFT(props) {
  // buy nft

  const [tokenAddress, settokenAddress] = useState("");
  const [nfPrice, setnfPrice] = useState(0);
  const [price, setPrice] = useState("");
  const [data, setData] = useState({});

  const router = useRouter();
  const nftAddress = router.query.nftContract;
  const tokenId = router.query.tokenId;

  // const { NFT_contract } = useContract(
  //   "0xF99FcE9c34d8ed38108425Ce39B6D4d4Cd3cb470"
  // );
  // const { Fraction_contract } = useContract(
  //   "0x787FD6F86c692B8FbB0452B399fd5302201BFf79"
  // );

  const { address, isConnected } = useAccount();
  const provider = useProvider();
  const { data: signer } = useSigner();

  const Token_Contract = useContract({
    addressOrName: tokenAddress,
    contractInterface: Token_abi,
    signerOrProvider: signer || provider,
  });

  const FetchTokenData = async ({ _tokenAddress }) => {
    try {
      // const { address } = useContractRead(
      //   Fraction_contract,
      //   "getAddress",
      //   nftAddress,
      //   tokenId
      // );

      // filter the address first
      settokenAddress(address);

      // const { response } = useContractRead(NFT_contract, "tokenURI", tokenId);
      console.log(response);
      /// filter the NFT URI from the link and then

      const metadata = await fetch(tokenURI);
      const metadataJSON = await metadata.json();
      console.log(metadataJSON);
      setData(metadataJSON);

      const _price = await Token_Contract.salePrice();
      const price = parseInt(_price.hex._value);
      setnfPrice(price);
    } catch (err) {
      console.log(err);
    }
  };

  const BuyNFT = async () => {
    try {
      console.log("Buying NFT .. ");
      const tx = await Token_Contract.purchaseNFT({
        value: ethers.utils.parseEther(price),
      });
      await tx.wait();
      console.log("NFT purchase complete");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.nft_page}>
      <h1 className={styles.heading}>Dubai Gold</h1>
      <div className={styles.nft_section}>
        <div className={styles.img}>
          <Image className={styles.img} src={image} />
        </div>
        <div className={styles.right}>
          <h2>RWA Description</h2>
          <h4 className={styles.nft_desc}>
           Crafted with precision and certified for its purity, this gleaming treasure promises enduring value in uncertain times. Whether you're a seasoned investor or a connoisseur of fine assets, this gold bar presents an unparalleled opportunity to fortify your portfolio with a tangible asset renowned for its enduring worth.
          </h4>
          <h4>
          Specifications:
          </h4>
          <ul>
          <li>Purity: 99.99%</li>
          <li>Weight: 500g</li>
          <li>Dimensions: 80mm x 40mm x 10mm</li> 
          <li>Certification: MMTC-Pamp</li>
          </ul>
          

          <div className={styles.buy}>
            <h3>Purchase NFT</h3>
            <label htmlFor="">You Recieve : 1 Gold RWA</label>
            <label htmlFor="">RWA Price : $800</label>
            <label htmlFor="">Platform fees + Convenience fees = 3% </label>
            
            <label htmlFor="">Final Price : $824</label>
           
            <hr className={styles.hr} />
            <button className={`${styles.btn} ${styles.center}`}>
              Purchase
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
