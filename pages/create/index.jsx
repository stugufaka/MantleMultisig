import React, { useState, useEffect, useContext } from "react";
import "tippy.js/dist/tippy.css"; // optional
import { ethers } from "ethers";
import { Badge, Button, Input, Modal, Textarea } from "@nextui-org/react";
import { Collapse, Grid, Text, Progress } from "@nextui-org/react";
// import FileViewer from "react-file-viewer";
import toast, { Toaster } from "react-hot-toast";
import Meta from "../../components/Meta";
import { AuthContext } from "../../utils/AuthProvider";

const Create = () => {
  const { address, signer, contract, provider, chainId, connect } =
    useContext(AuthContext);

  console.log("signer", signer);
  const projectId = "2DB3mQQJtzIC03GYarET8tFZJIm";
  const projectSecret = "0dedd8064ff788414096e72cc7e3f4a1";
  const auth =
    "Basic " + Buffer.from(projectId + ":" + projectSecret).toString("base64");
  const ipfsClient = require("ipfs-http-client");
  console.log(auth);
  const ipfs = ipfsClient.create({
    host: "ipfs.infura.io",
    port: 5001,
    protocol: "https",
    apiPath: "/api/v0",
    headers: {
      authorization: auth,
    },
  });

  const [isloading, setisloading] = useState(false);
  const [file, setFile] = useState("");
  const [filetype, setfiletype] = useState("");
  const [filesize, setfilesize] = useState("");
  const [isfileuploading, setisfileuploading] = useState(false);
  const [fileready, setfileready] = useState(false);
  const [isnftready, setisnftready] = useState(false);

  const [name, setname] = useState("");
  const [assetprice, setassetprice] = useState("");
  const [description, setdescription] = useState("");
  const onError = (err) => {
    console.log("Error:", err); // Write your own logic
  };

  async function onChange(e) {
    setisloading(true);
    const file = e.target.files[0];

    try {
      const added = await ipfs.add(file, {
        progress: (prog) => console.log(`received: ${prog}`),
      });

      const url = `https://infura-ipfs.io/ipfs/${added.path}`;
      console.log(url);
      setFile(url);
      setisloading(false);
      setfiletype(file.name);
      setfilesize(file.size);
      // setFileUrl(url);
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  }

  function getExtension() {
    return filetype.split(".").pop();
  }

  const notify = (msg) =>
    toast.success(msg, {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });

  const onAddNFT = async () => {
    setisloading(true);

    console.log(description);
    console.log(name);
    console.log(assetprice);

    if (description == "" || name == "" || assetprice == "") {
      alert("all fields required");
      return;
    }
    const price = ethers.utils.parseUnits(assetprice?.toString(), "ether");

    let listingPrice = await signer?.getListingPrice();
    listingPrice = listingPrice?.toString();
    // console.log(listingPrice, price.toString());
    let transaction = await signer?.createToken(
      file,
      price,
      name,
      description,
      file,
      {
        value: listingPrice,
      }
    );
    await transaction?.wait();
    setisloading(false);
    setisnftready(true);
    setdescription("");
    setassetprice("");
    setname("");
    setFile("");
    notify("NFT Created Successfully");
    alert('NFT created Successfully')
  };

  useEffect(() => {
    connect();
  }, []);

  return (
    <div>
      <Meta title="Create || Xhibiter | NFT Marketplace Next.js Template" />
      {/* <!-- Create --> */}
      <section className="relative py-24">
        <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
          <img
            src="/images/gradient_light.jpg"
            alt="gradient"
            className="h-full w-full"
          />
        </picture>
        <div className="container">
          <h1 className="font-display text-jacarta-700 py-16 text-center text-4xl font-medium dark:text-white">
            Create
          </h1>

          {/* <button
            onClick={() => {
              connect();
            }}
          >
            connect
          </button> */}
          <div className="mx-auto max-w-[48.125rem]">
            {/* <!-- File Upload --> */}
            <div className="mb-6"></div>
            {/* <!-- Name --> */}
            <div className="mb-6">
              <label
                htmlFor="item-name"
                className="font-display text-jacarta-700 mb-2 block dark:text-white"
              >
                Name<span className="text-red">*</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setname(e.target.value);
                }}
                id="item-name"
                className="dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 px-3 hover:ring-2 dark:text-white"
                placeholder="Item name"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="item-name"
                className="font-display text-jacarta-700 mb-2 block dark:text-white"
              >
                Price<span className="text-red">*</span>
              </label>
              <input
                value={assetprice}
                onChange={(e) => {
                  setassetprice(e.target.value);
                }}
                type="number"
                id="item-name"
                className="dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 px-3 hover:ring-2 dark:text-white"
                placeholder="Item name"
                required
              />
            </div>

            {/* <!-- Description --> */}
            <div className="mb-6">
              <label
                htmlFor="item-description"
                className="font-display text-jacarta-700 mb-2 block dark:text-white"
              >
                Description
              </label>
              <p className="dark:text-jacarta-300 text-2xs mb-3">
                The description will be included on the {"item's"} detail page
                underneath its image. Markdown syntax is supported.
              </p>
              <textarea
                value={description}
                onChange={(e) => {
                  setdescription(e.target.value);
                }}
                id="item-description"
                className="dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 px-3 hover:ring-2 dark:text-white"
                rows="4"
                required
                placeholder="Provide a detailed description of your item."
              ></textarea>
            </div>

            <div class="max-w-full mb-6">
              <label class="flex justify-center w-full h-32 px-4 transition bg-white dark:bg-[#13173f] border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                <span class="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  <span class="font-medium text-gray-600">
                    Click here to select file
                    {/* <span class="text-blue-600 underline">browse</span> */}
                  </span>
                </span>
                <input
                  type="file"
                  name="file_upload"
                  class="hidden"
                  onChange={onChange}
                />
              </label>
            </div>

            {/* {file && (
              <FileViewer
                fileType={getExtension()}
                filePath={file}
                // errorComponent={CustomErrorComponent}
                onError={onError}
              />
            )} */}

            {isloading ? (
              <div className="flex flex-row items-center justify-center">
                <Progress
                  indeterminated
                  value={50}
                  color="secondary"
                  status="secondary"
                />
              </div>
            ) : (
              ""
            )}

            {file && (
              <div>
                <button
                  onClick={() => {
                    onAddNFT();
                  }}
                  className="bg-accent-lighter cursor-pointer rounded-full py-3 px-8 text-center font-semibold text-white transition-all"
                >
                  Upload
                </button>
              </div>
            )}
            {isfileuploading ? (
              <Progress
                indeterminated
                value={50}
                color="primary"
                status="primary"
              />
            ) : (
              ""
            )}
            {/* <!-- Submit --> */}
          </div>
        </div>
      </section>
      {/* <!-- end create --> */}
    </div>
  );
};

export default Create;
