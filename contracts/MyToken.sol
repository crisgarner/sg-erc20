// SPDX-License-Identifier: MIT

pragma solidity 0.7.5;

interface ERC20 {
function name() external view returns (string memory);
function symbol() external view returns (string memory);
function decimals() external view returns (uint8);
function totalSupply() external view returns (uint256);
function balanceOf(address _owner) external view returns (uint256 balance);
function transfer(address _to, uint256 _value) external returns (bool success);
function transferFrom(address _from, address _to, uint256 _value) external returns (bool success);
function approve(address _spender, uint256 _value) external returns (bool success);
function allowance(address _owner, address _spender) external view returns (uint256 remaining);

event Transfer(address indexed _from, address indexed _to, uint256 _value);
event Approval(address indexed _owner, address indexed _spender, uint256 _value);
}

contract MyToken is ERC20 {
	string public override name = "My Token";
	string public override symbol = "MYT";
	uint8 public override decimals = 18;
	uint256 public override totalSupply;

	constructor(address _owner, uint256 _initialSupply){
		usersBalance[_owner] = _initialSupply;
		totalSupply = _initialSupply;
	}

	function mint(uint256 _value) public {
		usersBalance[msg.sender] = usersBalance[msg.sender] + _value;
		totalSupply += _value;
	}

	// Hacer funcion BUY que permita comprar tokens con ETH
	// Hacer funcion Burn
	mapping(address => uint256) public usersBalance;
	mapping(address => 	mapping(address => uint256)) public override allowance;

	function balanceOf(address _owner) public override view returns (uint256 balance){
		return usersBalance[_owner];
	}

	function transfer(address _to, uint256 _value) external override returns (bool success){
		usersBalance[msg.sender] = 	usersBalance[msg.sender] - _value;
		usersBalance[_to] = usersBalance[_to] + _value;
		emit Transfer(msg.sender, _to, _value);
		return true;
	}

	function transferFrom(address _from, address _to, uint256 _value) external override returns (bool success){
		if(allowance[_from][_to] <= _value){
			usersBalance[_from] = 	usersBalance[_from] - _value;
			usersBalance[_to] = usersBalance[_to] + _value;
			allowance[_from][_to] = allowance[_from][_to] - _value;
			emit Transfer(_from, _to, _value);
			return true;
		}
	}

	function approve(address _spender, uint256 _value) external override returns (bool success){
 		allowance[msg.sender][_spender] = allowance[msg.sender][_spender] + _value;
		emit Approval(msg.sender,_spender,_value);
	 	return true;
	}
}



