// SPDX-License-Identifier: MIT

pragma solidity 0.7.5;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyToken is ERC20, Ownable {
	constructor(uint256 initialSupply) ERC20("My Token", "MYT") {
        _mint(msg.sender, initialSupply);
    }

		function mint(address _receiver, uint256 _amount) public onlyOwner{
				_mint(_receiver, _amount);
		}
}



