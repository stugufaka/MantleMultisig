import React, { useState, useEffect, useContext } from "react";
import "tippy.js/dist/tippy.css"; // optional
import { ethers } from "ethers";
import { Collapse, Grid, Text, Progress } from "@nextui-org/react";
import toast, { Toaster } from "react-hot-toast";
import Meta from "../../components/Meta";
import { AuthContext } from "../../utils/AuthProvider";

const Create = () => {
  const { address, signer, contract, provider, chainId, connect } =
    useContext(AuthContext);

  const [destination, setDestination] = useState("");
  const [value, setValue] = useState("");
  const [data, setData] = useState("");
  const [timelock, setTimelock] = useState(0);
  const [authorizedUsers, setAuthorizedUsers] = useState("");
  const [isloading, setisloading] = useState(false);

  const handleSubmit = async (event) => {
    setisloading(true);
    if (
      destination == "" ||
      value == "" ||
      data == "" ||
      authorizedUsers == ""
    ) {
      alert("all fields required");
      return;
    }

    // Split the authorized users input into an array
    const authorizedUsersArray = authorizedUsers
      .split(",")
      .map((address) => address.trim());

    let hex = ethers.utils.formatBytes32String(data);
    let value_ = ethers.utils.parseUnits(value?.toString(), "ether");

    const unixTime = Math.floor(new Date(timelock).getTime() / 1000);

    console.log(unixTime);
    console.log(hex);
    console.log(destination);
    console.log(value);
    console.log(data);
    // console.log(timelock_);
    console.log(authorizedUsersArray);
    // console.log(timelock);
    const tx = await signer?.submitTransaction(
      destination,
      value_,
      hex,
      unixTime,
      authorizedUsersArray
    );

    await tx.wait();

    // // Reset the form
    setDestination("");
    setValue("");
    setData("");
    setTimelock("");
    setAuthorizedUsers("");
    setisloading(false);
    alert("transaction added successfully");
  };

  useEffect(() => {
    connect();
  }, [isloading]);

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

          <div className="mx-auto max-w-[48.125rem]">
            {/* <!-- File Upload --> */}
            <div className="mb-6"></div>
            {/* <!-- Name --> */}
            <div className="mb-6">
              <label
                htmlFor="item-name"
                className="font-display text-jacarta-700 mb-2 block dark:text-white"
              >
                Destination<span className="text-red">*</span>
              </label>
              <input
                type="text"
                value={destination}
                onChange={(e) => {
                  setDestination(e.target.value);
                }}
                id="item-name"
                className="dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 px-3 hover:ring-2 dark:text-white"
                placeholder="Destination"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="item-name"
                className="font-display text-jacarta-700 mb-2 block dark:text-white"
              >
                Value<span className="text-red">*</span>
              </label>
              <input
                value={value}
                onChange={(e) => {
                  setValue(e.target.value);
                }}
                type="number"
                id="item-name"
                className="dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 px-3 hover:ring-2 dark:text-white"
                placeholder="Value amount in eth"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="item-name"
                className="font-display text-jacarta-700 mb-2 block dark:text-white"
              >
                TimeClock<span className="text-red">*</span>
              </label>
              <input
                value={timelock}
                onChange={(e) => {
                  setTimelock(e.target.value);
                }}
                type="datetime-local"
                id="item-name"
                className="dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 px-3 hover:ring-2 dark:text-white"
                placeholder="Time for transaction to start"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="item-name"
                className="font-display text-jacarta-700 mb-2 block dark:text-white"
              >
                Authorize Uses<span className="text-red">*</span>
              </label>
              <input
                value={authorizedUsers}
                onChange={(e) => {
                  setAuthorizedUsers(e.target.value);
                }}
                type="text"
                id="item-name"
                className="dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 px-3 hover:ring-2 dark:text-white"
                placeholder={`Separte authorize users with ","`}
                required
              />
            </div>
            {/* <
            !-- Description --> */}
            <div className="mb-6">
              <label
                htmlFor="item-description"
                className="font-display text-jacarta-700 mb-2 block dark:text-white"
              >
                Data
              </label>
              <p className="dark:text-jacarta-300 text-2xs mb-3">
                The description will be included on the {"item's"} detail page
                underneath its image. Markdown syntax is supported.
              </p>
              <textarea
                value={data}
                onChange={(e) => {
                  setData(e.target.value);
                }}
                id="item-description"
                className="dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 px-3 hover:ring-2 dark:text-white"
                rows="4"
                required
                placeholder="Provide a data for the transaction."
              ></textarea>
            </div>

            <div>
              <button
                onClick={() => {
                  handleSubmit();
                }}
                className="bg-accent-lighter cursor-pointer rounded-full py-3 px-8 text-center font-semibold text-white transition-all"
              >
                Upload
              </button>
            </div>

            {/* <!-- Submit --> */}
          </div>
        </div>
      </section>
      {/* <!-- end create --> */}
    </div>
  );
};

export default Create;
