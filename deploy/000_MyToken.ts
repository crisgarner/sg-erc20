import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { deployments, ethers } from "hardhat";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
	// code here
	const MyToken = await deployments.getOrNull("MyToken");

	if (!MyToken) {
		const namedAccounts = await hre.getNamedAccounts();
		const deployMyToken = await deployments.deploy("MyToken", {
			from: namedAccounts.deployer,
			args: [ethers.utils.parseEther("100")],
		});
		console.log(deployMyToken.receipt?.gasUsed);
	}
};
export default func;
