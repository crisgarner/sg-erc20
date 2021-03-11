import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { deployments } from "hardhat";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
	// code here
	const MyNFT = await deployments.getOrNull("MyNFT");
	console.log("🚀 ~ file: 000_NFT.ts ~ line 8 ~ MyNFT", MyNFT);
	if (!MyNFT) {
		const namedAccounts = await hre.getNamedAccounts();
		const deployNFT = await deployments.deploy("MyNFT", {
			from: namedAccounts.deployer,
		});
		console.log(deployNFT.address);
	}
};
export default func;
