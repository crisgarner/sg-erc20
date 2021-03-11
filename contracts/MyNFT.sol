// SPDX-License-Identifier: MIT

pragma solidity 0.7.5;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyNFT is ERC721 , Ownable {

    constructor() ERC721("MyNFT", "MNFT") {

    }

		function mint(address _receiver) public onlyOwner{
		  _mint(_receiver, 1);
		}

		function mint2(address _receiver) public onlyOwner{
		  _mint(_receiver, 2);
		}

		function mint3(address _receiver) public onlyOwner{
		  _mint(_receiver, 3);
		}
}
