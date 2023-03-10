import React, { useState, useEffect, useContext } from "react";
import Web3 from "web3";

import Link from "next/link";
import { items_offer_data } from "../../data/items_tabs_data";
import {
  Modal,
  Button,
  Text,
  Input,
  Row,
  Checkbox,
  Progress,
  Spinner,
  Loading,
} from "@nextui-org/react";
import { AuthContext } from "../../utils/AuthProvider";
import { ellipseAddress } from "../../lib/utilities";
import { ethers } from "ethers";
import { hexToString } from "web3-utils";

const Properties = () => {
  const { address, signer, contract, provider, chainId, connect } =
    useContext(AuthContext);
  const [isloading, setisloading] = useState(false);
  const [isConfirmed, setisConfirmed] = useState(false);
  const [transactions, settransactions] = useState([]);
  async function loadtransactions() {
    const transactions = await contract?.getAllTransactions();
    settransactions(transactions);
  }

  async function isConfirmedHandler(id, owner) {
    const confirmed = await contract?.isConfirmed(id, owner);
    console.log(isConfirmed);
    setisConfirmed(confirmed);
  }

  async function getTransaction() {
    const transactions = await contract?.getTransaction(0);
    // settransactions(transactions);
    console.log(transactions);
  }

  useEffect(() => {
    loadtransactions();
    getTransaction();
  }, [contract]);

  console.log(transactions);

  const handleClick = async () => {
    const input = window.prompt("Please enter the number of signatures:");
    if (input) {
      let transaction = await signer?.setRequiredSignatures(input);
      await transaction?.wait();
      console.log("transaction", transaction);
    } else {
      console.log("No input was provided.");
    }
  };

  async function handleDeposit() {
    const input = window.prompt("Please enter amount to deposite");
    if (input) {
      let transaction = await signer?.setRequiredSignatures(input);
      await transaction?.wait();
      console.log("transaction", transaction);
    } else {
      console.log("No input was provided.");
    }
    await signer?.deposit({
      value: ethers.utils.parseUnits(input?.toString(), "ether"),
    });
    // Clear input field after successful deposit
  }

  const onConfirmTransaction = async (index) => {
    console.log(index);
    try {
      setisloading(true);
      // await handleDeposit();
      let transaction = await signer?.confirmTransaction(index);
      await transaction?.wait();
      console.log("transaction", transaction);

      alert("Transaction confirmed successfully");
      setisloading(false);
    } catch (error) {
      switch (error.code) {
        case "UNPREDICTABLE_GAS_LIMIT":
          alert("Gas limit is too high or too low");
          break;
        case "UNPREDICTABLE_GAS_PRICE":
          alert("Gas price is too high or too low");
          break;
        case "INSUFFICIENT_FUNDS":
          alert("Insufficient funds for the transaction");
          break;
        default:
          alert("An error occurred: ", error.message);
          console.log(error);
      }
    }
  };

  const onExecuteTransaction = async (index) => {
    console.log(index);
    try {
      setisloading(true);
      // await handleDeposit();
      let transaction = await signer?.executeTransaction(index);
      await transaction?.wait();
      console.log("transaction", transaction);

      alert("Transaction executed successfully");
      setisloading(false);
    } catch (error) {
      switch (error.code) {
        case "UNPREDICTABLE_GAS_LIMIT":
          alert("Gas limit is too high or too low");
          break;
        case "UNPREDICTABLE_GAS_PRICE":
          alert("Gas price is too high or too low");
          break;
        case "INSUFFICIENT_FUNDS":
          alert("Insufficient funds for the transaction");
          break;
        default:
          alert("An error occurred: ", error.message);
          console.log(error);
      }
    }
  };

  return (
    <>
      {/* <!-- Properties --> */}
      <div
        className="tab-pane fade show active"
        id="offers"
        role="tabpanel"
        aria-labelledby="offers-tab"
      >
        <button
          onClick={handleClick}
          className="focus:outline-none text-white bg-blue my-3 rounded-full hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium  text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Set Signatures
        </button>
        <button
          onClick={handleDeposit}
          className="focus:outline-none text-white bg-blue my-3 rounded-full hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium  text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Deposite
        </button>
        <div className="relative border-2 mt-2 overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr className="bg-gray-900 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="col" className="px-6 py-3">
                  Destination address{" "}
                </th>
                <th scope="col" className="px-6 py-3">
                  value
                </th>
                <th scope="col" className="px-6 py-3">
                  Data
                </th>

                <th scope="col" className="px-6 py-3">
                  AuthorizedUsers
                </th>
                <th scope="col" className="px-6 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {transactions?.map((transaction, index) => {
                isConfirmedHandler(index, transaction?.destination);
                return (
                  <tr className="bg-gray-900 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {ellipseAddress(transaction?.destination)}{" "}
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {ethers.utils.formatEther(transaction?.value?.toString())}{" "}
                      ETH
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {hexToString(transaction?.data)}
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {transaction.authorizedUsers}
                    </th>
                    {isConfirmed ? (
                      <td className=" py-4">
                        <button
                          onClick={() => {
                            onConfirmTransaction(index);
                          }}
                          className="focus:outline-none text-white bg-green rounded-full hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium  text-sm px-5 py-1.5  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                        >
                          Confirmed
                        </button>
                      </td>
                    ) : (
                      <td className=" py-4">
                        <button
                          onClick={() => {
                            onExecuteTransaction(index);
                          }}
                          className="focus:outline-none text-white bg-green rounded-full hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium  text-sm px-5 py-1.5  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                        >
                          Confirm
                        </button>
                      </td>
                    )}
                    {isConfirmed ? (
                      <td className=" py-4">
                        <button
                          onClick={() => {
                            onConfirmTransaction(index);
                          }}
                          className="focus:outline-none text-white bg-blue rounded-full hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium  text-sm px-5 py-1.5  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                        >
                          Execute
                        </button>
                      </td>
                    ) : (
                      ""
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Properties;
