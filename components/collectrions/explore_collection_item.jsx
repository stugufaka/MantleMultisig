import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Feature_collections_data from "../../data/Feature_collections_data";
import {ethers} from 'ethers'
const Explore_collection_item = ({ itemFor , nft}) => {
  const { sortedCollectionData } = useSelector((state) => state.counter);

  const [itemData, setItemData] = useState([]);

  useEffect(() => {
    if (itemFor === "userPage") {
      setItemData(Feature_collections_data.slice(0, 4));
      console.log(itemData);
    } else {
      setItemData(sortedCollectionData);
    }
  }, [sortedCollectionData, itemFor]);

  return (
    <>
      {nft?.map((item) => {
        const { tokenId, image, name, description, owner, price, seller } =
          item;

        return (
          <article key={tokenId?.toString()}>
            <div className="dark:bg-jacarta-700 dark:border-jacarta-700 border-jacarta-100 rounded-2.5xl block border bg-white p-[1.1875rem] transition-shadow hover:shadow-lg">
              <figure className="relative">
                <Link href={`/item/${tokenId?.toString()}`}>
                  <a>
                    <img
                      src={image?.toString()}
                      alt="item 5"
                      className="w-full h-[230px] rounded-[0.625rem] object-cover"
                    />
                  </a>
                </Link>

                <div className="absolute left-3 -bottom-3">
                  <div className="flex -space-x-2">
                    {/* <Link href={`/item/${itemLink}`}>
                      <a>
                        <Tippy content={<span>creator: {creator.name}</span>}>
                          <img
                            src={creator.image}
                            alt="creator"
                            className="dark:border-jacarta-600 hover:border-accent dark:hover:border-accent h-6 w-6 rounded-full border-2 border-white"
                          />
                        </Tippy>
                      </a>
                    </Link> */}
                    {/* <Link href={`/item/${tokenId?.toString()}`}>
                      <a>
                        <Tippy content={<span>creator: {owner.name}</span>}>
                          <img
                            src={owner.image}
                            alt="owner"
                            layout="fill"
                            className="dark:border-jacarta-600 hover:border-accent dark:hover:border-accent h-6 w-6 rounded-full border-2 border-white"
                          />
                        </Tippy>
                      </a>
                    </Link> */}
                  </div>
                </div>
              </figure>
              <div className="mt-7 flex items-center justify-between">
                <Link href={`/item/${tokenId?.toString()}`}>
                  <a>
                    <span className="font-display text-jacarta-700 hover:text-accent text-base dark:text-white">
                      {name}
                    </span>
                  </a>
                </Link>

                {/* auction dropdown  */}
              </div>
              <div className="mt-2 text-sm">
                <span className="dark:text-jacarta-200 text-jacarta-700 mr-1">
                  {parseFloat(
                    Number(ethers.utils.formatEther(price?.toString() || 0)) ||
                      0
                  ).toFixed(3) || 0}{" "}
                  ETH
                </span>
              </div>

              <div className="mt-8 flex items-center justify-between">
                <button
                  className="text-accent font-display text-sm font-semibold"
                  onClick={() => dispatch(buyModalShow())}
                >
                  Buy now
                </button>
              </div>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default Explore_collection_item;
