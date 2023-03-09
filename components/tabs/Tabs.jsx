import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import OfferTab from "./OfferTab";
import Properties from "./Properties";
import Activity_tab from "./Activity_tab";
import Price_history from "./Price_history";
import "react-tabs/style/react-tabs.css";

const ItemsTabs = () => {
  const [tabsActive, setTabsActive] = useState(1);
  const tabsHeadText = [
    {
      id: 1,
      text: "accounts",
      icon: "user",
    },
    {
      id: 2,
      text: "Pending Transactions",
      icon: "details",
    },
    {
      id: 3,
      text: "Transactions",
      icon: "properties",
    },
  ];
  return (
    <>
      <div className="scrollbar-custom mt-14 overflow-x-auto rounded-lg">
        {/* <!-- Tabs Nav --> */}
        <Tabs className="min-w-fit tabs">
          <TabList className="nav nav-tabs flex items-center">
            {/* <!-- Offers --> */}
            {tabsHeadText.map(({ id, text, icon }) => {
              return (
                <Tab className="nav-item bg-transparent" key={id}>
                  <button
                    className={
                      tabsActive === id
                        ? "nav-link hover:text-jacarta-700 text-jacarta-400 relative flex items-center whitespace-nowrap py-3 px-6 dark:hover:text-white active"
                        : "nav-link hover:text-jacarta-700 text-jacarta-400 relative flex items-center whitespace-nowrap py-3 px-6 dark:hover:text-white"
                    }
                    onClick={() => setTabsActive(id)}
                  >
                    <svg className="icon mr-1 h-5 w-5 fill-current">
                      <use xlinkHref={`/icons.svg#icon-${icon}`}></use>
                    </svg>
                    <span className="font-display text-base font-medium">
                      {text}
                    </span>
                  </button>
                </Tab>
              );
            })}
          </TabList>

          <TabPanel className="tab-content">
            <OfferTab />
          </TabPanel>
          <TabPanel>
            <Properties />
          </TabPanel>
          <TabPanel>
            <div
              className="tab-pane fade show active"
              id="offers"
              role="tabpanel"
              aria-labelledby="offers-tab"
            >
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
                    <tr className="bg-gray-900 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        0x6d8ee381e727bd18Eda7b3661621A123058Ce17d
                      </th>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        2 ETH
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
                          Execute
                        </button>
                      </td>{" "}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <Activity_tab />
          </TabPanel>
          <TabPanel>
            <Price_history classes="dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 rounded-t-2lg rounded-b-2lg rounded-tl-none border bg-white p-6" />
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default ItemsTabs;
