import React, { useState, useEffect, useContext } from "react";
import {
  Hero,
  Bids,
  Top_collection,
  Tranding_category,
  NewseLatter,
} from "../../components/component";
import { ethers } from "ethers";
import Meta from "../../components/Meta";
import { AuthContext } from "../../utils/AuthProvider";

const Home_1 = () => {
  const { address, signer, contract, provider, chainId, connect } =
    useContext(AuthContext);

  const [nfts, setnft] = useState([]);
  async function loadNFTS() {
    const nft = await contract?.fetchMarketItems();
    setnft(nft);
  }
  useEffect(() => {
    loadNFTS();
  }, [contract]);

//   console.log(nfts);
  return (
    <main>
      <Meta title="Universo" />
      <Hero />
      <Bids nft={nfts} />
      {/* <Top_collection /> */}
      <Tranding_category nft={nfts} />
      {/* <NewseLatter /> */}
    </main>
  );
};

export default Home_1;
