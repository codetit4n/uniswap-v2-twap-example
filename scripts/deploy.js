async function main() {
  try {
    const UniswapV2Twap = await ethers.getContractFactory("UniswapV2TWAP");
    const twap = await UniswapV2Twap.deploy(process.env.PAIR_GOERLI);

    await twap.deployed();

    console.log("Contract deployed to:", twap.address);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

main()