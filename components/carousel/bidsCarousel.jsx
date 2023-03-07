import React, { useState, useEffect, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import "tippy.js/dist/tippy.css";
import { bidsData } from "../../data/bids_data";
import Link from "next/link";
import Tippy from "@tippyjs/react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { bidsModalShow } from "../../redux/counterSlice";
import { useDispatch } from "react-redux";
import Likes from "../likes";
import { ethers } from "ethers";
import { HeadLine } from "../component";
import { tranding_category_filter } from "../../data/categories_data";
import Explore_collection_item from "../../components/collectrions/explore_collection_item";
import { AuthContext } from "../../utils/AuthProvider";

const BidsCarousel = ({ nft }) => {
  const dispatch = useDispatch();

  const handleclick = () => {
    console.log("clicked on ");
  };

  const { address, signer, contract, provider, chainId, connect } =
    useContext(AuthContext);
  const [filterVal, setFilterVal] = useState(0);

  const [nfts, setnft] = useState([]);
  async function loadNFTS() {
    const nft = await contract?.fetchMarketItems();
    setnft(nft);
  }
  useEffect(() => {
    loadNFTS();
  }, [contract]);
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={30}
        slidesPerView="auto"
        loop={true}
        breakpoints={{
          240: {
            slidesPerView: 1,
          },
          565: {
            slidesPerView: 2,
          },
          1000: {
            slidesPerView: 3,
          },
          1100: {
            slidesPerView: 4,
          },
        }}
        navigation={{
          nextEl: ".bids-swiper-button-next",
          prevEl: ".bids-swiper-button-prev",
        }}
        className=" card-slider-4-columns !py-5"
      >
        {nft?.map((item) => {
          const { tokenId, image, name, description, owner, price, seller } =
            item;
          return (
            <SwiperSlide className="text-white" key={tokenId?.toString()}>
            
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
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* <!-- Slider Navigation --> */}
      <div className="group bids-swiper-button-prev swiper-button-prev shadow-white-volume absolute !top-1/2 !-left-4 z-10 -mt-6 flex !h-12 !w-12 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-jacarta-700 text-xl sm:!-left-6 after:hidden">
        <MdKeyboardArrowLeft />
      </div>
      <div className="group bids-swiper-button-next swiper-button-next shadow-white-volume absolute !top-1/2 !-right-4 z-10 -mt-6 flex !h-12 !w-12 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-jacarta-700 text-xl sm:!-right-6 after:hidden">
        <MdKeyboardArrowRight />
      </div>
    </>
  );
};

export default BidsCarousel;
