import React, { useState, useEffect } from "react";
import MyToken from "./contracts/MyToken.json";

import "./App.css";
import Web3Modal from "web3modal";
import { ethers } from "ethers";

const App = () => {
	const [address, setAddress] = useState("");
	const [contract, setContract] = useState();
	const providerOptions = {
		/* See Provider Options Section */
	};

	const web3Modal = new Web3Modal({
		network: "http://127.0.0.1:8545/", // optional
		cacheProvider: true, // optional
		providerOptions, // required
	});

	const connect = async () => {
		const provider = await web3Modal.connect();
		const web3Provider = new ethers.providers.Web3Provider(provider);
		const currentSigner = web3Provider.getSigner();
		const nftContract = new ethers.Contract(MyToken.address, MyToken.abi, currentSigner);
		setContract(nftContract);
	};

	const balance = async () => {
		const bal = await contract.totalSupply();
		alert(ethers.utils.formatEther(bal));
	};

	const mint = async () => {
		const tx = await contract.mint(
			"0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
			ethers.utils.parseEther("1000")
		);
	};

	useEffect(() => {
		const load = async () => {};

		load();
	}, [address]);

	return (
		<div className="App">
			<h1>{address}</h1>
			<button onClick={connect}>Connect</button>
			<button onClick={balance}>Balance</button>
			<button onClick={mint}>mint</button>
		</div>
	);
};

export default App;
