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

const OfferTab = () => {
  const { address, signer, contract, provider, chainId, connect } =
    useContext(AuthContext);
  const [isloading, setisloading] = useState(false);
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  console.log(signer);
  const [addresseth, setAddress] = useState("");

  const [owners, setowners] = useState([]);
  async function loadOwners() {
    const owners = await contract?.getOwners();
    setowners(owners);
  }
  useEffect(() => {
    loadOwners();
  }, [contract]);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  const OnsubmitAddress = async () => {
    try {
      setisloading(true);
      if (addresseth == "") {
        alert("all fields required");
        return;
      }

      let transaction = await signer?.addOwner(addresseth);
      await transaction?.wait();
      console.log("transaction", transaction);
      setAddress("");

      alert("Account added successfully");
      setisloading(false);
      closeHandler();
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
      }
    }

    // notify("NFT Created Successfully");
    // alert("NFT created Successfully");
  };

  const onRemoveAddress = async (address) => {
    try {
      setisloading(true);

      let transaction = await signer?.removeOwner(address);
      await transaction?.wait();
      console.log("transaction", transaction);
      setAddress("");

      alert("Account deleted successfully");
      setisloading(false);
      closeHandler();
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
      }
    }

    // notify("NFT Created Successfully");
    // alert("NFT created Successfully");
  };
  return (
    <>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
        className="bg-black"
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Add Address
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            value={addresseth}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            color="primary"
            size="lg"
            placeholder="0x000"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={closeHandler}>
            Close
          </Button>
          <Button
            auto
            onClick={() => {
              OnsubmitAddress();
            }}
          >
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      {/* <!-- Offers --> */}
      <div
        className="tab-pane fade show active"
        id="offers"
        role="tabpanel"
        aria-labelledby="offers-tab"
      >
        <button
          onClick={() => {
            handler();
          }}
          className="focus:outline-none text-white bg-blue my-3 rounded-full hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium  text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
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
              {owners?.map((account, index) => (
                <tr className="bg-gray-900 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {account}
                  </th>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => {
                        onRemoveAddress(account);
                      }}
                      className="focus:outline-none text-white bg-red rounded-full hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium  text-sm px-5 py-1.5  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    >
                      {isloading ? <Loading /> : "remove"}
                    </button>
                  </td>{" "}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default OfferTab;
