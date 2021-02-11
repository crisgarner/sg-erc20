import { ethers } from "hardhat";

const { expect } = require("chai");

describe("My token", function () {
	it("Should return the new greeting once it's changed", async function () {
		const [owner, addr1] = await ethers.getSigners();
		const MyToken = await ethers.getContractFactory("MyToken");
		const mytoken = await MyToken.deploy(
			"0x43a0d4e75d8687741a3caf46a490d3a2222afaff",
			ethers.utils.parseEther("1000")
		);

		await mytoken.deployed();

		expect(await mytoken.name()).to.equal("My Token");
		expect(await mytoken.symbol()).to.equal("MYT");
		expect(await mytoken.decimals()).to.equal(18);
		expect(await mytoken.totalSupply()).to.equal(ethers.utils.parseEther("1000"));
		await mytoken.connect(addr1).mint(ethers.utils.parseEther("1"));
		expect(await mytoken.totalSupply()).to.equal(ethers.utils.parseEther("1001"));
		expect(await mytoken.balanceOf("0x43a0d4e75d8687741a3caf46a490d3a2222afaff")).to.equal(
			ethers.utils.parseEther("1000")
		);

		expect(await mytoken.balanceOf(await addr1.getAddress())).to.equal(
			ethers.utils.parseEther("1")
		);
	});
});
