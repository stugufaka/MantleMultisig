import React, { useState, useEffect, useContext } from "react";

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

const Properties = () => {
  const { address, signer, contract, provider, chainId, connect } =
    useContext(AuthContext);

  const [transactions, settransactions] = useState([]);
  async function loadtransactions() {
    const transactions = await contract?.getAllTransactions();
    settransactions(transactions);
  }
  useEffect(() => {
    loadtransactions();
  }, [contract]);

  console.log(transactions);
  return (
    <>
      {/* <!-- Properties --> */}
      <div
        className="tab-pane fade show active"
        id="offers"
        role="tabpanel"
        aria-labelledby="offers-tab"
      >
        <button className="focus:outline-none text-white bg-blue my-3 rounded-full hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium  text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
          Set Signatures
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
                      {transaction?.value?.toString()} ETH
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Some Important Data
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      [ ' 0x6..7d',' 0x6..7d' ]
                    </th>
                    <td className=" py-4">
                      <button className="focus:outline-none text-white bg-green rounded-full hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium  text-sm px-5 py-1.5  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                        Confirm
                      </button>
                    </td>{" "}
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
