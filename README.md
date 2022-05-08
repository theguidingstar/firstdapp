# Simple Dapp Example using React, smart contract on Ropsten Network

This Application used React, Tailwind for the UI.
Ether.js to interact with Metamask and smart contract connection/transations.

Folder Structure

/contract -> contains the Sample contract to deployed.

/src -> React Application code.
/src/abi.json -> ABI of the smart contract 

App.js -> Starting point of the React Application.

This Application connects to meta mask wallet and perform the transactions.

## Steps to run the project: 


1. `npm install`
2. `npm start`

## Step by Step Description: 

1. Create a React Application using `npx create-react-app firstDapp`
2. Create a contract folder.
3. Open Remix IDE. (`https://remix.ethereum.org/`)
4. Copy the contract into a newfile under contract folder.
5. Save the contract. Check under compile contract for any error.
6. Install Metamask wallet if not already installed.
7. Switch to Ropeston Test Net. If Test nets are not displayed turn them on from Metamask settings.
8. Switch to Solidarity complier tab. Compile the contract to check for error.
9. Switch over to Deploy Tab on remix. Change the environment to "Injected Web3" to switch deployment to Ropsten.
10. Click on deploy. Approve the transaction on the Metamask (Request ETH from Facet for in case you do not have the balance on the ETH)


Reference links: 
[Metamask](https://metamask.io/)

[Remix IDE](https://remix.ethereum.org/)

[Ropeston](https://ropsten.etherscan.io/)

[Ropeston Facet](https://faucet.dimensions.network/)


Contact in case of doubts and contribution: 
[Email](mailto:yashshh123@gmail.com)
