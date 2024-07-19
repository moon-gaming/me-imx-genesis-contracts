// SPDX-License-Identifier: AGPL-3.0-or-later
pragma solidity 0.8.19;

import '@imtbl/contracts/contracts/token/erc721/preset/ImmutableERC721.sol';

contract GenesisHero is ImmutableERC721 {
    constructor(
        string memory _name,
        string memory _symbol,
        string memory _baseURI,
        string memory _contractURI,
        address _royaltyAllowlist,
        uint96 _feeNumerator
    )
        ImmutableERC721(
            _msgSender(),
            _name,
            _symbol,
            _baseURI,
            _contractURI,
            _royaltyAllowlist,
            _msgSender(),
            _feeNumerator
        ) 
    {
    }

    function grantAdminRole(address user) public onlyRole(DEFAULT_ADMIN_ROLE){
        _grantRole(DEFAULT_ADMIN_ROLE, user);
    }
}