import {
  useState,
  createContext,
  useEffect,
  useCallback,
  useReducer,
} from "react";
import { useRouter } from "next/router";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { ethers, providers } from "ethers";
import { donationAddress } from "../config";

import axios from "axios";
import WalletLink from "walletlink";
// import donationContract from "../artifacts/contracts/NFT.sol/NFT.json";
import donationContract from "../artifacts/contracts/MantleMultisig.sol/MantleMultisig.json";
import Web3Modal from "web3modal";
import { ellipseAddress, getChainData } from "../lib/utilities";

//write a type for status and use
type authContextType = {
  provider?: any;
  signer?: any;
  web3Provider?: any;
  contract?: any;
  address?: string;
  chainId?: number;
  ethprice?: string;
  connect?: () => void;
  disconnect?: () => void;
  logout?: () => void;
};

const authContextDefaultValues: authContextType = {
  provider: null,
  signer: null,
  web3Provider: null,
  contract: null,
  address: null,
  chainId: null,
  ethprice: null,
  connect: null,
  disconnect: null,
  logout: () => {},
};

export const AuthContext = createContext<authContextType>(
  authContextDefaultValues
);

const INFURA_ID = "460f40a260564ac4a4f4b3fffb032dad";

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      infuraId: INFURA_ID, // required
    },
  },

  "custom-walletlink": {
    display: {
      logo: "https://play-lh.googleusercontent.com/PjoJoG27miSglVBXoXrxBSLveV6e3EeBPpNY55aiUUBM9Q1RCETKCOqdOkX2ZydqVf0",
      name: "Coinbase",
      description: "Connect to Coinbase Wallet (not Coinbase App)",
    },
    options: {
      appName: "Coinbase", // Your app name
      networkUrl: `https://mainnet.infura.io/v3/${INFURA_ID}`,
      chainId: 1,
    },
    package: WalletLink,
    connector: async (_, options) => {
      const { appName, networkUrl, chainId } = options;
      const walletLink = new WalletLink({
        appName,
      });
      const provider = walletLink.makeWeb3Provider(networkUrl, chainId);
      await provider.enable();
      return provider;
    },
  },
};

let web3Modal;
if (typeof window !== "undefined") {
  web3Modal = new Web3Modal({
    network: "mainnet", // optional
    cacheProvider: true,
    providerOptions, // required
  });
}

type StateType = {
  contract?: any;
  signer?: any;
  provider?: any;
  web3Provider?: any;
  address?: string;
  chainId?: number;
  ethprice?: string;
};

type ActionType =
  | {
      type: "SET_WEB3_PROVIDER";
      provider?: StateType["provider"];
      web3Provider?: StateType["web3Provider"];
      address?: StateType["address"];
      chainId?: StateType["chainId"];
      // ethprice?: StateType['ethprice'];
    }
  | {
      type: "SET_CONTRACT";
      contract?: StateType["contract"];
    }
  | {
      type: "SET_SIGNER";

      signer?: StateType["signer"];
    }
  | {
      type: "SET_ADDRESS";
      address?: StateType["address"];
    }
  | {
      type: "SET_CHAIN_ID";
      chainId?: StateType["chainId"];
    }
  | {
      type: "SET_ETH_PRICE";
      ethprice?: StateType["ethprice"];
    }
  | {
      type: "RESET_WEB3_PROVIDER";
    };

const initialState: StateType = {
  contract: null,
  signer: null,
  provider: null,
  web3Provider: null,
  address: null,
  chainId: null,
  ethprice: null,
};

