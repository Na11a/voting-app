const hre = require("hardhat");

async function main(){
  const voting = await hre.ethers.getContractFactory("Voting");
  const deployedVotingContract = await voting.deploy()

  console.log(`Contract Address deployed: ${deployedVotingContract.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
})

//Contract Address deployed: 0x6a9A3BABd63Ca85DfD57Ca39D58fE4E59C064F01
// https://sepolia.etherscan.io/tx/0xc1ad7e0277a15120f381c3a05c7b00300b1c8b56bf37375ce53020f99d663b05
// 0xaB32cF4621a8B37Ad68CD4d4F9728b2B6388eE93
