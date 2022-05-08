import React from 'react';
import { ethers } from "ethers";
import './App.css';
import ABI from './abi.json';

function App() {
  const [ favNumber, setFavouriteNumber ] = React.useState(0);
  const ContractAddress = "0x07BB1ea09a52bc9E751eF96eb08a80a39DbA73f5";
  const ContractABI = ABI;
  let Contract;
  let signer;
  const provider = new ethers.providers.Web3Provider(window.ethereum, "ropsten");
  provider.send("eth_requestAccounts", []).then(() => {
    provider.listAccounts().then((accounts) => {
      signer = provider.getSigner(accounts[0]);
      Contract = new ethers.Contract(
        ContractAddress,
        ContractABI,
        signer
      );
    });
  });

  async function getMyFavNumber() {
    const getNumberPromise = Contract.getNumber();
    const num = await getNumberPromise;
    setFavouriteNumber(num);
    alert('Data Fetched')
  }
  
  async function setFavNumber() {
    const number = document.getElementById("mood").value;
    const promise = Contract.setNumber(number);
    await promise;
    alert('Transaction Sent')
  }
  return (
    <div className="App shadow-lg">
      <header className="App-header">
        <h1 className="text-3xl font-bold text-center">
            Favourite Number Smart Contract
        </h1>
        <br/>
        <hr/>
        <br/>
        <div>
          <p>Here we can set or get the Fav:</p>
          <br />
                <div>
                    <label htmlFor="mood" className="block text-sm font-medium text-gray-700">
                    Input Number
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="mood"
                        id="mood"
                        className="py-2 px-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        placeholder="1"
                      />
                    </div>
                  </div>
            </div>
        <br/>
        <button
        type="button"
        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
         onClick={() => getMyFavNumber()}>Get Number</button> &nbsp;
        <button
        type="button"
        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
         onClick={() => setFavNumber()}>Set Number</button>

         <br/>
         <br/>
         <div>
         Number from Contract : { favNumber }
           </div>
      </header>
    </div>
  );
}

export default App;
