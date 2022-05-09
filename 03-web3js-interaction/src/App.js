import React, { useEffect, useState } from "react";
import Web3 from "web3";

// Taken after local blockchain is started after "truffle deploy"
const ETH_PROVIDER_URL = "http://127.0.0.1:9545/";

// Taken from the deployed contract after "truffle migrate"
const CONTRACT_ADDRESS = "0x998F7506853125E87f69707Ae113Ed4D0cEBA85c";
const CONTRACT_ABI = [
  {
    inputs: [],
    name: "helloWorld",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
    constant: true,
  },
];

const App = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    const web3 = new Web3(ETH_PROVIDER_URL);
    const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
    contract.methods.helloWorld().call().then(setData);
  }, []);

  return (
    <div style={{ margin: "50px" }}>
      Data from the contract says:
      <span style={{ fontWeight: 700, paddingLeft: "5px" }}>{data}</span>
    </div>
  );
};

export default App;