function reducer(state: StateType, action: ActionType): StateType {
  switch (action.type) {
    case "SET_WEB3_PROVIDER":
      return {
        ...state,
        provider: action.provider,
        web3Provider: action.web3Provider,
        address: action.address,
        chainId: action.chainId,
      };
    case "SET_CONTRACT":
      return {
        ...state,

        contract: action.contract,
      };
    case "SET_SIGNER":
      return {
        ...state,
        signer: action.signer,
      };
    case "SET_ADDRESS":
      return {
        ...state,
        address: action.address,
      };
    case "SET_CHAIN_ID":
      return {
        ...state,
        chainId: action.chainId,
      };
    case "SET_ETH_PRICE":
      return {
        ...state,
        ethprice: action.ethprice,
      };
    case "RESET_WEB3_PROVIDER":
      return initialState;
    default:
      throw new Error();
  }
}

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    provider,
    web3Provider,
    contract,
    signer,
    address,
    chainId,
    ethprice,
  } = state;
  const router = useRouter();

  async function loadContracts() {
    /* create a generic provider and query for unsold market items */
    // const provider = new ethers.providers.JsonRpcProvider();
    // const provider = new ethers.providers.JsonRpcProvider(
    //   'https://rpc-mumbai.maticvigil.com/'
    // );
    const provider = new ethers.providers.JsonRpcProvider(
      "https://rpc.testnet.mantle.xyz"
    );

    // 'https://rpc-mumbai.matic.today'
    // https://polygon-mumbai.g.alchemy.com/v2/2bGIFu-iEnl9RvAOTe1ddZI2gBnuYQGS'
    // 'https://rpc-mumbai.matic.today'
    // ' https://rpc-mumbai.maticvigil.com/'
    // 'https://kovan.infura.io/v3/745fcbe1f649402c9063fa946fdbb84c'
    // 'https://rpc-mumbai.maticvigil.com'
    // 'https://kovan.infura.io/v3/745fcbe1f649402c9063fa946fdbb84c'
    // 'https://kovan.infura.io/v3/745fcbe1f649402c9063fa946fdbb84c'

    const contract = new ethers.Contract(
      donationAddress,
      donationContract.abi,
      provider
    );

    // const getUsd = await contract?.getEthUsd();
    // let number = Number(getUsd.toString());
    // let ethUSDPrice = ethers.utils.formatUnits(number, 8);
    let ethUSDPrice = "1721.00";
    dispatch({
      type: "SET_ETH_PRICE",
      ethprice: ethUSDPrice,
    });
    const { chainId } = await provider.getNetwork();
    if (chainId) {
      dispatch({
        type: "SET_CONTRACT",
        contract: contract,
      });

      // const data = await contract.donationCount();
    } else {
      window.alert("Donation contract not deployed to detected network");
    }
  }

  const connect = useCallback(async function () {
    // console.log('button of connect clicked');

    // This is the initial `provider` that is returned when
    // using web3Modal to connect. Can be MetaMask or WalletConnect.
    const provider = await web3Modal.connect();

    // We plug the initial `provider` into ethers.js and get back
    // a Web3Provider. This will add on methods from ethers.js and
    // event listeners such as `.on()` will be different.

    const web3Provider = new providers.Web3Provider(provider);
    const signer = web3Provider.getSigner() as any;
    const address = await signer.getAddress();
    const network = (await web3Provider.getNetwork()) as any;

    // console.log(signer);

    dispatch({
      type: "SET_WEB3_PROVIDER",
      provider,
      web3Provider,
      address,
      chainId: network.chainId,
    });
  }, []);

  const disconnect = useCallback(
    async function () {
      await web3Modal.clearCachedProvider();
      if (provider?.disconnect && typeof provider.disconnect === "function") {
        await provider.disconnect();
      }
      dispatch({
        type: "RESET_WEB3_PROVIDER",
      });
    },
    [provider]
  );

  const logout = () => {
    alert("something");
  };

  useEffect(() => {
    loadContracts();

    if (web3Modal.cachedProvider) {
      connect();
    }
  }, [connect]);

  useEffect(() => {
    if (provider?.on) {
      const handleAccountsChanged = (accounts: string[]) => {
        // console.log('accountsChanged', accounts);
        dispatch({
          type: "SET_ADDRESS",
          address: accounts[0],
        });
      };

      const signer_ = web3Provider.getSigner();
      const signer = new ethers.Contract(
        donationAddress,
        donationContract.abi,
        signer_
      );

      dispatch({
        type: "SET_SIGNER",
        signer: signer,
      });

      const handleChainChanged = (_hexChainId: string) => {
        window.location.reload();
      };

      const handleDisconnect = (error: { code: number; message: string }) => {
        console.log("disconnect", error);
        disconnect();
      };

      provider.on("accountsChanged", handleAccountsChanged);
      provider.on("chainChanged", handleChainChanged);
      provider.on("disconnect", handleDisconnect);

      // Subscription Cleanup
      return () => {
        if (provider.removeListener) {
          provider.removeListener("accountsChanged", handleAccountsChanged);
          provider.removeListener("chainChanged", handleChainChanged);
          provider.removeListener("disconnect", handleDisconnect);
        }
      };
    }
  }, [provider, disconnect]);

  const chainData = getChainData(chainId);

  const contextValue = {
    provider,
    web3Provider,
    contract,
    signer,
    address,
    chainId,
    ethprice,
    connect,
    disconnect,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;
