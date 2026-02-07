import { network } from "hardhat";

const { ethers } = await network.connect();

async function main() {
  // 1. Get the signers with TypeScript types
  // sender and receiver will be typed as 'HardhatEthersSigner'
  const [sender, receiver] = await ethers.getSigners();

  const senderBalance = await ethers.provider.getBalance(sender.address);
  console.log(`Sender balance: ${ethers.formatEther(senderBalance)} ETH`);

  // 2. Create and type the transaction object
  const tx = {
    to: receiver.address,
    value: ethers.parseEther("50.0") 
  };

  // 3. Send the transaction
  console.log("Sending 50 ETH from Account #0 to Account #1...");
  const transaction = await sender.sendTransaction(tx);

  // 4. Wait for the transaction to be mined
  await transaction.wait();

  const receiverBalance = await ethers.provider.getBalance(receiver.address);
  console.log(`Done! New Receiver balance: ${ethers.formatEther(receiverBalance)} ETH`);
}

// Standard pattern for running async main functions in TypeScript
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});