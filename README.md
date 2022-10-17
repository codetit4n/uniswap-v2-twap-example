# Uniswap-v2-twap-goerli

Simple solidity contract to calculate Time Weighted Average Price of a uniswap v2 pair on goerli network.

Find my notes here: https://lokesh-kumar.notion.site/1-Time-Weighted-Average-Price-TWAP-aaf018e0a55f4360a65973b076d48ced

## Inspiration
Video: https://www.youtube.com/watch?v=Ar4Ik7Bov0U

Repo(not working since ropsten is deprecated): https://github.com/t4sk/uniswap-v2-twap 

Deployed and verified example: https://goerli.etherscan.io/address/0xECe1c4fC41a646246D17aCa94062901B6A2BC66f


Don't forget to update the env file.

```shell
npm i

npx hardhat compile

npx hardhat clean

npx hardhat run scripts/deploy.js --network goerli

CONTRACT_ADDR=
npx hardhat verify --network goerli $CONTRACT_ADDR "Constructor argument 1"
```
