import React from "react";
import Link from "next/link";
import { items_offer_data } from "../../data/items_tabs_data";

const OfferTab = () => {
  return (
    <>
      {/* <!-- Offers --> */}
      <div
        className="tab-pane fade show active"
        id="offers"
        role="tabpanel"
        aria-labelledby="offers-tab"
      >
        <button className="focus:outline-none text-white bg-blue my-3 rounded-full hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium  text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
          Add account
        </button>
        <div className="relative border-2 mt-2 overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr className="bg-gray-900 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="col" className="px-6 py-3">
                  Address{" "}
                </th>

                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-900 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  0x6d8ee381e727bd18Eda7b3661621A123058Ce17d
                </th>
                <td className="px-6 py-4">
                  <button className="focus:outline-none text-white bg-red rounded-full hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium  text-sm px-5 py-1.5  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                    remove
                  </button>
                </td>{" "}
              </tr>
              <tr className="bg-gray-900 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  0x6d8ee381e727bd18Eda7b3661621A123058Ce17d
                </th>
                <td className="px-6 py-4">
                  <button className="focus:outline-none text-white bg-red rounded-full hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium  text-sm px-5 py-1.5  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                    remove
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default OfferTab;
